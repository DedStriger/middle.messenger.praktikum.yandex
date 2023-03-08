const { default: Login } = require("../../src/pages/Login/Login");
const { default: Registration } = require("../../src/pages/Registration/Registration");
const { default: Error } = require("../../src/pages/Error/Error");
const { LOGIN_LINK, REG_LINK, CHAT_LINK, SERVER_LINK } = require("../../utils/links");

const root = document.getElementById('root')

switch(window.location.pathname){
    case LOGIN_LINK: {
        root.innerHTML = Login();
        break;
    }
    case REG_LINK : {
        root.innerHTML = Registration();
        break;
    }
    case CHAT_LINK : {
        root.innerHTML = '<b>Chat</b>';
        break;
    }
    case SERVER_LINK : {
        root.innerHTML = Error({number: '500', text: 'Мы уже фиксим'});
        break;
    }
    default: {
        root.innerHTML = Error({number: '404', text: 'Не туда попали'})
    }
}