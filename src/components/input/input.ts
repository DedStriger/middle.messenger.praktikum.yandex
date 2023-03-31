import tmp from './input.tmp'
import * as Handlebars from 'handlebars'
import './input.scss'
import Block from '../../../core/Block';
import { windowsEvents } from '../../../utils/windowsEvents';
import Validation, { ValidationKind } from '../../../core/Validation';

export type InputProps = {
    name: string;
    label: string;
    validation: ValidationKind;
    type?: string;
    value?: string;
    placeholder?: string;
    onfocus?: string;
    id: string;
}

export default class input extends Block<InputProps> {
    
    constructor(props: InputProps){
        super('div', props.id, props)
    }

    componentDidMount(): void {
        windowsEvents[this._meta?.id! + 'focus'] = (elem: HTMLInputElement) => {elem.classList.remove('error')}
        windowsEvents[this._meta?.id! + 'blur'] = (elem: HTMLInputElement) => {
            const validation = new Validation();

            if(!validation[this.props.validation](elem.value)){
                elem.classList.add('error')
            }
        }
    }

    render(): string {
        return Handlebars.compile(tmp)({...this.props, 
            onfocus: `window.events['${this._meta?.id!}focus'](this)`,
            onblur: `window.events['${this._meta?.id!}blur'](this)`
        })      
    }
}