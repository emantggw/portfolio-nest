import { Module } from '@nestjs/common';
import { DataServicesModule } from 'src/services/data-services/dataServices.module';
import { ProjectUseCases } from './project.usecase';
import { ProjectFactoryService } from './projectFactory.service';

@Module({
  imports: [DataServicesModule],
  providers: [ProjectUseCases, ProjectFactoryService],
  exports: [ProjectUseCases, ProjectFactoryService],
})
export class ProjectUseCasesModule {}
