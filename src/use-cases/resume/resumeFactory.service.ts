import { Injectable } from '@nestjs/common';
import { CreateResumeDto } from 'src/core/dtos/resume/resume.dto';
import { Resume } from 'src/core/entities/resume/resume.entity';

@Injectable()
export class ResumeFactoryService {
  createResume(createResumeDto: CreateResumeDto): Resume {
    const resume = new Resume();
    resume.user = createResumeDto.userId;
    resume.userInfo = createResumeDto.userInfo;
    resume.certificates = createResumeDto.certificates;
    resume.educations = createResumeDto.educations;
    resume.experiances = createResumeDto.experiances;
    resume.skills = createResumeDto.skills;
    resume.socialMediaLinks = createResumeDto.socialMediaLinks;
    resume.summary = createResumeDto.userSummary;

    return resume;
  }
}
