import './Edit.scss';
import * as Handlebars from 'handlebars';
import tmp from './Edit.tmp'
import Back from '../../components/Back/Back';
import Button from '../../components/Button/Button';
import Avatar from '../../components/Avatar/Avatar';
import EditInput from '../../components/EditInput/EditInput';


export default function Edit(){
    const back = new Back({id: 'editBack'})
    const email = new EditInput({
        label: 'Почта',
        name: 'email',
        type: 'email',
        value: 'test@test.ru',
        id: 'editEmail'
    })
    const login = new EditInput({
        label: 'Логин',
        name: 'login',
        value: 'DedStriger',
        id: 'editLogin'
    })
    const avatar = new Avatar({id: 'editAvatar'})
    const name = new EditInput({
        label: 'Имя',
        name: 'first_name',
        value: 'Иван',
        id: 'editName'
    })
    const second_name = new EditInput({
        label: 'Фамилия',
        name: 'second_name',
        value: 'Иванов',
        id: 'editSName'
    })
    const chat_name = new EditInput({
        label: 'Имя в чате',
        name: 'display_name',
        value: 'Иван',
        id: 'editDiaplayName'
    })
    const phone = new EditInput({
        label: 'Телефон',
        name: 'phone',
        value: '+7 (909) 967 30 30',
        id: 'editPhone'
    })
    const new_pass = new EditInput({
        label: 'Новый пароль',
        name: 'newPassword',
        type: 'password',
        id: 'editNewPass'
    })
    const old_pass = new EditInput({
        label: 'Старый пароль',
        name: 'oldPassword',
        type: 'password',
        id: 'editOldPass'
    })
    const second_new_pass = new EditInput({
        label: 'Новый пароль (еще раз)',
        name: 'secondNewPassword',
        type: 'password',
        id: 'editSNewPass'
    })
    const button = new Button({
        text: 'Сохранить',
        style: 'margin-top: 30px',
        id: 'editBtn'
    })
    const t = Handlebars.compile(tmp)
    return t({
        back: back.getFirstRender(),
        avatar: avatar.getFirstRender(),
        email: email.getFirstRender(),
        login: login.getFirstRender(),
        name: name.getFirstRender(),
        second_name: second_name.getFirstRender(),
        chat_name: chat_name.getFirstRender(),
        phone: phone.getFirstRender(),
        new_pass: new_pass.getFirstRender(),
        old_pass: old_pass.getFirstRender(),
        second_new_pass: second_new_pass.getFirstRender(),
        button: button.getFirstRender()
    })
}
