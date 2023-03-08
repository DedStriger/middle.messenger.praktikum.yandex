const { default: Login } = require("../../src/pages/Login/Login");
const { default: Registration } = require("../../src/pages/Registration/Registration");

const root = document.getElementById('root')

switch(window.location.pathname){
    case '/login' || '/': {
        root.innerHTML = Login();
        break;
    }
    case '/registration': {
        root.innerHTML = Registration();
        break;
    }
    default: {
        root.innerHTML = '404';
    }
}