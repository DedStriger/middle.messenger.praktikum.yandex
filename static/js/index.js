const { default: Login } = require("../../src/pages/Login/Login");
const { default: Registration } = require("../../src/pages/Registration/Registration");
const { LOGIN_LINK, REG_LINK } = require("../../utils/links");

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
    default: {
        root.innerHTML = '404';
    }
}