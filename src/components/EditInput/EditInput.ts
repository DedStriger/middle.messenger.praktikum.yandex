import Block from '../../../core/Block'
import input, { InputProps } from '../input/input'
import './EditInput.scss'
import tmp from './EditInput.tmp'
import * as Handlebars from 'handlebars'


export default class EditInput extends Block<InputProps> {
    constructor(props: InputProps){
        super('div', props.id, props)
    }

    render(): string {
        const innerInput = new input(this.props)
        return Handlebars.compile(tmp)({elem: innerInput.getFirstRender()})  
    }
}
