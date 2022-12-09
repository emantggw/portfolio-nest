import { Injectable, NotFoundException } from '@nestjs/common';
import { IDataServices } from 'src/core/abstracts/idataServices.abstract';
import {
  CreateProjectDto,
  UpdateProjectDto,
} from 'src/core/dtos/project/project.dto';
import { Project } from 'src/core/entities/project/project.entity';
import { ProjectFactoryService } from './projectFactory.service';

@Injectable()
export class ProjectUseCases {
  constructor(
    private projectFactory: ProjectFactoryService,
    private dataServices: IDataServices,
  ) {}
  getAllUserProjects(user: any) {
    return this.dataServices.projects.find({ user: user });
  }
  async addProject(createProjectDto: CreateProjectDto) {
    const project = this.projectFactory.createProject(createProjectDto);
    const isValidUser = await this.dataServices.users.findOne(project.user);
    if (!isValidUser) {
      return new NotFoundException();
    }
    return this.dataServices.projects.create(project);
  }

  async updateProject(proejctId: any, updateProjectDto: UpdateProjectDto) {
    const oldProject: Project = await this.dataServices.projects.findOne(
      proejctId,
    );
    const updateProject = this.projectFactory.updateProject(
      oldProject,
      updateProjectDto,
    );
    await this.dataServices.resumes.update(proejctId, updateProject);
    return updateProject;
  }
  async deleteProject(projectId: any) {
    await this.dataServices.projects.delete(projectId);
    return true;
  }
}
