import { NgModule, OnInit, EventEmitter } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClrSelectContainer } from '@clr/angular';
import { ClarityModule } from '@clr/angular';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { JwtModule } from '@auth0/angular-jwt';
import { RegisterPageComponent } from './register-page/register-page.component';
import { AuthGuardGuard } from './core/auth-guard.guard';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe/dist/src/ng2-filter.module';
import { SearchComponent } from './search/search.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { OnlinePayment } from './onlinepayment/onlinepayment.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    SearchComponent,
    OnlinePayment,
    EditComponent,
  ],
  imports: [
    NgxPayPalModule,
    BrowserModule,
    ClarityModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: function tokenGetter() {
          return localStorage.getItem('access_token');
        },
        allowedDomains: ['localhost:3000'],
        disallowedRoutes: [],
      },
    }),
  ],
  providers: [EventEmitter, AuthGuardGuard, LoginPageComponent],
  bootstrap: [AppComponent, ClrSelectContainer],
})
export class AppModule implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  NgOnInit() {}
}
