import { Module } from '@nestjs/common';
import { AuthModule } from 'src/frameworks/auth/auth.module';

@Module({
  imports: [AuthModule],
  exports: [AuthModule],
})
export class AuthServiceModule {}
