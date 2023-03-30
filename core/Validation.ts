export default class Validation {
    checkEmail(email: string): boolean{
        return /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(email)
    }

    checkName(name: string): boolean{
        return /^[A-ZА-Я][a-zа-я]+$/.test(name)
    }

    checkLogin(login: string): boolean{
        return /[0-9A-Za-z]{3,20}/.test(login)
    }

    checkPhone(phone: string): boolean{
        return /^[\+7]?([0-9]{9,14}$)/.test(phone)
    }

    checkPass(pass: string): boolean{
        return !!pass.match(/[0-9]/g) && !!pass.match(/[A-Z]/g) && pass.length > 8 && pass.length <= 40
    }

    checkMessage(mes: string): boolean{
        return !!mes
    }
}


export type ValidationKind = keyof Validation
