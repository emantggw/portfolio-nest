import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProjectController } from './controllers/project.controller';
import { ResumeController } from './controllers/resume.controller';
import { UserController } from './controllers/user.controller';
import { DataServicesModule } from './services/data-services/dataServices.module';
import { ProjectUseCasesModule } from './use-cases/project/project.usecase.module';
import { ResumeUseCasesModule } from './use-cases/resume/resume.usecase.module';
import { UserUseCasesModule } from './use-cases/user/user.usecase.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DataServicesModule,
    UserUseCasesModule,
    ResumeUseCasesModule,
    ProjectUseCasesModule,
  ],
  controllers: [UserController, ResumeController, ProjectController],
  providers: [],
})
export class AppModule {}
