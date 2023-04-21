import * as Handlebars from 'handlebars';
import tmp from './Registration.tmp'
import input from "../../components/input/input";
import Button from "../../components/Button/Button";
import { CHAT_LINK, LOGIN_LINK } from "../../../utils/links";
import { windowsEvents } from "../../../utils/windowsEvents";
import HTTPTransport from '../../../core/HTTPTransport';
import { apiUrl } from '../../../utils/apiUrl';
import { ResponseApi } from '../../../utils/respType';
import { router } from '../../../static/js';

export default function Registration(){

     windowsEvents['regFormSubmit'] = (e: Event) => {
        e.preventDefault()
        const form = e.target as HTMLFormElement
        if(form.querySelector('input.error')){
            return;
        }
        const formData = new FormData(form);
        new HTTPTransport().post(`${apiUrl}auth/signup`, {
            data: {
                first_name: formData.get('first_name') as string,
                second_name: formData.get('second_name') as string,
                login: formData.get('login') as string,
                email: formData.get('email') as string,
                phone: formData.get('phone') as string,
                password: formData.get('password') as string
            },
        }).then((d: ResponseApi) => {
            const data = JSON.parse(d?.response)
            if(data.id){
                localStorage.setItem('auth', data.id)
                router.go(CHAT_LINK)
            }else{
                alert(data.reason)
            }
        })
        .catch((e: unknown) => alert(e))
     }

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

    return ({
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
}
