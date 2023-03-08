import tmp from './input.tmp.js'
import Handlebars from 'handlebars'
import './input.scss'

export default function input(data){
    const t = Handlebars.compile(tmp)
    return t(data)
}