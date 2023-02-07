// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';
// import { tap } from 'rxjs/operators';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// @Injectable({
//   providedIn: 'root',
// })
// export class AuthService {
//    loginApi='http://localhost:3000/badis/auth'
//   private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
//   isLoggedIn$ = this._isLoggedIn$.asObservable();

//   constructor(private http: HttpClient) {
//     const token = localStorage.getItem('badis_auth');
//     this._isLoggedIn$.next(!!token);
//   }
//   httpOptions = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//     }),
//   };
//   login(form: any) {
//     return this.http.get(this.loginApi, form).pipe(
//       tap((response: any) => {
//         this._isLoggedIn$.next(true);
//         localStorage.setItem('badis_auth', response.token);
//       })
//     );
//   }
// }
