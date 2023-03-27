import './Avatar.scss';
import tmp from './Avatar.tmp';
import * as Handlebars from 'handlebars';

export type AvatarProps = {
    src?: string;
}

export default function Avatar(props: AvatarProps){
    return Handlebars.compile(tmp)(props)
}
