import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CommunicationService } from 'src/app/communication.service';
import { Transactions, TransactionsProviderService } from 'src/app/transactions-provider.service';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.scss']
})
export class TransactionsListComponent implements OnInit {
  transactionsList$: Observable<Transactions>;

  constructor(private transactionsProvider: TransactionsProviderService, private communication: CommunicationService) {
  }

  ngOnInit() {
    this.transactionsList$ = this.communication.transactionsList$;
  }
}
