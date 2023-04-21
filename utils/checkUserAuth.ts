import { HTTP, router } from "../static/js"
import { apiUrl } from "./apiUrl"
import { CHAT_LINK } from "./links"
import { ResponseApi } from "./respType"

export const checkUserAuth = async (cb?: () => void) => {
    await HTTP.get(`${apiUrl}auth/user`)
    .then((d: ResponseApi) => {
        const data = JSON.parse(d.response)
        if(d.status === 200){
            localStorage.setItem('auth', 'true')
            router.go(CHAT_LINK)
        }else{
            console.log(data.reason)
        }
    }).catch((e: unknown) => alert(e))
    cb && cb()
}
