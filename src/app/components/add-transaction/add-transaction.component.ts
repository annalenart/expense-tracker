import { Component } from '@angular/core';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.scss']
})
export class AddTransactionComponent {
  isClosed = true;
  expenseClicked = false;

  closeForm() {
    this.isClosed = !this.isClosed;
  }

  addIncome() {
    this.expenseClicked = false;
    this.closeForm();
  }

  addExpense() {
    this.expenseClicked = true;
    this.closeForm();
  }
}
