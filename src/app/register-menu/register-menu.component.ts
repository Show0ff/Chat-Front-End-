import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RegisterService} from "../services/registerService";

@Component({
  selector: 'app-register-menu',
  templateUrl: './register-menu.component.html',
  styleUrls: ['./register-menu.component.css']
})
export class RegisterMenuComponent implements OnInit {
  formLogin = new FormGroup({
    login: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(3)]
    )
  })

  formPassword = new FormGroup({
    password: new FormControl<string>('')
  })

  formConfirmPassword = new FormGroup({
    confirmPassword: new FormControl<string>('')
  })

  get login() {
    return this.formLogin.controls.login as FormControl
  }

  get password() {
    return this.formPassword.controls.password as FormControl
  }


  constructor(private register : RegisterService) {
  }

  signUp() {
    if (this.formLogin.value.login != null
      && this.formPassword.value.password != null
      && this.formLogin.value.login?.length >= 3
      && this.formConfirmPassword.value.confirmPassword != null
      && this.formPassword.value.password == this.formConfirmPassword.value.confirmPassword) {

      this.register.createAccount({
        login: this.formLogin.value.login as string,
        password: this.formPassword.value.password as string
      })
      console.log(this.formLogin.value, this.formPassword.value)
    }

  }


  ngOnInit(): void {
  }

}
