import { Module } from '@nestjs/common';
import { IDataServices } from 'src/core/abstracts/idataServices.abstract';
import { DataServicesModule } from 'src/services/data-services/dataServices.module';
import { UserUseCases } from './user.usecase';
import { UserFactoryService } from './userFactory.service';

@Module({
  imports: [DataServicesModule],
  providers: [UserFactoryService, UserUseCases],
  exports: [UserFactoryService, UserUseCases],
})
export class UserUseCasesModule {}
