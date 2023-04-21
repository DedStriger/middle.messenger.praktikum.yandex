import Block from "../../../core/Block";
import * as Handlebars from 'handlebars';
import tmp from './Chat.tmp'
import './Chat.scss'
import { windowsEvents } from "../../../utils/windowsEvents";
import Message from "../../components/Message/Message";
import Avatar from "../../components/Avatar/Avatar";
import { apiUrl } from "../../../utils/apiUrl";
import { ChatResponse, ResponseApi } from "../../../utils/respType";
import ChatItem from "../../components/ChatItem/ChatItem";
import { EDIT_PROFILE, LOGIN_LINK } from "../../../utils/links";
import { HTTP, router } from "../../../static/js";
export type ChatProps = {
    search: string;
    chats: string;
    message?: string;
    getChats?: boolean;
    button: string;
}


export default class Chat extends Block<ChatProps>{
    constructor(props: ChatProps){
        super('div', 'chat', props)
        if(!localStorage.getItem('auth')){
            console.log('here')
            window.location.href = LOGIN_LINK
        }
    }

    componentDidMount(): void {
        windowsEvents['goEdit'] = () => {router.go(EDIT_PROFILE)}
        windowsEvents['chatClick'] = (elem: HTMLDivElement) => {
            const {id, src, name} = elem.dataset
            this.setProps({
                message: new Message({
                    id: 'message_'+id,
                    chatId: id + '',
                    avatar: new Avatar({id: 'message_avatar_'+id, src}).getFirstRender(),
                    name: name || ''
                }).getFirstRender()
            })
        }

        const getChats = () => {
            HTTP.get(`${apiUrl}chats`)
            .then((d: ResponseApi) => {
                const data = JSON.parse(d.response)
                if(d.status === 200){
                    this.setProps({
                        message: null,
                        getChats: true,
                        chats: data.map((m: ChatResponse) => new ChatItem({
                            id: m.id,
                            avatar: m.avatar && `https://ya-praktikum.tech/api/v2/resources/${m.avatar}`,
                            name: m.title,
                            lastMessage: m.last_message?.content || '',
                            wasOnline: m.last_message && new Date(m.last_message.time).toLocaleDateString(),
                            unreadMessage: m.unread_count
                        }).getFirstRender()).join('')
                    })
                }else{
                    alert(data.reason)
                }
            })
            .catch((e: unknown) => alert(e))
        }

        windowsEvents['removeChat'] = (id: string) => {
            HTTP.delete(`${apiUrl}chats`, {
                data: {
                    chatId: id
                }
            }).then((d: ResponseApi) => {
                if(d.status === 200){
                    getChats()
                }else{
                    alert(JSON.parse(d.response).reason)
                }
            })
            .catch((e: unknown) => alert(e))
        }

        windowsEvents['createChat'] = () => {
            const name =prompt('Введите название нового чата');
            if(!name){
                alert('Невозможно создать чат без имени')
                return;
            }
            HTTP.post(`${apiUrl}chats`, {data: {title: name}})
            .then((d: ResponseApi) => {
                if(d.status === 200){
                    getChats()
                }else{
                    alert(JSON.parse(d.response).reason)
                }
            })
            .catch((e: unknown) => alert(e))
        }

       !this.props.getChats && getChats()
    }

    render(): string {
        return Handlebars.compile(tmp)(this.props)  
    }
}

