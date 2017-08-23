import { Component, OnInit } from '@angular/core';
import { AngularService } from '../angular/service';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {LoginService} from './login.service';

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loggedIn:  string = null;

  constructor(
    private _service: AngularService,
    private _builder: FormBuilder,
    private _loginService: LoginService
  ) {
    this.loginForm = this._builder.group({
      username: new FormControl(null),
      password: new FormControl(null)
    });
  }

  ngOnInit() {
    this.loggedIn = localStorage.getItem('currentUser');
    this._service.setDirective(1);
  }
  save() {
    this._service.setDirective(2);
    this._loginService.login(this.loginForm.value.username, this.loginForm.value.password);
  }
}
