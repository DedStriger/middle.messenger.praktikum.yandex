import Block from "../../../core/Block";
import * as Handlebars from 'handlebars';
import tmp from './Chat.tmp'
import './Chat.scss'
import { windowsEvents } from "../../../utils/windowsEvents";
import Message from "../../components/Message/Message";
import Avatar from "../../components/Avatar/Avatar";
import HTTPTransport from "../../../core/HTTPTransport";
import { apiUrl } from "../../../utils/apiUrl";
import { ChatResponse, ResponseApi } from "../../../utils/respType";
import ChatItem from "../../components/ChatItem/ChatItem";
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
    }

    componentDidMount(): void {
        windowsEvents['chatClick'] = (elem: HTMLDivElement) => {
            const {id, src, name} = elem.dataset
            this.setProps({
                message: new Message({
                    id: 'message_'+id,
                    avatar: new Avatar({id: 'message_avatar_'+id, src}).getFirstRender(),
                    name: name || ''
                }).getFirstRender()
            })
        }

        const getChats = () => {
            new HTTPTransport().get(`${apiUrl}chats`)
            .then((d: ResponseApi) => {
                const data = JSON.parse(d.response)
                if(d.status === 200){
                    this.setProps({
                        getChats: true,
                        chats: data.map((m: ChatResponse) => new ChatItem({
                            id: m.id,
                            avatar: m.avatar,
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
        }

        windowsEvents['createChat'] = () => {
            new HTTPTransport().post(`${apiUrl}chats`, {data: {title: 'new chat'}})
            .then((d: ResponseApi) => {
                if(d.status === 200){
                    getChats()
                }else{
                    alert(JSON.parse(d.response).reason)
                }
            })
        }

       !this.props.getChats && getChats()
    }

    render(): string {
        return Handlebars.compile(tmp)(this.props)  
    }
}

