import { Module } from '@nestjs/common';
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { MongooseOptions } from 'mongoose';
import { EnviromentConfigModule } from 'src/config/env/enviromentConfig.module';
import { IDataServices } from 'src/core/abstracts/idataServices.abstract';
import { IEnviromentConfigService } from 'src/core/abstracts/ienviromentConfig.abstract';
import { Project, ProjectSchema } from './models/project/project.model';
import { Resume, ResumeSchema } from './models/resume/resume.model';
import { User, UserSchema } from './models/user/user.model';
import { MongoDataService } from './mongoDataService.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Resume.name, schema: ResumeSchema },
      { name: Project.name, schema: ProjectSchema },
    ]),

    MongooseModule.forRootAsync({
      imports: [EnviromentConfigModule],
      useFactory: async (configService: IEnviromentConfigService) => ({
        uri: configService.getDatabaseConnString(),
      }),
      inject: [IEnviromentConfigService],
    }),
  ],

  providers: [
    {
      provide: IDataServices,
      useClass: MongoDataService,
    },
  ],
  exports: [IDataServices],
})
export class MongoDataServiceModule {}
