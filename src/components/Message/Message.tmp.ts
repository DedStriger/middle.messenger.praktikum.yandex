import arrow from '../../assets/arrow.svg';
import clip from '../../assets/clip.svg';


export default `
<div class="message">
    <div class="message__header">
        {{{avatar}}}
        <div class="message__header-name">
            {{name}}
        </div>
        <div class="message__header-dots"><span></span><span></span><span></span></div>
    </div>
    <div class="message__body"></div>
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
