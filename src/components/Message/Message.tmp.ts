import arrow from '../../assets/arrow.svg';
import clip from '../../assets/clip.svg';


export default `
<div class="message" data-chatid={{chatId}}>
    <div class="message__header">
        {{{avatar}}}
        <div class="message__header-name">
            {{name}}
        </div>
        {{#if users}}
            <div class='message__header-users'>
                {{#each users}}
                    <span>{{this.display_name}}</span>
                {{/each}}
            </div>
        {{/if}}
        <div class="message__header-dots" onClick='window.events.toggleChatMenu()'><span></span><span></span><span></span></div>
        <div class="message__header-menu" id="{{id}}_menu">
            <div class="mhm__title">Добавить/удалить пользователя</div>
            <input type="text" placeholder="ID пользователя" id="{{id}}_user" class="mhm__input">
            <button onClick="{{addUser}}">Добавить</button>
            <button onClick="{{removeUser}}" class="red">Удалить</button>
            <button onClick="{{removeChat}}" class="red">Удалить чат</button>
        </div>   
    </div>
    <div class="message__body">
        {{#if messages}}
            {{#each messages}}
                <div class="message__body-message">
                    <span>{{this.user}}</span>
                    <p>{{this.mess}}</p>
                </div>
            {{/each}}
        {{/if}}
    </div>
    <form class="message__form" onsubmit='{{submit}}'>
        <div class="message__form-file">
            <label for="file">
                <img src="${clip}" alt="clip">
            </label>
            <input type="file" name="file" id="file">
        </div>
        <input type="text" placeholder="Сообщение" name='message' id='message' class="message__form-mess">
        <button type="submit" class="message__form-btn">
            <img src="${arrow}" alt="arrow">
        </button>
    </form>
</div>
`
