import { Injectable } from '@angular/core';
import { Payment } from './Payment';
import { Observable,of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CreditRequest } from './CreditRequest';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})


  constructor(private http: HttpClient) { }

  getPayment():Observable<Payment[]>{
    return this.http.get("http://localhost:8080/listaPayment").pipe(
      map(response => response as Payment[])
    );
  }


  getCalculo(request: CreditRequest) :Observable<Payment[]> {
    return this.http.post<Payment[]>("http://localhost:8080/calculateInterest", request, {headers: this.httpHeaders})
  }
   

}
