import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


export interface Transaction {
  name: string;
  amount: number;
}

export type Transactions = Array<Transaction>;

@Injectable({
  providedIn: 'root'
})
export class TransactionsProviderService {

constructor(private http: HttpClient) { }

  getTransactions(): Observable<Transactions> {
    return this.http.get<Transactions>('https://expense-tracker-67a8f-default-rtdb.europe-west1.firebasedatabase.app/transactions.json').pipe(map((data) => data && Object.values(data)));
  }

  addTransaction(transaction: Transaction) {
    return this.http.post('https://expense-tracker-67a8f-default-rtdb.europe-west1.firebasedatabase.app/transactions.json', transaction);
  }
}
