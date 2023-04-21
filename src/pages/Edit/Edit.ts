import './Edit.scss';
import Back from '../../components/Back/Back';
import Button from '../../components/Button/Button';
import Avatar from '../../components/Avatar/Avatar';
import EditInput from '../../components/EditInput/EditInput';
import { windowsEvents } from '../../../utils/windowsEvents';
import Block from '../../../core/Block';
import tmp from './Edit.tmp'
import * as Handlebars from 'handlebars';
import HTTPTransport from '../../../core/HTTPTransport';
import { apiUrl } from '../../../utils/apiUrl';
import { ResponseApi } from '../../../utils/respType';
import { LOGIN_LINK } from '../../../utils/links';
import { router } from '../../../static/js';
    const HTTP = new HTTPTransport()

    windowsEvents['editFormSubmit'] = async (e: Event) => {
        e.preventDefault()
        const form = e.target as HTMLFormElement
        if(form.querySelector('input.error')){
            return;
        }
        const formData = new FormData(form);
        await HTTP.put(`${apiUrl}user/profile`, {
            data: {
                first_name: formData.get('first_name') as string,
                second_name: formData.get('second_name') as string,
                display_name: formData.get('display_name') as string,
                login: formData.get('login') as string,
                email: formData.get('email') as string,
                phone: formData.get('phone') as string,
            },
        })
        .then((d: ResponseApi) => {
            if(d.status !== 200){
                alert(JSON.parse(d.response).reason)
            }
        })
        if(!!(formData.get('avatar') as File).name){
              
            await HTTP.put(`${apiUrl}user/profile/avatar`, {
                data: formData,
                isFormData: true
            })
            .then((d: ResponseApi) => {
                if(d.status !== 200){
                    alert(JSON.parse(d.response).reason)
                }
            })
        }

        const newPass = formData.get('newPassword'),
        sNewPass = formData.get('secondNewPassword'),
        oldPass = formData.get('oldPassword');

        if(newPass === sNewPass && !!oldPass && !!newPass && !!sNewPass){
            await HTTP.put(`${apiUrl}user/password`, {
                data: {
                    oldPassword: oldPass as string,
                    newPassword: newPass as string
                }
            }).then((d: ResponseApi) => {
                if(d.status !== 200){
                    alert(JSON.parse(d.response).reason)
                }
            })
        }

    }
    windowsEvents['editAvatarLoad'] = (e: File) => { 
        const avatar = document.querySelector('#avatar img') as HTMLImageElement | null
        const fileInput = document.getElementById('file') as HTMLInputElement
        if(!avatar || !fileInput || !fileInput.files){
            return;
        }
        const file = fileInput.files[0];
        const reader  = new FileReader();
        reader.onload = function(e)  {
            avatar.src = (e.target as FileReader).result as string;
         }
         reader.readAsDataURL(file);
    }
    windowsEvents['editLogout'] = async () => {
        await HTTP.post(`${apiUrl}auth/logout`)
        .then((d: ResponseApi) => {
            if(d.status === 200){
                localStorage.removeItem('auth')
                router.go(LOGIN_LINK)
            }else{
                alert(JSON.parse(d.response).reason)
            }
        })
    }
    const back = new Back({id: 'editBack'})
    const email = new EditInput({
        label: 'Почта',
        name: 'email',
        type: 'email',
        id: 'editEmail',
        validation: 'checkEmail'
    })
    const login = new EditInput({
        label: 'Логин',
        name: 'login',
        id: 'editLogin',
        validation: 'checkLogin',
    })
    const avatar = new Avatar({id: 'avatar'})
    const name = new EditInput({
        label: 'Имя',
        name: 'first_name',
        id: 'editName',
        validation: 'checkName'
    })
    const second_name = new EditInput({
        label: 'Фамилия',
        name: 'second_name',
        id: 'editSName',
        validation: 'checkName'
    })
    const chat_name = new EditInput({
        label: 'Имя в чате',
        name: 'display_name',
        id: 'editDiaplayName',
        validation: 'checkLogin'
    })
    const phone = new EditInput({
        label: 'Телефон',
        name: 'phone',
        id: 'editPhone',
        validation: 'checkPhone'
    })
    const new_pass = new EditInput({
        label: 'Новый пароль',
        name: 'newPassword',
        type: 'password',
        id: 'editNewPass',
        validation: 'checkPass'
    })
    const old_pass = new EditInput({
        label: 'Старый пароль',
        name: 'oldPassword',
        type: 'password',
        id: 'editOldPass',
        validation: 'checkPass'
    })
    const second_new_pass = new EditInput({
        label: 'Новый пароль (еще раз)',
        name: 'secondNewPassword',
        type: 'password',
        id: 'editSNewPass',
        validation: 'checkPass'
    })
    const button = new Button({
        text: 'Сохранить',
        style: 'margin-top: 30px',
        id: 'editBtn'
    })

    const logout = new Button({
        text: 'Выйти',
        onClick: 'window.events.editLogout()',
        style: 'margin-top: 15px; background: var(--red);',
        id: 'editLogoutBtn',
        type: 'button',
    })
    export const editProps = {
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
        button: button.getFirstRender(),
        submit: 'window.events.editFormSubmit(event)',
        logout: logout.getFirstRender()
    }

export type EditProps = {
    back: string;
    avatar: string;
    email: string;
    login: string;
    name: string;
    second_name: string;
    chat_name: string;
    phone: string;
    new_pass: string;
    old_pass: string;
    button: string;
    submit: string;
    logout: string;
}
export default class Edit extends Block<EditProps>{
    constructor(props: EditProps){
        super('div', 'edit', props)
    }
    componentDidMount(): void {
        HTTP.get(`${apiUrl}auth/user`)
        .then((d: ResponseApi) => {
            const data = JSON.parse(d.response)
            if(d.status === 200){
                localStorage.setItem('auth', 'true')
                Object.keys(data).forEach(i => {
                    const find = document.getElementById(i) as HTMLInputElement | null
                    if(!!find){
                        i === 'avatar' ? find.querySelector('img')!.src = 'https://ya-praktikum.tech/api/v2/resources/' + data[i] : find.value = data[i]
                    }
                })
            }else{
                alert(data.reason)
            }
        }).catch((e: unknown) => alert(e))
    }

    render(): string {
        return Handlebars.compile(tmp)(this.props)
    }
}
