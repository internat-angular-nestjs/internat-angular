import { HttpClient } from '@angular/common/http';
import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Router } from '@angular/router';
// import { id } from '@cds/core/internal/decorators/id';
import { LoginPageComponent } from '../login-page/login-page.component';
// import { render } from 'creditcardpayments/creditCardPayments';
import { NgxPayPalModule } from 'ngx-paypal';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { Observable } from 'rxjs/internal/Observable';

// declare var paypal;

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css'],
})
export class WelcomePageComponent implements OnInit {
  @ViewChild('paypal', { static: true })
  // user: any;
  userList: any;
  id: number | undefined;
  enteredSearchValue: string = '';
  searchText: string = '';
  // public payPalConfig?: IPayPalConfig;

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
    // console.log(this.searchText);
  }
  constructor(
    private auth: LoginPageComponent,
    private router: Router,
    private http: HttpClient,
    paypalElement: ElementRef
  ) {
    this.userList = [];
  }
  product = {
    price: 777.77,
    description: 'used couch, decent condition',
    img: 'assets/couch.jpg',
  };

  paidFor = false;

  // render(
  //   {
  //   id:"#myPaybalButtons",
  //   currency:"USD",
  //   value:"100.00",
  //   onApprove :(details) =>{
  //     alert('Transaction Successful')
  //   }
  // })
  // private initConfig(): void {
  //   this.payPalConfig = {
  //     currency: 'EUR',
  //     clientId: 'sb',
  //     createOrderOnClient: (data) =>
  //       <ICreateOrderRequest>{
  //         intent: 'CAPTURE',
  //         purchase_units: [
  //           {
  //             amount: {
  //               currency_code: 'EUR',
  //               value: '9.99',
  //               breakdown: {
  //                 item_total: {
  //                   currency_code: 'EUR',
  //                   value: '9.99',
  //                 },
  //               },
  //             },
  //             items: [
  //               {
  //                 name: 'Enterprise Subscription',
  //                 quantity: '1',
  //                 category: 'DIGITAL_GOODS',
  //                 unit_amount: {
  //                   currency_code: 'EUR',
  //                   value: '9.99',
  //                 },
  //               },
  //             ],
  //           },
  //         ],
  //       },
  //     advanced: {
  //       commit: 'true',
  //     },
  //     style: {
  //       label: 'paypal',
  //       layout: 'vertical',
  //     },
  //     onApprove: (data, actions) => {
  //       console.log(
  //         'onApprove - transaction was approved, but not authorized',
  //         data,
  //         actions
  //       );
  //       actions.order.get().then((details) => {
  //         console.log(
  //           'onApprove - you can get full order details inside onApprove: ',
  //           details
  //         );
  //       });
  //     },
  //     onClientAuthorization: (data) => {
  //       console.log(
  //         'onClientAuthorization - you should probably inform your server about completed transaction at this point',
  //         data
  //       );
  //       this.showSuccess = true;
  //     },
  //     onCancel: (data, actions) => {
  //       console.log('OnCancel', data, actions);
  //       this.showCancel = true;
  //     },
  //     onError: (err) => {
  //       console.log('OnError', err);
  //       this.showError = true;
  //     },
  //     onClick: (data, actions) => {
  //       console.log('onClick', data, actions);
  //       this.resetStatus();
  //     },
  //   };
  // }
  ngOnInit(): void {
    this.getUserList();
    // this.initConfig();
  }
  
  loggingout() {
    this.router.navigate(['']);
    this.auth.logout();
  }

  updateUser(data: any, id: string): Observable<any> {
    return this.http.patch(`http://localhost:3000/user/updateuser/${id}`, data);
  }
  getUserList() {
    this.http
      .get('http://localhost:3000/user/getusers')
      .subscribe((result: any) => {
        this.userList = result;
        // console.log(this.userList, 'ttttt');
      });
  }
  deleteUser(id: number) {
    this.http
      .delete(`http://localhost:3000/user/delete/${id}`)
      .subscribe((data) => {
        console.log(data);
        this.getUserList();
      });
  }
}
