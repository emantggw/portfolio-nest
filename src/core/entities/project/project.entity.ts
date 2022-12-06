import { User } from '../user/user.entity';

export class Project {
  title: string;
  subTitle: string;
  description: string;
  type: string;
  tools: string[];
  screenShots: string[];
  link: string;
  projectCreatedAt: Date;
}
