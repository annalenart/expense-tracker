import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommunicationService } from 'src/app/communication.service';
import { Transactions } from 'src/app/transactions-provider.service';

interface Balance {
  total: number;
  income: number;
  expense: number;
}

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit {
  balance$: Observable<Balance>;

  constructor(private communication: CommunicationService) {
  }

  ngOnInit() {
    this.balance$ = this.communication.transactionsList$.pipe(
      map((data: Transactions) =>
        data ? data.reduce((obj, {amount}) => {
            amount > 0 ? obj.income += amount : obj.expense += amount;
            obj.total = obj.income + obj.expense;
            return obj;
          }, {total: 0, income: 0, expense: 0})
          : {total: 0, income: 0, expense: 0}
      )
    );
  }
}
