export default `
    <label for="{{name}}" class="label">{{label}}</label>
    <input type="{{#if type}}{{type}}{{else}}text{{/if}}" {{#if value}}value='{{value}}'{{/if}} class="input" {{#if placeholder}}placeholder="{{placeholder}}"{{/if}} name="{{name}}" id="{{name}}">
`
