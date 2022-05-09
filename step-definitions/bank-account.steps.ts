import * as assert from 'assert';
import { binding, given, then, when} from 'cucumber-tsflow';

import BankAccount from '../src/bank.account'

@binding()
export class BankAccountSteps {
  bankAccount = new BankAccount();

  @given(/A bank account with starting balance of \$(\d*)/)
  public givenAnAccountWithStartingBalance(amount: number) {
    this.bankAccount.accountBalance = 100;
  }

  @when(/\$(\d*) is deposited/)
  public deposit(amount: number) {
    this.bankAccount.deposite(amount);
  }

  @then(/The bank account balance should be \$(\d*)/)
  public accountBalanceShouldEqual(expectedAmount: number) {
    assert.equal(this.bankAccount.accountBalance, expectedAmount);
  }
}