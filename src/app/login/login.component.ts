import { Component, OnInit } from '@angular/core';
import { IUser } from '../interfaces/User';
import { LoginServicesService } from '../services/login-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private _loginService: LoginServicesService) {}
  ngOnInit(): void {}
  public email = '';
  public password = '';

  public success = '';
  public error = '';

  public login() {
    this.success = '';
    this.error = '';
    this._loginService
      .saveUserData({
        email: this.email,
        password: this.password,
      })
      .subscribe({
        next: (data: IUser) => {
          this.success = 'Login Successfull';
        },
        error: (err) => {
          this.error = 'Some Error Occured, Login Failed';
        },
      });
  }
}
