import './CardPage.scss'
import * as Handlebars from 'handlebars';
import tmp from './CardPage.tmp'
import Block from '../../../core/Block';
import { checkUserAuth } from '../../../utils/checkUserAuth';

export type CardPageProps = {
    title: string;
    content: string;
    id: string;
}

export default class CardPage extends Block<CardPageProps>{
    constructor(props: CardPageProps){
        super('div', props.id, props)
    }

    async componentDidMount() {
        await checkUserAuth(() => this.show())
    }

    render(): string {
        this.hide()
        return Handlebars.compile(tmp)(this.props) 
    }
}
