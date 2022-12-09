import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateUserDto } from 'src/core/dtos/user/user.dto';
import { UserUseCases } from 'src/use-cases/user/user.usecase';

@Controller('api/user')
export class UserController {
  constructor(private userUsecases: UserUseCases) {}
  @Post('createAccount')
  signup(@Body() userAccount: CreateUserDto) {
    return this.userUsecases.createAccount(userAccount);
  }
}
