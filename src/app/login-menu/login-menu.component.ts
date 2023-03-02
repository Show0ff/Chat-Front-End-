import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {ChatComponent} from "../chat/chat.component";



@Component({
  selector: 'app-login-menu',
  templateUrl: './login-menu.component.html',
  styleUrls: ['./login-menu.component.css']
})
export class LoginMenuComponent implements OnInit {


  constructor(public loginService: AuthService) {

  }

  chat: ChatComponent


  formLogin = new FormGroup({
    login: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(3)])
  })

  formPassword = new FormGroup({
    password: new FormControl<string>('')
  })


  get login() {
    return this.formLogin.controls.login as FormControl
  }

  get password() {
    return this.formPassword.controls.password as FormControl
  }


  signIn() {
    if (this.formLogin.value.login != null
      && this.formPassword.value.password != null
      && this.formLogin.value.login?.length >= 3) {

      this.loginService.auth({
        login: this.formLogin.value.login as string,
        password: this.formPassword.value.password as string
      })

      console.log(this.formLogin.value, this.formPassword.value)
    }
  }


  ngOnInit(): void {
  }


}
