import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommunicationService } from 'src/app/communication.service';
import { Transaction, TransactionsProviderService } from 'src/app/transactions-provider.service.ts.service';


@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.scss']
})
export class TransactionFormComponent implements OnInit {
  @Input() expenseClicked: boolean;
  @Output() closeFormClicked = new EventEmitter<void>();

  transactionForm: FormGroup;
  
  constructor(private transactionsProvider: TransactionsProviderService, private communication: CommunicationService) { }

  ngOnInit(): void {
    this.transactionForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      amount: new FormControl(null, Validators.required)
    })
  }

  onSubmit(): void {
    let transaction = this.expenseClicked ? this.transactionsProvider.addTransaction(this.negativeAmount())
    : this.transactionsProvider.addTransaction(this.transactionForm.value);
    transaction.subscribe(() => this.communication.refreshSub$.next()) 
    this.closeForm();
    this.transactionForm.reset();
  }

  closeForm(): void {
    this.closeFormClicked.emit();
    this.expenseClicked = false;
  }

  negativeAmount(): Transaction {
    return {...this.transactionForm.value, amount: this.transactionForm.value.amount * -1};
  }
}
