import src from '../../assets/arrow.svg';

export default `
    <button onClick='window.history.go(-1);' class='back'>
        <img src='${src}' />
    </button>
`
