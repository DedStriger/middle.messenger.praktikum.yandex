import input from '../input/input'
import './EditInput.scss'
import tmp from './EditInput.tmp.js'
import Handlebars from 'handlebars'

export default function EditInput(data){
    const t = Handlebars.compile(tmp)
    return t({
        elem: input(data)
    })
}
