import tmp from './Login.tmp';
import './Login.scss';
import * as Handlebars from 'handlebars'
import input from "../../components/input/input";
import Button from "../../components/Button/Button";
import { CHAT_LINK, REG_LINK } from "../../../utils/links";
import { windowsEvents } from "../../../utils/windowsEvents";
import HTTPTransport from '../../../core/HTTPTransport';
import { apiUrl } from '../../../utils/apiUrl';

export default function Login(){
    windowsEvents['loginFormSubmit'] = (e: Event) => {
        e.preventDefault()
        const form = e.target as HTMLFormElement
        if(form.querySelector('input.error')){
            return;
        }
        const formData = new FormData(form);
        new HTTPTransport().post(`${apiUrl}auth/signin`, {
            data: {
                login: formData.get('login') as string,
                password: formData.get('password') as string,
            },
            timeout: 3600
        }).then((d: any) => {
            if(d.response === 'OK'){
                window.location.href = CHAT_LINK
                localStorage.setItem('auth', 'true')
            }else{
                alert(JSON.parse(d.response).reason)
            }
        })
    }
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
    return ({
        title: 'Вход',
        content: Handlebars.compile(tmp)({
            name: name.getFirstRender(),
            password: password.getFirstRender(),
            button: btn.getFirstRender(),
            submit: `window.events.loginFormSubmit(event)`
        }),
        id: 'loginPage'
    })
}
