import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthController } from './controllers/auth.controller';
import { ProjectController } from './controllers/project.controller';
import { ResumeController } from './controllers/resume.controller';
import { UserController } from './controllers/user.controller';
import { AuthServiceModule } from './services/auth-services/authServices.module';
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
    AuthServiceModule
  ],
  controllers: [
    UserController,
    ResumeController,
    ProjectController,
    AuthController,
  ],
  providers: [],
})
export class AppModule {}
