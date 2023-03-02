import {Injectable} from '@angular/core';
import {ChatMessage} from "../models/chatMessage";


@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  webSocket: WebSocket;
  chatMessages: ChatMessage[] = [];

  constructor() {
  }

  public openWebSocket() {
    this.webSocket = new WebSocket("ws:localhost:8080/chat");
    this.webSocket.onopen = (event => (
      console.log('Open: ', event)));

    this.webSocket.onmessage = (event) => {
      const chatMessage = JSON.parse(event.data);
      this.chatMessages.push(chatMessage);
    };

    this.webSocket.onclose = (event) => {
      console.log('close ', event);
    };
  }

  public sendMessage(chatMessage: ChatMessage) {
    console.log(chatMessage);
    this.webSocket.send(JSON.stringify(chatMessage));
  }

  public closeWebSocket() {
    this.webSocket.close()
  }

}
