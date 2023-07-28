import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  user_name: string | undefined;
  passwrd: string | undefined;

  constructor(private router: Router) {}

  // checkoutForm = this.formBuilder.group({
  //   username: '',
  //   password: ''
  // });

  loginForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z1-9]+$'),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  // change the username password to add in json file
  formSubmit(item: any) {
    if (this.loginForm.valid) {
      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;
      if (username == 'Jenson' && password == '123456') {
        this.router.navigate(['/dashboard']);
      } else {
        alert('Invalid credentials');
      }
    }
  }

  // submitForm(){
  //   if (this.user_name == 'Jenson' && this.passwrd == '123456') {
  //     //console.log('Credentials are valid');
  //     this.router.navigate(['/dashboard']);

  //   } else {
  //     console.log('Please enter valid credentials');}
  // }

  // onSubmit(): void {
  //   // Process checkout data here
  //   // this.items = this.cartService.clearCart();
  //   console.warn('Input Credentials received', this.checkoutForm.value);
  //   this.checkoutForm.reset();
  //   // if (this.checkoutForm.value.password == "123" && this.checkoutForm.value.username == 'jenson')
  //   // {
  //   this.router.navigate(['/dashboard']);
  // // }
  // }
  get user() {
    return this.loginForm.get('username');
  }
  get pass() {
    return this.loginForm.get('password');
  }
}

// function submitForm() {
//   throw new Error('Function not implemented.');
// }
