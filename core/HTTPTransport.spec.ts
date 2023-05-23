
import HTTPTransport from "./HTTPTransport";

const map = ['get', 'post', 'put', 'delete']

describe("HTTP", () => {
    const http = new HTTPTransport();

    it("check query", (done) => {
        let test = true
       map.forEach((m: any) => {
        if(!http[m as keyof typeof http]){
            test = false
        }
       })

       if(test){
        done()
       }
    })  
})
