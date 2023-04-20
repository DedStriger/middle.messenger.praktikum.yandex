export default `
<div 
    class="chat-item" 
    data-id="{{id}}" 
    data-name="{{name}}"
    data-src="{{src}}"
    onclick='window.events.chatClick(this)'
>
{{{avatar}}}
<div class="chat-item__content">
    <div class="chat-item__name">
        {{name}}
    </div>
    <p class="chat-item__last">
        {{lastMessage}}
    </p>
</div>
<div class="chat-item__info">
    <span class="chat-item__info-time">{{wasOnline}}</span>
    {{#if unreadMessage}}
        <span class="chat-item__info-number">{{unreadMessage}}</span>
    {{/if}}
</div>
</div>
`
