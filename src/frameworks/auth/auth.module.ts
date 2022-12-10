import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { IAuthServices } from 'src/core/abstracts/iauthServices.abstract';
import { DataServicesModule } from 'src/services/data-services/dataServices.module';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [
    DataServicesModule,
    PassportModule,
    ConfigModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET_KEY'),
        signOptions: { expiresIn: '30d' },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [
    {
      provide: IAuthServices,
      useClass: AuthService,
    },
    LocalStrategy,
    JwtStrategy,
  ],
  exports: [IAuthServices, DataServicesModule],
})
export class AuthModule {}
