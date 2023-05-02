import Block from '../../../core/Block';
import Validation from '../../../core/Validation';
import { HTTP } from '../../../static/js';
import { apiUrl } from '../../../utils/apiUrl';
import { initWS } from '../../../utils/initWS';
import { ResponseApi } from '../../../utils/respType';
import { User } from '../../../utils/userType';
import { windowsEvents } from '../../../utils/windowsEvents';
import './Message.scss';
import tmp from './Message.tmp';
import * as Handlebars from 'handlebars';

type Mess = {
    user: string;
    mess: string;
}

type ApiMess = {id: string, content: string}

export type MessageProps = {
    id: string;
    avatar: string;
    name: string;
    chatId: string;
    users?: User[];
    isGetUser?: boolean;
    messages?: Mess[];
    isOpenWS?: boolean;
    socket?: WebSocket;
}

export default class Message extends Block<MessageProps> {
    constructor(props: MessageProps){
        super('div', props.id, {...props, messages: []})
    }

    validation = new Validation();

    componentDidMount(): void {
        windowsEvents['newMessage'] = (mess: ApiMess) => {
            this.setProps({
                messages: [{
                    user: this.props.users?.find(i => i.id === mess.id)?.display_name || '',
                    mess:  mess.content
              }, ...this.props.messages || [] ]
            })
        }

        windowsEvents['getOldMessage'] = (data: ApiMess[]) => {
            this.setProps({
                messages: data.map(d => ({
                    user: this.props.users?.find(i => i.id === d.id)?.display_name || '',
                    mess:  d.content
                }))
            })
        }

        if(!this.props.isOpenWS){
            initWS(this.props.chatId, this.setProps)
            this.setProps({
                isOpenWS: true,
            })
        }
        windowsEvents[this.props.id + 'Send'] = (e: Event) => {
            e.preventDefault();
            const formData = new FormData(e.target as HTMLFormElement);
            const mess = formData.get('message') as string
            if(this.validation.checkMessage(mess)){
                this.props.socket?.send(JSON.stringify({
                    content: mess,
                    type: 'message',
                  }))
            }
        }

        windowsEvents['editChatUser'] = (id: HTMLInputElement, type: 'add' | 'remove', chatId: string) => {
            const respFunc = type === 'add' ? HTTP.put : HTTP.delete
            respFunc(`${apiUrl}chats/users`, {
                data: {
                    users: [Number(id.value)],
                    chatId: +chatId
                }
            })
            .then((d: ResponseApi) => {
                if(d.status !== 200){
                    alert(JSON.parse(d.response).reason)
                }else{
                    getUsers()
                }
            })
            .catch((e: string) => alert(e))
        }

        windowsEvents['toggleChatMenu'] = () => {
            const menu = document.getElementById(`${this.props.id}_menu`)
            menu?.classList.contains('active') ? menu.classList.remove('active') : menu?.classList.add('active')
        }

        const getUsers = () => {
            HTTP.get(`${apiUrl}chats/${this.props.chatId}/users`)
            .then((d: ResponseApi) => {
                this.setProps({
                    isGetUser: true,
                    users: JSON.parse(d.response) as User[]
                })
            })
            .catch((e: unknown) => alert(e))
        }

        !this.props.isGetUser && getUsers()
    }

    render(): string {
        return Handlebars.compile(tmp)({
            ...this.props,
            submit: `window.events['${this.props.id}Send'](event)`,
            addUser: `window.events.editChatUser(${this.props.id}_user, 'add', ${this.props.chatId})`,
            removeUser: `window.events.editChatUser(${this.props.id}_user, 'remove', ${this.props.chatId})`,
            removeChat: `window.events.removeChat(${this.props.chatId})`
        })
    }
}
