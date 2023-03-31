import ChatItem from "../../src/components/ChatItem/ChatItem";
import Search from "../../src/components/Search/Search";
import Chat from "../../src/pages/Chat/Chat";
import { mockChats } from "../../utils/mockChats";

const { default: Login } = require("../../src/pages/Login/Login");
const { default: Registration } = require("../../src/pages/Registration/Registration");
const { default: ErrorComponent } = require("../../src/pages/Error/Error");
const { LOGIN_LINK, REG_LINK, CHAT_LINK, SERVER_LINK, EDIT_PROFILE } = require("../../utils/links");
const { default: Edit } = require("../../src/pages/Edit/Edit");

const root = document.getElementById('root')!;
switch(window.location.pathname){
    case '/':
    case LOGIN_LINK + '/':
    case LOGIN_LINK: {
        root.innerHTML = Login();
        break;
    }
    case REG_LINK : {
        root.innerHTML = Registration();
        break;
    }
    case EDIT_PROFILE: {
        root.innerHTML = Edit();
        break;
    }
    case CHAT_LINK : {
        root.innerHTML = new Chat({
            search: new Search().getFirstRender(),
            chats: mockChats.map(chat => new ChatItem(chat).getFirstRender()).join(''),
        }).getFirstRender()
        break;
    }
    case SERVER_LINK : {
        root.innerHTML = new ErrorComponent({number: '500', text: 'Мы уже фиксим'}).getFirstRender();
        break;
    }
    default: {
        root.innerHTML = new ErrorComponent({number: '404', text: 'Не туда попали'}).getFirstRender()
    }
}
