import HTTPTransport from "../../core/HTTPTransport";
import Router from "../../core/Router";
import Button from "../../src/components/Button/Button";
import CardPage from "../../src/components/CardPage/CardPage";
import Chat from "../../src/pages/Chat/Chat";
import { editProps } from "../../src/pages/Edit/Edit";
import { NOT_FOUND_LINK } from "../../utils/links";
const { default: Search } = require("../../src/components/Search/Search.ts");
const { default: Login } = require("../../src/pages/Login/Login.ts");
const { default: Registration } = require("../../src/pages/Registration/Registration.ts");
const { default: ErrorComponent } = require("../../src/pages/Error/Error.ts");
const { REG_LINK, CHAT_LINK, SERVER_LINK, EDIT_PROFILE } = require("../../utils/links.ts");
const { default: Edit } = require("../../src/pages/Edit/Edit.ts");
export const HTTP = new HTTPTransport()
export const router = new Router('#root');

router
.use<typeof Chat>(CHAT_LINK, Chat, {
                search: new Search().getFirstRender(),
                button: new Button({
                    id: 'createChat',
                    text: 'Создать чат',
                    onClick: 'window.events.createChat()'
                }).getFirstRender()
            })
.use('/', CardPage, Login())
.use(REG_LINK, CardPage, Registration())
.use(EDIT_PROFILE, Edit, editProps)
.use<typeof ErrorComponent>(SERVER_LINK, ErrorComponent, {id: '500', text: 'Мы уже фиксим'})
.use<typeof ErrorComponent>(NOT_FOUND_LINK, ErrorComponent, {id: '404', text: 'Не туда попали'})
.start()
