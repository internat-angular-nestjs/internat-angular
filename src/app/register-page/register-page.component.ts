import { Component, OnInit, Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginPageComponent } from '../login-page/login-page.component';

import {
  FormGroup,
  Validators,
  FormControl,
  FormBuilder,
  FormArray,
} from '@angular/forms';
@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent extends LoginPageComponent {
  // constructor(
  //   public router: Router,
  //   public http: HttpClient,
  //   public formBuilder: FormBuilder
  // ) {}
  // form!: FormGroup;

  // ngOnInit(): void {
  //   this.form = this.formBuilder.group({
  //     username: '',
  //     email: '',
  //     password: '',
  //   });
  // }
  register(
    familyUser: string,
    nameUser: string,
    emailUser: string,
    passwordUser: string,
    role: string,
    phoneNumber: string,
    signature: string,
    dateOfBirth: Date
  ) {
    return this.http
      .post<{ access_token: string }>('http://localhost:3000/user/add', {
        familyUser,
        nameUser,
        emailUser,
        passwordUser,
        role,
        phoneNumber,
        signature,
        dateOfBirth,
      })
      .subscribe(() => {
        this.router.navigate(['']);
      });
  }
}
