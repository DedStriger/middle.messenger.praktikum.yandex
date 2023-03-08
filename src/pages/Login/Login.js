import CardPage from "../../components/CardPage/CardPage";
import tmp from './Login.tmp.js';
import './Login.scss';
import Handlebars from 'handlebars'
import input from "../../components/input/input";
import Button from "../../components/Button/Button";
import { REG_LINK } from "../../../utils/links";

export default function Login(){
    return CardPage({
        title: 'Вход',
        content: Handlebars.compile(tmp)({
            name: input({
                label: 'Логин',
                name: 'login'
            }),
            password: input({
                label: 'Пароль',
                name: 'password',
                type: 'password'
            }),
            button: Button({
                text: 'Войти',
                sublink: {
                    text: 'Нет аккаунта?',
                    link: REG_LINK
                }
            })
        })
    })
}