import {Component, OnDestroy, OnInit} from '@angular/core';
import {WebSocketService} from "../services/web-socket.service";
import {NgForm} from "@angular/forms";
import {ChatMessage} from "../models/chatMessage";
import {GetNameService} from "../services/getNameService";
import {ChatHistoryService} from "../services/chat-history.service";
import {Message} from "../models/message";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

export class ChatComponent implements OnInit, OnDestroy {

  constructor(public webSocketService: WebSocketService, public getNameService: GetNameService, public chatHistory: ChatHistoryService) {
  }

  userName: string

  message: Message[]


  messages: Message[] = [];


  ngOnInit(): void {
    this.webSocketService.openWebSocket();
    this.initChatHistory();
    this.setNameForChat();

  }


  initChatHistory(): void {
    this.chatHistory.getHistory().subscribe((history: Message[]) => {
      const last10Messages = history.slice(-10);
      this.messages = last10Messages.map((message: Message) => {
        return new Message(message.text, { login: message.ownerOfMessage.login, password: '' });
      });
    });
  }

  ngOnDestroy(): void {
    this.webSocketService.closeWebSocket();
  }

  public sendMessage(sendForm: NgForm) {
    const chatMessage = new ChatMessage(this.userName.toString(), sendForm.value.message)
    this.webSocketService.sendMessage(chatMessage);
    sendForm.controls.message.reset();
  }

  public setNameForChat() {
    this.getNameService.getName().subscribe(s => {
      console.log(s)
      this.userName = s
    })
  }


}
