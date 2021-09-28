import { Component, Input } from '@angular/core';
import { Transaction, TransactionsProviderService } from 'src/app/transactions-provider.service';
import { CommunicationService } from '../../../communication.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent {
  @Input() transaction: Transaction;

  constructor(private transactionsProvider: TransactionsProviderService, private communication: CommunicationService) {
  }

  onDelete(transactionId: number) {
    this.transactionsProvider.deleteTransaction(transactionId).subscribe(() => this.communication.refreshSub$.next());
  }
}
