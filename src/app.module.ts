import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DataServicesModule } from './services/data-services/dataServices.module';

@Module({
  imports: [ConfigModule.forRoot(), DataServicesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
