export default `
    <button class='btn {{click}}' 
    {{#if type}}type='{{type}}'{{/if}} 
    {{#if onClick}}onclick='{{onClick}}'{{/if}} 
    {{#if style}}style='{{style}}'{{/if}}>
     {{text}}
    </button>
    {{#if sublink}}
        <a href='{{sublink.link}}' class='sublink'>
        {{sublink.text}}
        </a>
    {{/if}}
`
