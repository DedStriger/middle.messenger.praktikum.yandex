const src = require('../../assets/arrow.svg')

export default `
    <button onClick='window.events.goBack()' class='back'>
        <img src='${src}' />
    </button>
`
