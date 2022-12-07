import { Module } from '@nestjs/common';
import { DataServicesModule } from 'src/services/data-services/dataServices.module';
import { ResumeUseCases } from './resume.usecase';
import { ResumeFactoryService } from './resumeFactory.service';

@Module({
  imports: [DataServicesModule],
  providers: [ResumeUseCases, ResumeFactoryService],
  exports: [ResumeUseCases, ResumeFactoryService],
})
export class ResumeUseCasesModule {}
