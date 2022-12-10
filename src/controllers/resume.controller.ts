import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Query,
  UseGuards,
  Request,
  Delete,
} from '@nestjs/common';
import {
  CreateResumeDto,
  UpdateResumeDto,
} from 'src/core/dtos/resume/resume.dto';
import { JwtAuthGuard } from 'src/frameworks/auth/jwt.guard';
import { ResumeUseCases } from 'src/use-cases/resume/resume.usecase';

@Controller('api/resume')
export class ResumeController {
  constructor(private resumeUsecases: ResumeUseCases) {}
  @Get()
  getUserResume(@Query('user') user: any) {
    return this.resumeUsecases.getUserResume(user);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  createResume(@Request() req, @Body() createResumeDto: CreateResumeDto) {
    return this.resumeUsecases.createResume(req.userId, createResumeDto);
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  updateResume(
    @Body() updateResumeDto: UpdateResumeDto,
    @Query('resumeId') resumeId: any,
  ) {
    return this.resumeUsecases.updateResume(resumeId, updateResumeDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete()
  deleteResume(@Query('resumeId') resumeId: any) {
    return this.resumeUsecases.deleteResume(resumeId);
  }
}
