import * as Handlebars from 'handlebars';
import tmp from './Button.tmp';
import './Button.scss'
import Block from '../../../core/Block';

type Sublink = {
    text: string;
    link: string;
}

export type ButtonProps = {
    style?: string;
    text: string;
    click?: string;
    onClick?: string;
    sublink?: Sublink;
    id: string;
}


export default class Button extends Block<ButtonProps>{
    constructor(props: ButtonProps){
        super('div', props.id, props)
    }

    render(): string {
        return Handlebars.compile(tmp)(this.props)  
    }
}
