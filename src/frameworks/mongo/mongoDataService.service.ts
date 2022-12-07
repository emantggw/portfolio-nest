import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IDataServices } from 'src/core/abstracts/idataServices.abstract';
import { IRepository } from 'src/core/abstracts/irepository.abstract';
import { Project, ProjectDocument } from './models/project/project.model';
import { Resume, ResumeDocument } from './models/resume/resume.model';
import { User, UserDocument } from './models/user/user.model';
import { MongoRepository } from './mongoRepository.repo';

@Injectable()
export class MongoDataService implements IDataServices, OnApplicationBootstrap {
  users: IRepository<User>;
  resumes: IRepository<Resume>;
  projects: IRepository<Project>;

  constructor(
    @InjectModel(User.name)
    private userRepo: Model<UserDocument>,

    @InjectModel(Resume.name)
    private resumeRepo: Model<ResumeDocument>,

    @InjectModel(Project.name)
    private projectRepo: Model<ProjectDocument>,
  ) {}
  onApplicationBootstrap() {
    this.users = new MongoRepository<User>(this.userRepo);
    this.resumes = new MongoRepository<Resume>(this.resumeRepo);
    this.projects = new MongoRepository<Project>(this.projectRepo);
  }
}
