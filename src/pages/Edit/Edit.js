import './Edit.scss';
import Handlebars from 'handlebars';
import tmp from './Edit.tmp.js'
import Back from '../../components/Back/Back';
import Button from '../../components/Button/Button';
import Avatar from '../../components/Avatar/Avatar';
import EditInput from '../../components/EditInput/EditInput';


export default function Edit(){
    const t = Handlebars.compile(tmp)
    return t({
        back: Back(),
        avatar: Avatar(),
        email: EditInput({
            label: 'Почта',
            name: 'email',
            type: 'email',
            value: 'test@test.ru'
        }),
        login: EditInput({
            label: 'Логин',
            name: 'login',
            value: 'DedStriger'
        }),
        name: EditInput({
            label: 'Имя',
            name: 'first_name',
            value: 'Иван'
        }),
        second_name: EditInput({
            label: 'Фамилия',
            name: 'second_name',
            value: 'Иванов'
        }),
        chat_name: EditInput({
            label: 'Имя в чате',
            name: 'display_name',
            value: 'Иван'
        }),
        phone: EditInput({
            label: 'Телефон',
            name: 'phone',
            value: '+7 (909) 967 30 30'
        }),
        new_pass: EditInput({
            label: 'Новый пароль',
            name: 'newPassword',
            type: 'password',
        }),
        old_pass: EditInput({
            label: 'Старый пароль',
            name: 'oldPassword',
            type: 'password',
        }),
        second_new_pass: EditInput({
            label: 'Новый пароль (еще раз)',
            name: 'secondNewPassword',
            type: 'password',
        }),
        button: Button({
            text: 'Сохранить',
            style: 'margin-top: 30px',
        })
    })
}
