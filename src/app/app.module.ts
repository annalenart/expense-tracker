import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddTransactionComponent } from './components/add-transaction/add-transaction.component';
import { TransactionFormComponent } from './components/add-transaction/transaction-form/transaction-form.component';
import { BalanceComponent } from './components/balance/balance.component';
import { TransactionComponent } from './components/transactions-list/transaction/transaction.component';
import { TransactionsListComponent } from './components/transactions-list/transactions-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BalanceComponent,
    TransactionsListComponent,
    TransactionComponent,
    AddTransactionComponent,
    TransactionFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
