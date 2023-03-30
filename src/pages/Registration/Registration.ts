import CardPage from "../../components/CardPage/CardPage";
import * as Handlebars from 'handlebars';
import tmp from './Registration.tmp'
import input from "../../components/input/input";
import Button from "../../components/Button/Button";
import { LOGIN_LINK } from "../../../utils/links";
import { windowsEvents } from "../../../utils/windowsEvents";
import { submitForm } from "../../../utils/submitForm";

export default function Registration(){

     windowsEvents['regFormSubmit'] = submitForm

    const email = new input({
                label: 'Почта',
                name: 'email',
                type: 'email',
                id: 'regEmail',
                validation: 'checkEmail'
            });
    const login = new input({
        label: 'Логин',
        name: 'login',
        id: 'regLogin',
        validation: 'checkLogin'
    })

    const name = new input({
        label: 'Имя',
        name: 'first_name',
        id: 'regName',
        validation: 'checkName'
    })

    const second_name = new input({
        label: 'Фаимилия',
        name: 'second_name',
        id: 'regSName',
        validation: 'checkName'
    })

    const phone = new input({
        label: 'Телефон',
        name: 'phone',
        id: 'regPhone',
        validation: 'checkPhone'
    })

    const pass = new input({
        label: 'Пароль',
        name: 'password',
        type: 'password',
        id: 'regPass',
        validation: 'checkPass'
    })

    const second_pass = new input({
        label: 'Пароль (еще раз)',
        name: 'second_password',
        type: 'password',
        id: 'regSPass',
        validation: 'checkPass'
    })

    const btn = new Button({
        text: 'Зарегистрироваться',
        sublink: {
            text: 'Войти',
            link: LOGIN_LINK
        },
        id: 'regBtn',
    })
    const regPage = new CardPage({
        id: 'regPage',
        title: 'Регистрация',
        content: Handlebars.compile(tmp)({
            mail: email.getFirstRender(),
            login: login.getFirstRender(),
            name: name.getFirstRender(),
            second_name: second_name.getFirstRender(),
            phone: phone.getFirstRender(),
            button: btn.getFirstRender(),
            pass: pass.getFirstRender(),
            second_pass: second_pass.getFirstRender(),
            submit: `window.events.regFormSubmit(event)`
        })
    })

    return regPage.getFirstRender()
}
