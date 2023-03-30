export default `
    <label for="{{name}}" class="label">{{label}}</label>
    <input 
        type="{{#if type}}{{type}}{{else}}text{{/if}}" 
        {{#if value}}value='{{value}}'{{/if}} 
        class="input {{#if error}}error{{/if}}" 
        {{#if placeholder}}placeholder="{{placeholder}}"{{/if}} 
        onfocus="{{onfocus}}"
        onblur="{{onblur}}"
        name="{{name}}" 
        id="{{name}}">
`
