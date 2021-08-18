import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { shareReplay, startWith, switchMap } from 'rxjs/operators';
import { Transactions, TransactionsProviderService } from './transactions-provider.service.ts.service';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  refreshSub$ = new Subject<void>();
  transactionsList$: Observable<Transactions>

  constructor(transactionsProvider: TransactionsProviderService) { 
    this.transactionsList$ = this.refreshSub$.pipe(
      startWith(undefined),
      switchMap(() => transactionsProvider.getTransactions()),
      shareReplay(1)
    )
  }
}
