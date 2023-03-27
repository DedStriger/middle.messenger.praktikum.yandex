import input, { InputProps } from '../input/input'
import './EditInput.scss'
import tmp from './EditInput.tmp'
import * as Handlebars from 'handlebars'



export default function EditInput(props: InputProps){
    const t = Handlebars.compile(tmp)
    return t({
        elem: input(props)
    })
}
