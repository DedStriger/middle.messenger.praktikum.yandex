import './Error.scss';
import tmp from './Error.tmp.js'
import Handlebars from 'handlebars';

export default function Error(data){
    return Handlebars.compile(tmp)(data)
}