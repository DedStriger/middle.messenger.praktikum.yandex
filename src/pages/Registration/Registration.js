import CardPage from "../../components/CardPage/CardPage";
import Handlebars from 'handlebars';
import tmp from './Registration.tmp.js'
import input from "../../components/input/input";
import Button from "../../components/Button/Button";
import { LOGIN_LINK } from "../../../utils/links";

export default function Registration(){
    return CardPage({
        title: 'Регистрация',
        content: Handlebars.compile(tmp)({
            mail: input({
                label: 'Почта',
                name: 'email',
                type: 'email'
            }),
            login: input({
                label: 'Логин',
                name: 'login',
            }),
            name: input({
                label: 'Имя',
                name: 'first_name',
            }),
            second_name: input({
                label: 'Фаимилия',
                name: 'second_name',
            }),
            phone: input({
                label: 'Телефон',
                name: 'phone',
            }),
            pass: input({
                label: 'Пароль',
                name: 'password',
                type: 'password'
            }),
            second_pass: input({
                label: 'Пароль (еще раз)',
                name: 'second_password',
                type: 'password'
            }),
            button: Button({
                text: 'Зарегистрироваться',
                sublink: {
                    text: 'Войти',
                    link: LOGIN_LINK
                }
            })
        })
    })
}
