import { Project } from '../entities/project/project.entity';
import { Resume } from '../entities/resume/resume.entity';
import { User } from '../entities/user/user.entity';
import { IRepository } from './irepository.abstract';

export abstract class IDataServices {
  abstract users: IRepository<User>;
  abstract resumes: IRepository<Resume>;
  abstract projects: IRepository<Project>;
}
