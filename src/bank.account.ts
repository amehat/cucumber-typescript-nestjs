export default class BankAccount {
    accountBalance: number = 0;

    deposite(amount: number) {
        this.accountBalance = Number(this.accountBalance) + Number(amount);
    }

    getAccountBalance(): string {
        return `$${this.accountBalance}`;
    }
}
