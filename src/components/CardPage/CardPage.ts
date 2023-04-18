import './CardPage.scss'
import * as Handlebars from 'handlebars';
import tmp from './CardPage.tmp'
import Block from '../../../core/Block';
import { CHAT_LINK } from '../../../utils/links';

export type CardPageProps = {
    title: string;
    content: string;
    id: string;
}

export default class CardPage extends Block<CardPageProps>{
    constructor(props: CardPageProps){
        super('div', props.id, props)
    }

    render(): string {
        if(!!localStorage.getItem('auth')){
            window.location.href = CHAT_LINK
            return '';
        }
        return Handlebars.compile(tmp)(this.props)  
    }
}
