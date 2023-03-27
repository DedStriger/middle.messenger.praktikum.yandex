import tmp from './input.tmp'
import * as Handlebars from 'handlebars'
import './input.scss'

export type InputProps = {
    name: string;
    label: string;
    type?: string;
    value?: string;
    placeholder?: string;
}

export default function input(props: InputProps){
    const t = Handlebars.compile(tmp)
    return t(props)
}
