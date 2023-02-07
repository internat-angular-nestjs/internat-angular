import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuardGuard } from './core/auth-guard.guard';
import { LoginPageComponent } from './login-page/login-page.component';
import { OnlinePayment } from './onlinepayment/onlinepayment.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

const routes: Routes = [
  { path: 'register', component: RegisterPageComponent },
  {path:'paypal', component:OnlinePayment}
  ,
  {
    path: 'welcome',
    component: WelcomePageComponent,
    canActivate: [AuthGuardGuard],
  },
  { path: '', component: LoginPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
