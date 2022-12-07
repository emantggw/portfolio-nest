import { Injectable } from '@nestjs/common';
import { IDataServices } from 'src/core/abstracts/idataServices.abstract';
import { CreateProjectDto } from 'src/core/dtos/project/project.dto';
import { ProjectFactoryService } from './projectFactory.service';

@Injectable()
export class ProjectUseCases {
  constructor(
    private projectFactory: ProjectFactoryService,
    private dataServices: IDataServices,
  ) {}
  addProject(createProjectDto: CreateProjectDto) {
    const project = this.projectFactory.createProject(createProjectDto);
    return this.dataServices.projects.create(project);
  }
  removeProject() {}
  updateProject() {}
  deleteProject() {}
}
