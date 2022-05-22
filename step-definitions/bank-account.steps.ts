import { Given, When, Then, Before } from '@cucumber/cucumber';
import * as assert from 'assert';

import BankAccount from '../src/bank-account/bank-account.service';

Given('a bank', () => {
    this.bankAccount = new BankAccount();
});

Given(/A bank account with starting balance of \$(\d*)/, (amount: number) => {
    this.bankAccount.accountBalance = amount;
});

When(/\$(\d*) is deposited/, (amount: number) => {
    this.bankAccount.deposite(amount);
});

Then(/The bank account balance should be \$(\d*)/, (expectedAmount: number) => {
    assert.equal(this.bankAccount.accountBalance, expectedAmount);
    assert.equal(this.bankAccount.getAccountBalance(), `$${expectedAmount}`);
});