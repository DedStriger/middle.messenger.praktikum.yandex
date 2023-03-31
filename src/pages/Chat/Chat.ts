import Block from "../../../core/Block";
import * as Handlebars from 'handlebars';
import tmp from './Chat.tmp'
import './Chat.scss'
import { windowsEvents } from "../../../utils/windowsEvents";
import Message from "../../components/Message/Message";
import Avatar from "../../components/Avatar/Avatar";

export type ChatProps = {
    search: string;
    chats: string;
    message?: string;
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
    }

    render(): string {
        return Handlebars.compile(tmp)(this.props)  
    }
}
