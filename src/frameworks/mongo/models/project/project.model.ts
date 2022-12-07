import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from '../user/user.model';

export type ProjectDocument = Project & Document;
@Schema()
export class Project {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  user: User;

  @Prop()
  title: string;

  @Prop()
  subTitle: string;

  @Prop()
  description: string;

  @Prop()
  type: string;

  @Prop()
  tools: string[];

  @Prop()
  screenShots: string[];

  @Prop()
  link: string;

  @Prop()
  projectCreatedAt: Date;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
