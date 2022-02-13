import { Component, OnInit } from '@angular/core';
import { Payment } from './Payment';
import { PaymentsService } from './payments.service';
import { CreditRequest } from './CreditRequest';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  listPayment: Payment[] = [];
  temp: Payment[] = [];
  creditRequest:CreditRequest= new CreditRequest();

  constructor(private paymentsService:PaymentsService,private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    
  }


  calcular(){

    this.paymentsService.getCalculo(this.creditRequest).subscribe(
      temp => this.listPayment =temp
    );


    this.paymentsService.getPayment().subscribe(
      pay => this.listPayment =pay
    );
  }

}
