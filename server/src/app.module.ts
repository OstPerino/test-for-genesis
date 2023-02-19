import { Module } from '@nestjs/common';
import { DealModule } from './deal/deal.module';
import { ContactModule } from './contact/contact.module';
import { CompanyModule } from './company/company.module';

@Module({
  imports: [DealModule, ContactModule, CompanyModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
