import CardPage from "../../components/CardPage/CardPage";
import tmp from './Login.tmp';
import './Login.scss';
import * as Handlebars from 'handlebars'
import input from "../../components/input/input";
import Button from "../../components/Button/Button";
import { REG_LINK } from "../../../utils/links";

export default function Login(){
    const name = new input({
        label: 'Логин',
        name: 'login',
        id: 'loginName',
    })

    const password = new input({
        label: 'Пароль',
        name: 'password',
        type: 'password',
        id: 'loginPass',
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
            button: btn.getFirstRender()
        }),
        id: 'loginPage'
    })
    return loginPage.getFirstRender()
}
