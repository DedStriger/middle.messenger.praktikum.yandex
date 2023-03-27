const { default: Login } = require("../../src/pages/Login/Login");
const { default: Registration } = require("../../src/pages/Registration/Registration");
const { default: ErrorComponent } = require("../../src/pages/Error/Error");
const { LOGIN_LINK, REG_LINK, CHAT_LINK, SERVER_LINK, EDIT_PROFILE } = require("../../utils/links");
const { default: Edit } = require("../../src/pages/Edit/Edit");

const root = document.getElementById('root')!

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
        root.innerHTML = '<b>Chat</b>';
        break;
    }
    case SERVER_LINK : {
        root.innerHTML = ErrorComponent({number: '500', text: 'Мы уже фиксим'});
        break;
    }
    default: {
        root.innerHTML = ErrorComponent({number: '404', text: 'Не туда попали'})
    }
}
