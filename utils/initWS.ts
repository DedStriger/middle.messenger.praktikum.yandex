import { MessageProps } from "../src/components/Message/Message";
import { HTTP } from "../static/js";
import { apiUrl } from "./apiUrl";
import { ResponseApi } from "./respType";
import { windowsEvents } from "./windowsEvents";

export const initWS = async (chatId: string | number, setProps: (props: Partial<MessageProps>) => void) => {

    let userID: string = '',
      token: string = '';

      await HTTP.get(`${apiUrl}auth/user`)
      .then((d: ResponseApi) => {
          const data = JSON.parse(d.response)
          if(d.status === 200){
              userID = data.id;
          }else{
            console.log(data.reason)
          }
      })

      await HTTP.post(`${apiUrl}chats/token/${chatId}`)
      .then((d: ResponseApi) => {
        const data = JSON.parse(d.response)
        if(d.status === 200){
            token = data.token;
        }else{
          console.log(data.reason)
        }
      })
      const socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${userID}/${chatId}/${token}`);
      socket.addEventListener('open', () => {
        console.log('Соединение установлено');
        setProps({
            socket
        })
        socket.send(JSON.stringify({
          content: '0',
          type: 'get old',
        }))
      });
      
      socket.addEventListener('close', event => {
        if (event.wasClean) {
          console.log('Соединение закрыто чисто');
        } else {
          console.log('Обрыв соединения');
        }
      
        console.log(`Код: ${event.code} | Причина: ${event.reason}`);
      });
      
      socket.addEventListener('message', event => {
          const data = JSON.parse(event.data)

          if(Array.isArray(data)){
            windowsEvents['getOldMessage'](data.map((d: {user_id: string, content: string}) => ({id: d.user_id, content: d.content})))
          }else{
                windowsEvents['newMessage']({
                    id: JSON.parse(event.data).user_id,
                    content:  JSON.parse(event.data).content
              })
          }
      });
      
      socket.addEventListener('error', (event) => {
        console.log('Ошибка', event);
      }); 
}
