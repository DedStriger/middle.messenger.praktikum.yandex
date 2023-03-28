import tmp from './input.tmp'
import * as Handlebars from 'handlebars'
import './input.scss'
import Block from '../../../core/Block';

export type InputProps = {
    name: string;
    label: string;
    type?: string;
    value?: string;
    placeholder?: string;
    id: string;
}

export default class input extends Block<InputProps> {
    constructor(props: InputProps){
        super('div', props.id, props)
    }

    render(): string {
        return Handlebars.compile(tmp)(this.props)  
    }
}
