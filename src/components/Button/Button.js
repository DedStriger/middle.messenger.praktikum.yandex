import Handlebars from 'handlebars';
import tmp from './Button.tmp.js';
import './Button.scss'

export default function Button(data){
    return Handlebars.compile(tmp)(data)
}