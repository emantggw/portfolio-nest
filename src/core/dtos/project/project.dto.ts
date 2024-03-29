import { PartialType } from '@nestjs/mapped-types';
import {
  ArrayNotEmpty,
  IsArray,
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateProjectDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  subTitle: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  type: string;

  @IsArray()
  @ArrayNotEmpty()
  tools: string[];

  @IsArray()
  @ArrayNotEmpty()
  @IsOptional()
  screenShots: string[];

  @IsString()
  @IsOptional()
  link: string;

  @IsDateString()
  @IsNotEmpty()
  projectCreatedAt: Date;
}
export class UpdateProjectDto extends PartialType(CreateProjectDto) {}
