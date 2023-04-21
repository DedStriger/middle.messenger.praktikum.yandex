import { EDIT_PROFILE } from '../../../utils/links'
import arrow from '../../assets/sm-arrow.svg'

export default `
<div class='chat-container'>
    <div class="sidebar">
        <a href="${EDIT_PROFILE}" class='sidebar__link'>
            <span>Профиль</span>
            <img src="${arrow}" alt="arrow">
        </a>
        {{{search}}}
        <div class='sidebar__list'>
            {{{button}}}
            {{{chats}}}
        </div>
    </div>
    <div class='message-container'>
        {{#if message}}
            {{{message}}}
        {{else}}
            <p class='empty-message'>Выберите чат чтобы отправить сообщение</p>
        {{/if}}
    </div>
</div>
`
