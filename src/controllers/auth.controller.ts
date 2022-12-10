import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { IAuthServices } from 'src/core/abstracts/iauthServices.abstract';
import { JwtStrategy } from 'src/frameworks/auth/jwt.strategy';
import { LocalAuthGuard } from 'src/frameworks/auth/local.guard';

@Controller('api/auth')
export class AuthController {
  constructor(private authServices: IAuthServices) {}
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authServices.login(req.user._id);
  }
}
