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
    this.expenseClicked = false;
  }

  addIncome() {
    this.closeForm()
    this.expenseClicked = false;
  }

  addExpense() {
    this.closeForm()
    this.expenseClicked = true;
  }
}
