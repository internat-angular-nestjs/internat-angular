import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var paypal: { Buttons: (arg0: { createOrder: (data: any, actions: { order: { create: (arg0: { purchase_units: { description: string; amount: { currency_code: string; value: number; }; }[]; }) => any; }; }) => any; onApprove: (data: any, actions: { order: { capture: () => any; }; }) => Promise<void>; onError: (err: any) => void; }) => { (): any; new(): any; render: { (arg0: any): void; new(): any; }; }; };

@Component({
  selector: 'app-payme',
  templateUrl: './onlinepayment.component.html',
  styleUrls: ['./onlinepayment.component.css'],
})
export class OnlinePayment implements OnInit {
  @ViewChild('paypal', { static: true })
  paypalElement!: ElementRef;

  product = {
    price: 777.77,
    description: 'used couch, decent condition',
    img: 'assets/couch.jpg',
  };

  paidFor = false;

  ngOnInit() {
    paypal
      .Buttons({
        createOrder: (
          data: any,
          actions: {
            order: {
              create: (arg0: {
                purchase_units: {
                  description: string;
                  amount: { currency_code: string; value: number };
                }[];
              }) => any;
            };
          }
        ) => {
          return actions.order.create({
            purchase_units: [
              {
                description: this.product.description,
                amount: {
                  currency_code: 'USD',
                  value: this.product.price,
                },
              },
            ],
          });
        },
        onApprove: async (
          data: any,
          actions: { order: { capture: () => any } }
        ) => {
          const order = await actions.order.capture();
          this.paidFor = true;
          console.log(order);
        },
        onError: (err: any) => {
          console.log(err);
        },
      })
      .render(this.paypalElement.nativeElement);
  }
}
