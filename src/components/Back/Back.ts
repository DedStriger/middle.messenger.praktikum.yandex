import Block from '../../../core/Block';
import { router } from '../../../static/js';
import { windowsEvents } from '../../../utils/windowsEvents';
import './Back.scss';
import tmp from './Back.tmp';
import * as Handlebars from 'handlebars';

export type BackProps = {
    id: string;
}

export default class Back extends Block<BackProps> {
    constructor(props: BackProps){
        super('div', props.id, props)
    }

    componentDidMount(): void {
        windowsEvents['goBack'] = () => {
            router.back()
        }
    }

    render(): string {
        return Handlebars.compile(tmp)({})  
    }
}
