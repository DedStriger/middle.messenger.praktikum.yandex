import Block from "../../../core/Block";
import Avatar from "../Avatar/Avatar";
import './ChatItem.scss'
import tmp from './ChatItem.tmp'
import * as Handlebars from 'handlebars';
 
export type ChatItemType = {
    id: string;
    avatar?: string;
    name: string;
    lastMessage: string;
    wasOnline: string;
    unreadMessage?: number;
}

export default class ChatItem extends Block<ChatItemType> {
    constructor(props: ChatItemType){
        super('div', props.id, props)
    }

    render(): string {
        return Handlebars.compile(tmp)({
            ...this.props,
            src: this.props.avatar || '',
            avatar: new Avatar({id: `${this._meta?.id!}Avatar`, src: this.props.avatar}).getFirstRender()
        })
    }
}
