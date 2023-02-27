import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/user";


@Injectable({
  providedIn: 'root'
})


export class AuthService {

  constructor(private http : HttpClient) {
  }


  auth(user : User){
    return this.http.post<User>('http://localhost:8080/auth',user)
  }

  checkAccess(): Observable<string> {
    console.log('i am doing get request')
   return this.http.get<string>('http://localhost:8080/auth')
  }




}
