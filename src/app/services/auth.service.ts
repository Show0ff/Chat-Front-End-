import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../models/user";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})


export class AuthService {

  constructor(private http : HttpClient, public router : Router) {
  }



  auth(user : User){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      observe: 'response' as 'response'
    };
    return this.http.post<User>('http://localhost:8080/auth',user,httpOptions).subscribe(param => {
      if (param.body!.toString() == 'TRUE') {
        this.router.navigate(['/chat'])
      }
    })
  }






}
