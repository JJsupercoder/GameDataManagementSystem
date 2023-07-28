import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  usrName: string | undefined;
  passwrd: string | undefined;

  constructor(private router: Router, private userAuth: UserAuthService) {}

  loginForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z]+[a-zA-Z1-9 ]*$'),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  formSubmit() {
    if (this.loginForm.valid) {
      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;
      if (username && password && this.checkCredentials(username, password)) {
        this.router.navigate(['/dashboard']);
      } else {
        alert('Invalid credentials');
        this.loginForm.reset();
      }
    }
  }

  // Check user credentials
  checkCredentials(userName: string, password: string): boolean {
    var check: boolean = false;
    for (var credential of this.userAuth.credentials) {
      if (
        credential.userName === userName &&
        credential.password === password
      ) {
        check = true;
      }
    }
    return check;
  }

  get user() {
    return this.loginForm.get('username');
  }
  get pass() {
    return this.loginForm.get('password');
  }
}
