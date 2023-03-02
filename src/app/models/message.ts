import {User} from "./user";

export class Message {
  text : string
  ownerOfMessage : User


  constructor(text : string, ownerOfMessage : User) {
    this.text = text;
    this.ownerOfMessage = ownerOfMessage;

  }
}
