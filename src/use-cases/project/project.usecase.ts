import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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
  async getAllUserProjects(userId: any) {
    const isValidUser = await this.dataServices.users.findOne(userId);
    if (!isValidUser) {
      return new NotFoundException();
    }
    return this.dataServices.projects.find({ user: userId });
  }
  async addProject(userId: any, createProjectDto: CreateProjectDto) {
    const project = this.projectFactory.createProject(userId, createProjectDto);
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
    const status = await this.dataServices.resumes.update(
      proejctId,
      updateProject,
    );
    if (status) {
      return updateProject;
    }
    return new ForbiddenException('Bad input data detected');
  }
  async deleteProject(projectId: any) {
    const status = await this.dataServices.projects.delete(projectId);
    if (status) {
      return true;
    }
    return new ForbiddenException('Bad input data detected');
  }
}
