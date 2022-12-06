import {
  ArrayMinSize,
  ArrayNotEmpty,
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
export class SkillsDto {
  @IsArray()
  @ArrayNotEmpty()
  techSkills: string[];

  @IsArray()
  @ArrayNotEmpty()
  softSkills: string[];

  @IsArray()
  @ArrayNotEmpty()
  programmingLanguages: string[];

  @IsArray()
  @ArrayNotEmpty()
  naturalLanguages: string[];
}
