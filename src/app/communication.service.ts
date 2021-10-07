import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { shareReplay, switchMap } from 'rxjs/operators';
import { Transactions, TransactionsProviderService } from './transactions-provider.service';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  refreshSub$ = new BehaviorSubject<void>(undefined);
  transactionsList$: Observable<Transactions>;

  constructor(transactionsProvider: TransactionsProviderService) {
    this.transactionsList$ = this.refreshSub$.pipe(
      switchMap(() => transactionsProvider.getTransactions()),
      shareReplay(1)
    );
  }
}
