import Block from '../../../core/Block';
import './Back.scss';
import tmp from './Back.tmp';
import * as Handlebars from 'handlebars';

export type BackProps = {
    id: string;
}

export default class Back extends Block<BackProps> {
    constructor(props: BackProps){
        super('div', props.id, props)
    }

    render(): string {
        return Handlebars.compile(tmp)({})  
    }
}
