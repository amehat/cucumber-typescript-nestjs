import { Module } from '@nestjs/common';

import AppController from './app.controller';
import BankModule from '../bank-account/bank-account.module';

@Module({
  controllers: [AppController],
  imports: [BankModule],
})
export default class AppModule {}