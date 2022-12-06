import { User } from '../user/user.entity';
import { Summary } from './summary.entity';
import { Certificates } from './certificates.entity';
import { Education } from './education.entity';
import { Experiance } from './experiance.entity';
import { UserInfo } from './userInfo.entity';
import { SocialMedia } from './socialMedia.entitiy';
import { Skills } from './skills.entity';

export class Resume {
  user: User;
  userInfo: UserInfo;
  summary: Summary;
  skills: Skills;
  socialMediaLinks: SocialMedia[];
  educations: Education[];
  experiances: Experiance[];
  certificates: Certificates[];
}
