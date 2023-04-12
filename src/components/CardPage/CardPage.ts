import './CardPage.scss'
import * as Handlebars from 'handlebars';
import tmp from './CardPage.tmp'
import Block from '../../../core/Block';

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
        return Handlebars.compile(tmp)(this.props)  
    }
}
