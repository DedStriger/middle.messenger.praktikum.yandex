export default `
    <div class='container'>
    <div id='editBack'>
        <button onClick='window.events.goBack()' class='back'>
            <img src='/arrow.svg' />
        </button>
    </div>
        <div class='content'>
        {{{avatar}}}
            <form onsubmit="{{submit}}">
                <label class='edit-file__label' for='file'>Изменить аватар</label>
                <input class='edit-file' type='file' id='file' name='avatar' onchange='window.events.editAvatarLoad(event)' />
                {{{email}}}
                {{{login}}}
                {{{name}}}
                {{{second_name}}}
                {{{chat_name}}}
                {{{phone}}}
                {{{old_pass}}}
                {{{new_pass}}}
                {{{second_new_pass}}}
                {{{button}}}
                {{{logout}}}
            </form>
        </div>
    </div>
`
