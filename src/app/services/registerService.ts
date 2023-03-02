import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})


export class RegisterService {

  constructor(private http: HttpClient, public router: Router) {
  }


  createAccount(user : User){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      observe: 'response' as 'response'
    };
    return this.http.post<User>('http://localhost:8080/register',user,httpOptions).subscribe(param => {
      if (param.body!.toString() == 'TRUE') {
        this.router.navigate(['/chat'])
      }
    })
  }
}
