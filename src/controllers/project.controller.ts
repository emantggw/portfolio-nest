import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import {
  CreateProjectDto,
  UpdateProjectDto,
} from 'src/core/dtos/project/project.dto';
import { ProjectUseCases } from 'src/use-cases/project/project.usecase';

@Controller('api/projects')
export class ProjectController {
  constructor(private projectUsecases: ProjectUseCases) {}
  @Get()
  getAllProjects(@Query('user') user: any) {
    return this.projectUsecases.getAllUserProjects(user);
  }

  @Post()
  addProject(@Body() createProjectDto: CreateProjectDto) {
    return this.projectUsecases.addProject(createProjectDto);
  }
  @Put()
  updateProject(
    @Body() updateResumeDto: UpdateProjectDto,
    @Query('projectId') projectId: any,
  ) {
    return this.projectUsecases.updateProject(projectId, updateResumeDto);
  }
  @Delete()
  deleteProject(
    @Query('projectId') projectId: any,
  ) {
    return this.projectUsecases.deleteProject(projectId);
  }
}
