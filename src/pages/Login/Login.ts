import CardPage from "../../components/CardPage/CardPage";
import tmp from './Login.tmp';
import './Login.scss';
import * as Handlebars from 'handlebars'
import input from "../../components/input/input";
import Button from "../../components/Button/Button";
import { REG_LINK } from "../../../utils/links";
import { windowsEvents } from "../../../utils/windowsEvents";
import { submitForm } from "../../../utils/submitForm";

export default function Login(){
    windowsEvents['loginFormSubmit'] = submitForm
    const name = new input({
        label: 'Логин',
        name: 'login',
        id: 'loginName',
        validation: 'checkLogin',
    })

    const password = new input({
        label: 'Пароль',
        name: 'password',
        type: 'password',
        id: 'loginPass',
        validation: 'checkPass'
    })

    const btn = new Button({
        text: 'Войти',
        sublink: {
            text: 'Нет аккаунта?',
            link: REG_LINK
        },
        id: 'loginButton'
    })

    const loginPage = new CardPage({
        title: 'Вход',
        content: Handlebars.compile(tmp)({
            name: name.getFirstRender(),
            password: password.getFirstRender(),
            button: btn.getFirstRender(),
            submit: `window.events.loginFormSubmit(event)`
        }),
        id: 'loginPage'
    })
    return loginPage.getFirstRender()
}
