import { Project } from '../project/project.entity';
import { Resume } from '../resume/resume.entity';

export class User {
  email: string;
  password: string;
  resume: Resume;
  projects: Project[];
}
