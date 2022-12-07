import { Module } from '@nestjs/common';
import { MongoDataServiceModule } from 'src/frameworks/mongo/mongoDataServices.module';

@Module({
  imports: [MongoDataServiceModule],
  exports: [MongoDataServiceModule],
})
export class DataServicesModule {}
