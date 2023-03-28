import Block from '../../../core/Block';
import './Error.scss';
import tmp from './Error.tmp'
import * as Handlebars from 'handlebars';

export type ErrorComponentProps = {
    number: string;
    text: string;
}

export default class ErrorComponent extends Block<ErrorComponentProps>{
    constructor(props: ErrorComponentProps){
        super('div', props.number, props)
    }

    render(): string {
        return Handlebars.compile(tmp)(this.props)  
    }
}
