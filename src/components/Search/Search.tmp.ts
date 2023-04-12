import src from '../../assets/search.svg'

export default `
    <div class='search'>
        <img src='${src}' class='search__icon' alt='icon' />
        <input type='text' placeholder='Поиск' oninput='{{input}}' />
    </div>
`
