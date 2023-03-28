export default class Validation {
    checkEmail(email: string): boolean{
        return /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(email)
    }
}
