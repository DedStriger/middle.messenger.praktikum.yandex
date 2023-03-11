import './Back.scss';
import tmp from './Back.tmp.js';
import Handlebars from 'handlebars';

export default function Back(data){
    const t = Handlebars.compile(tmp)
    return t(data)
}
