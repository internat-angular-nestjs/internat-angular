import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ClrSelectContainer } from '@clr/angular';
import { WelcomePageComponent } from '../welcome-page/welcome-page.component';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

import {
  FormGroup,
  Validators,
  FormControl,
  FormBuilder,
  FormArray,
} from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  form!: FormGroup;
  // roles:any
  // theToken = 'access_token';
  roles = [
    { id: 1, name: 'super admin ' },
    { id: 2, name: 'admin' },
  ];
  //  asIntented=this.roles.name
  constructor(
    public router: Router,
    public http: HttpClient,
    public formBuilder: FormBuilder,
    public jwtHelper: JwtHelperService
  ) {
    //  this.form = new FormGroup({
    //     email: '',
    //     password: '',
    //   });
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      // username: '',
      emailUser: '', 
      passwordUser: '',
    });
  }
  // constructor(private httpClient: HttpClient) {}
  onSubmit(emailUser: string, passwordUser: string) {
    // const email=this.form.email;
    this.http
      .post<{ token: string }>(
        'http://localhost:3000/authentication/valide',
        {
          emailUser,
          passwordUser,
        }
      )
      .subscribe((data) => {
        console.log(emailUser);
        localStorage.setItem('access_token', data.token);
        this.router.navigate(['welcome']);
      });
    // return this.http.post<{ access_token: string }>('http://localhost:3000/badis/auth', {
    //     email,
    //     password,
    //   })
    //   .pipe(
    //     tap((res) => {
    //       localStorage.setItem('access_token', res.access_token);
    //       this.router.navigate(['welcome']);
    //     })
    //   );
  }
  // register(username: string, email: string, password: string) {
  //   return this.http
  //     .post<{ access_token: string }>('http://localhost:3000/badis/users', {
  //       username,
  //       email,
  //       password,
  //     })
  //     .subscribe((res) => {
  //       this.onSubmit(email, password);
  //       this.router.navigate(['']);
  //     });
  // }
  logout() {
    localStorage.removeItem('access_token');
  }
  // public get
  loggedIn(): boolean {
    return localStorage.getItem('access_token') !== null;
  }
  // onSubmit(logindata: any) {
  //   if (this.form.email !== undefined && this.form.password !== undefined) {
  // this.http.get('http://localhost:3000/badis/auth', logindata);
  //     console.log(logindata);
  //     this.router.navigate(['welcome']);
  //   } else {
  //     alert('Please enter your account or sign up');
  //   }
  // }
  // onSubmit():void{
  //   this.http.post('http://localhost:3000/badis/auth', this.form.getRawValue(), {
  //     withCredentials: true
  //   }).subscribe(() => this.router.navigate(['/']));
  // }
  // }

  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }
  // onContinue(): void {
  //   if (this.form.email === 'badis' && this.form.password === 'badis') {
  //     this.router.navigateByUrl('welcome');
  //     // alert('rrr');
  //   } else {
  //     alert('wrong password or email or both');
  //   }
  // }
}
