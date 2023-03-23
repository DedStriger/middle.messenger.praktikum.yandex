import './Avatar.scss';
import tmp from './Avatar.tmp.js';
import Handlebars from 'handlebars';

export default function Avatar(data){
    return Handlebars.compile(tmp)(data)
}
