import Block from '../../../core/Block';
import './Avatar.scss';
import tmp from './Avatar.tmp';
import * as Handlebars from 'handlebars';

export type AvatarProps = {
    src?: string;
    id: string;
}


export default class Avatar extends Block<AvatarProps> {
    constructor(props: AvatarProps){
        super('div', props.id, props)
    }
    render(): string {
        return Handlebars.compile(tmp)(this.props)  
    }
}
