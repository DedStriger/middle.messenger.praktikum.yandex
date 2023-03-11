import './CardPage.scss'
import Handlebars from 'handlebars';
import tmp from './CardPage.tmp.js'

export default function CardPage(data){
    return Handlebars.compile(tmp)(data)
}
