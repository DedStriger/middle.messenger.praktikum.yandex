import * as Handlebars from 'handlebars';
import tmp from './Button.tmp';
import './Button.scss'

type Sublink = {
    text: string;
    link: string;
}

export type ButtonProps = {
    style?: string;
    text: string;
    click?: string;
    sublink?: Sublink;
}

export default function Button(props: ButtonProps){
    return Handlebars.compile(tmp)(props)
}
