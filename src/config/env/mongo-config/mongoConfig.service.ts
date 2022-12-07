import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IEnviromentConfigService } from 'src/core/abstracts/ienviromentConfig.abstract';

@Injectable()
export class MongoConfigService implements IEnviromentConfigService {
  constructor(private configService: ConfigService) {}
  getDatabaseType(): string {
    return 'mongodb';
  }
  getDatabaseConnString(): string {
    return this.configService.get('MONGO_CONN_STRING');
  }
  getDatabaseName(): string {
    return '';
  }
  getDatabasePort(): number {
    return 0;
  }
  getDatabasePassword(): string {
    return '';
  }
  getDatabaseUsername(): string {
    return '';
  }
}
