import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { IAuthServices } from 'src/core/abstracts/iauthServices.abstract';
import { DataServicesModule } from 'src/services/data-services/dataServices.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [DataServicesModule, PassportModule],
  providers: [
    {
      provide: IAuthServices,
      useClass: AuthService,
    },
    LocalStrategy,
  ],
  exports: [IAuthServices, DataServicesModule],
})
export class AuthModule {}
