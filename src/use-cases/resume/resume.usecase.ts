import { Injectable } from '@nestjs/common';
import { IDataServices } from 'src/core/abstracts/idataServices.abstract';
import { CreateResumeDto } from 'src/core/dtos/resume/resume.dto';
import { ResumeFactoryService } from './resumeFactory.service';

@Injectable()
export class ResumeUseCases {
  constructor(
    private resumeFactory: ResumeFactoryService,
    private dataService: IDataServices,
  ) {}
  createResume(createResumeDto: CreateResumeDto) {
    const resume = this.resumeFactory.createResume(createResumeDto);
    return this.dataService.resumes.create(resume);
  }
  updateResume() {}
  deleteResume() {}
}
