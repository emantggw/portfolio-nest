import { Injectable } from '@nestjs/common';
import {
  CreateResumeDto,
  UpdateResumeDto,
} from 'src/core/dtos/resume/resume.dto';
import { Resume } from 'src/core/entities/resume/resume.entity';

@Injectable()
export class ResumeFactoryService {
  createResume(userId: any, createResumeDto: CreateResumeDto): Resume {
    const resume = new Resume();
    resume.user = userId;
    resume.userInfo = createResumeDto.userInfo;
    resume.certificates = createResumeDto.certificates;
    resume.educations = createResumeDto.educations;
    resume.experiances = createResumeDto.experiances;
    resume.skills = createResumeDto.skills;
    resume.socialMediaLinks = createResumeDto.socialMediaLinks;
    resume.summary = createResumeDto.userSummary;

    return resume;
  }
  updateResume(oldResume: Resume, updateResumeDto: UpdateResumeDto): Resume {
    const resume = new Resume();
    resume.userInfo = updateResumeDto.userInfo ?? oldResume.userInfo;
    resume.certificates =
      updateResumeDto.certificates ?? oldResume.certificates;
    resume.educations = updateResumeDto.educations ?? oldResume.educations;
    resume.experiances = updateResumeDto.experiances ?? oldResume.experiances;
    resume.skills = updateResumeDto.skills ?? oldResume.skills;
    resume.socialMediaLinks =
      updateResumeDto.socialMediaLinks ?? oldResume.socialMediaLinks;
    resume.summary = updateResumeDto.userSummary ?? oldResume.summary;
    return resume;
  }
}
