import {
  ForbiddenException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { IDataServices } from 'src/core/abstracts/idataServices.abstract';
import {
  CreateResumeDto,
  UpdateResumeDto,
} from 'src/core/dtos/resume/resume.dto';
import { Resume } from 'src/core/entities/resume/resume.entity';
import { ResumeFactoryService } from './resumeFactory.service';

@Injectable()
export class ResumeUseCases {
  constructor(
    private resumeFactory: ResumeFactoryService,
    private dataServices: IDataServices,
  ) {}
  async getUserResume(userId: any) {
    const isValidUser = await this.dataServices.users.findOne(userId);
    if (!isValidUser) {
      return new NotFoundException();
    }
    return this.dataServices.resumes.find({ user: userId });
  }
  async createResume(userId: any, createResumeDto: CreateResumeDto) {
    const resume = this.resumeFactory.createResume(userId, createResumeDto);
    const isValidUser = await this.dataServices.users.findOne(resume.user);
    if (!isValidUser) {
      return new NotFoundException();
    }
    const isResumeAlreadyCreatedByUser = await this.dataServices.resumes.find({
      user: resume.user,
    });
    if (isResumeAlreadyCreatedByUser) {
      return new ForbiddenException(
        "The resume is already created, you can't create mutliple resume per user.",
      );
    }
    return this.dataServices.resumes.create(resume);
  }
  async updateResume(resumeId: any, updateResumeDto: UpdateResumeDto) {
    const oldResume: Resume = await this.dataServices.resumes.findOne(resumeId);
    const updatedResume = this.resumeFactory.updateResume(
      oldResume,
      updateResumeDto,
    );
    await this.dataServices.resumes.update(resumeId, updatedResume);
    return updatedResume;
  }
  async deleteResume(resumeId: any) {
    await this.dataServices.resumes.delete(resumeId);
    return true;
  }
}
