import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { CreateProjectDto } from '../project/project.dto';
import { CreateResumeDto } from '../resume/resume.dto';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @IsNotEmpty()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateResumeDto)
  resume: CreateResumeDto;

  @IsArray()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateProjectDto)
  projects: CreateProjectDto[];
}
export class UpdateUserDto extends PartialType(CreateUserDto) {}
