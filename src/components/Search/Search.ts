import Block from '../../../core/Block';
import { windowsEvents } from '../../../utils/windowsEvents';
import './Search.scss';
import tmp from './Search.tmp';
import * as Handlebars from 'handlebars';

export default class Search extends Block<{}> {
    constructor(){
        super('div', 'search', {})
    }

    value = '';

    componentDidMount(): void {
        windowsEvents['search'] = (val: string) => this.value = val;
    }

    render(): string {
        return Handlebars.compile(tmp)({input: 'window.events.search(event.target.value)'})
    }
}
