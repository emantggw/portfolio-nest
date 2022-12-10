import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
  UseGuards,
  Request,
} from '@nestjs/common';
import {
  CreateProjectDto,
  UpdateProjectDto,
} from 'src/core/dtos/project/project.dto';
import { JwtAuthGuard } from 'src/frameworks/auth/jwt.guard';
import { ProjectUseCases } from 'src/use-cases/project/project.usecase';

@Controller('api/projects')
export class ProjectController {
  constructor(private projectUsecases: ProjectUseCases) {}

  @Get()
  getAllProjects(@Query('user') user: string) {
    return this.projectUsecases.getAllUserProjects(user);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  addProject(@Body() createProjectDto: CreateProjectDto, @Request() req) {
    return this.projectUsecases.addProject(req.user.userId, createProjectDto);
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  updateProject(
    @Body() updateResumeDto: UpdateProjectDto,
    @Query('projectId') projectId: any,
  ) {
    return this.projectUsecases.updateProject(projectId, updateResumeDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete()
  deleteProject(@Query('projectId') projectId: any) {
    return this.projectUsecases.deleteProject(projectId);
  }
}
