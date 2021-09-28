import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

export interface Transaction {
  name: string;
  amount: number;
  id: number;
}

export type Transactions = Array<Transaction>;

@Injectable({
  providedIn: 'root'
})
export class TransactionsProviderService {

  constructor(private http: HttpClient) {
  }

  getTransactions(): Observable<Transactions> {
    return this.http.get<Transactions>(`${environment.apiUrl}/transactions`);
  }

  addTransaction(transaction: Transaction) {
    return this.http.post(`${environment.apiUrl}/transactions`, transaction);
  }

  deleteTransaction(transactionId: number) {
    return this.http.delete(`${environment.apiUrl}/transactions/${transactionId}`);
  }
}
