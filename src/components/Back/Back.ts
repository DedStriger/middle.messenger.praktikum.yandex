import './Back.scss';
import tmp from './Back.tmp';
import * as Handlebars from 'handlebars';

export default function Back(){
    const t = Handlebars.compile(tmp)
    return t({})
}
