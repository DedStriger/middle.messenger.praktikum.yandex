import './CardPage.scss'
import * as Handlebars from 'handlebars';
import tmp from './CardPage.tmp'

export type CardPageProps = {
    title: string;
    content: string;
}

export default function CardPage(props: CardPageProps){
    return Handlebars.compile(tmp)(props)
}
