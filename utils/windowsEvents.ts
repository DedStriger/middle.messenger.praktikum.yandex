export type WEvents = {[key: string]: (...args: any) => void}

const noop: (...args: any) => void | Promise<void> | string = () => {} 

const events = {
    editFormSubmit: noop,
    editAvatarLoad: noop,
    goBack: noop,
    search: noop,
    loginFormSubmit: noop,
    regFormSubmit: noop,
    editLogout: noop,
    goEdit: noop,
    chatClick: noop,
    removeChat: noop,
    createChat: noop,
    newMessage: noop,
    getOldMessage: noop,
    editChatUser: noop,
    Send: noop,
    toggleChatMenu: noop,
}

//@ts-ignore
export let windowsEvents = (window.events as WEvents) = events
