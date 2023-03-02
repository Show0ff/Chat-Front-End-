import {Component,OnDestroy, OnInit} from '@angular/core';
import {WebSocketService} from "../services/web-socket.service";
import {NgForm} from "@angular/forms";
import {ChatMessage} from "../models/chatMessage";
import {GetNameService} from "../services/getNameService";
import {ChatHistoryService} from "../services/chat-history.service";
import {Message} from "../models/message";
import {User} from "../models/user";

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

  user: User[]

  messages: { text: string, owner: string }[] = [];


  ngOnInit(): void {
    this.webSocketService.openWebSocket();
    this.initChatHistory();
    this.setNameForChat();

  }


  public initChatHistory() {
    this.chatHistory.getHistory().subscribe((messages: Message[]) => {
      messages.forEach((message: Message) => {
        this.messages.push({text: message.text, owner: message.ownerOfMessage.login});
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
