import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Message} from "../models/message";

@Injectable({
  providedIn: 'root'
})

export class ChatHistoryService {

  constructor(public http : HttpClient) {
  }

  public getHistory(): Observable<Message[]>{
    return this.http.get<Message[]>('http://localhost:8080/history')
  }

}
