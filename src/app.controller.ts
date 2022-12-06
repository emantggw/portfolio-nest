import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateProjectDto } from './core/dtos/project/project.dto';
import { CreateResumeDto } from './core/dtos/resume/resume.dto';
import { CreateUserDto } from './core/dtos/user/user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
