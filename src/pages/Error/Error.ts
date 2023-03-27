import './Error.scss';
import tmp from './Error.tmp'
import * as Handlebars from 'handlebars';

export type ErrorComponentProps = {
    number: string;
    text: string;
}

export default function ErrorComponent(props: ErrorComponentProps){
    return Handlebars.compile(tmp)(props)
}
