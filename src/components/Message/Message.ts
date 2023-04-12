import Block from '../../../core/Block';
import Validation from '../../../core/Validation';
import { windowsEvents } from '../../../utils/windowsEvents';
import './Message.scss';
import tmp from './Message.tmp';
import * as Handlebars from 'handlebars';

export type MessageProps = {
    id: string;
    avatar: string;
    name: string;
}

export default class Message extends Block<MessageProps> {
    constructor(props: MessageProps){
        super('div', props.id, props)
    }

    validation = new Validation();

    componentDidMount(): void {
        windowsEvents[this.props.id + 'Send'] = (e: Event) => {
            e.preventDefault();
            const formData = new FormData(e.target as HTMLFormElement);
            const mess = formData.get('message') as string
            if(this.validation.checkMessage(mess)){
                console.log({message: mess})
            }
        }
    }

    render(): string {
        return Handlebars.compile(tmp)({
            ...this.props,
            submit: `window.events['${this.props.id}Send'](event)`
        })
    }
}
