export default class Validation {
    text = '';
    checkForEmpty(val: string){
        if(!val){
            this.text = 'Обязательно для заполнения'
            return true;
        }
        return false;
    }
    checkEmail(email: string): boolean{
        if(this.checkForEmpty(email)){
            return false;
        }
        const resp = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(email)
        this.text = !resp ? 'Введите корректный Email': ''
        return resp;
    }

    checkName(name: string): boolean{
        if(this.checkForEmpty(name)){
            return false;
        }
        const resp = /^[A-ZА-Я][a-zа-я]+$/.test(name)
        this.text = !resp ? 'Первая буква должна быть заглавная, поле может сожержать только буквы англ и ру алфавита без пробелов' : ''
        return resp
    }

    checkLogin(login: string): boolean{
        if(this.checkForEmpty(login)){
            return false;
        }
        const resp = /[0-9A-Za-z]{3,20}/.test(login)
        this.text = !resp ? 'Логин от 3 до 20 символов, может сожержать только цифры и латинские буквы' : ''
        return resp;
    }

    checkPhone(phone: string): boolean{
        if(this.checkForEmpty(phone)){
            return false;
        }
        const resp = /^[\+7]?([0-9]{9,14}$)/.test(phone)
        this.text = !resp ? 'Введите коректный телефон, +7 и от 9 до 14 цифр без пробелов' : ''
        return resp
    }

    checkPass(pass: string): boolean{
        if(this.checkForEmpty(pass)){
            return false;
        }
        if(pass.length < 8){
            this.text = 'Пароль должен быть меньше 8 символов'
            return false;
        }
        if(pass.length > 40){
            this.text = 'Пароль не может быть больше 40 символов'
            return false;
        }

        if(!pass.match(/[0-9]/g) || !pass.match(/[A-Z]/g)){
            this.text = 'Должен содержать хотябы одну цифру и одну залавную букву англ алфавита'
            return false;
        }
        return true;
    }

    checkMessage(mes: string): boolean{
        return !!mes
    }
}


export type ValidationKind = Omit<keyof Validation, 'text'>
