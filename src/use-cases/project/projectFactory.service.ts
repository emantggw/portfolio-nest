import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from 'src/core/dtos/project/project.dto';
import { Project } from 'src/core/entities/project/project.entity';

@Injectable()
export class ProjectFactoryService {
  createProject(createProjectDto: CreateProjectDto): Project {
    const project = new Project();
    project.user = createProjectDto.userId;
    project.title = createProjectDto.title;
    project.subTitle = createProjectDto.subTitle;
    project.type = createProjectDto.type;
    project.description = createProjectDto.description;
    project.screenShots = createProjectDto.screenShots;
    project.link = createProjectDto.link;
    project.tools = createProjectDto.tools;

    return project;
  }
}
