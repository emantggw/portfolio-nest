import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { IEnviromentConfigService } from 'src/core/abstracts/ienviromentConfig.abstract';
import { MongoConfigService } from './mongo-config/mongoConfig.service';

@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: IEnviromentConfigService,
      useClass: MongoConfigService,
    },
  ],
  exports: [IEnviromentConfigService],
})
export class EnviromentConfigModule {}
