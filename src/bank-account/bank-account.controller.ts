import { Controller, Get, Param } from '@nestjs/common';

import BankAccountService from './bank-account.service';

@Controller('bank-account')
export default class BankAccountController {
    constructor(readonly bankAccountService: BankAccountService) {}

    @Get()
    getAccountBalance() {
        return this.bankAccountService.getAccountBalance();
    }

    @Get(':amount')
    deposit(@Param('amount') amount: number) {
        this.bankAccountService.deposite(amount);
        return `account balance: ${this.bankAccountService.getAccountBalance()}`;
    }
}