import { Injectable } from '@nestjs/common';

@Injectable()
export default class BankAccountService {
    accountBalance: number = 0;

    deposite(amount: number) {
        this.accountBalance = Number(this.accountBalance) + Number(amount);
    }

    getAccountBalance(): string {
        return `$${this.accountBalance}`;
    }
}
