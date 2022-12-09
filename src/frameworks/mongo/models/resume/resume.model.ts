import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Certificates } from 'src/core/entities/resume/certificates.entity';
import { Education } from 'src/core/entities/resume/education.entity';
import { Experiance } from 'src/core/entities/resume/experiance.entity';
import { Skills } from 'src/core/entities/resume/skills.entity';
import { SocialMedia } from 'src/core/entities/resume/socialMedia.entitiy';
import { Summary } from 'src/core/entities/resume/summary.entity';
import { UserInfo } from 'src/core/entities/resume/userInfo.entity';
import { User } from '../user/user.model';

export type ResumeDocument = Resume & Document;

@Schema()
export class Resume {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true,
  })
  user: User;

  @Prop()
  userInfo: UserInfo;

  @Prop()
  summary: Summary;

  @Prop()
  skills: Skills;

  @Prop()
  socialMediaLinks: SocialMedia[];

  @Prop()
  educations: Education[];

  @Prop()
  experiances: Experiance[];

  @Prop()
  certificates: Certificates[];
}

export const ResumeSchema = SchemaFactory.createForClass(Resume);
