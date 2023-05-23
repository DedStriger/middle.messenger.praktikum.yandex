import { expect } from "chai";
import { LOGIN_LINK, REG_LINK } from "../utils/links";
import {JSDOM} from 'jsdom'
import Router from "./Router";
import CardPage from "../src/components/CardPage/CardPage";
import Login from "../src/pages/Login/Login";
import Registration from "../src/pages/Registration/Registration";

before(() => {
    new JSDOM(`
        <html>
            <body>
                <div id='root'>
                </div>
            </body>
        </html>
    `)
})

describe('Router', () => {
   it('should right init', () => {
    const r =  new Router('#root');
   r.use(LOGIN_LINK, CardPage, Login())
    .use(REG_LINK, CardPage, Registration())
    .start()
    expect(r.routes.length).to.eq(2)
   })
})
