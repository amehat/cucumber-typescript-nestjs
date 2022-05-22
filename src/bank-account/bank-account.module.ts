import { Module } from '@nestjs/common';

import BankAccount from './bank-account.service';
import BankAccountController from './bank-account.controller';

@Module({
    controllers: [BankAccountController],
    providers: [BankAccount],
})
export default class BankAccountModule {}