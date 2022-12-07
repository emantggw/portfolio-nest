import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  ArrayNotEmpty,
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CertificatesDto } from './certificates.dto';
import { EducationDto } from './education.dto';
import { ExperianceDto } from './experiance.dto';
import { SkillsDto } from './skills.dto';
import { SocialMediaDto } from './socialMedia.dto';
import { UserSummaryDto } from './summary.dto';
import { UserInfoDto } from './userInfo.dto';

export class CreateResumeDto {
  @IsNotEmpty()
  userId: any

  @Type(() => UserInfoDto)
  @IsNotEmpty()
  userInfo: UserInfoDto;

  @Type(() => UserSummaryDto)
  @IsNotEmpty()
  userSummary: UserSummaryDto;

  @IsArray()
  @ValidateNested({ each: true })
  @ArrayMinSize(1)
  @Type(() => SocialMediaDto)
  socialMediaLinks: SocialMediaDto[];

  @Type(() => SkillsDto)
  @IsNotEmpty()
  skills: SkillsDto;

  @IsArray()
  @ValidateNested({ each: true })
  @ArrayMinSize(1)
  @Type(() => EducationDto)
  educations: EducationDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @ArrayMinSize(1)
  @Type(() => ExperianceDto)
  experiances: ExperianceDto[];

  @IsArray()
  @IsOptional()
  @ValidateNested({ each: true })
  @ArrayMinSize(1)
  @Type(() => CertificatesDto)
  certificates: CertificatesDto[];
}
export class UpdateResumeDto extends PartialType(CreateResumeDto) {}
