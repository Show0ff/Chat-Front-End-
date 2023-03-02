import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class GetNameService {

  constructor(private http : HttpClient) {
  }

  getName() : Observable<string> {
    return this.http.get<string>('http://localhost:8080/userName');
  }

}
