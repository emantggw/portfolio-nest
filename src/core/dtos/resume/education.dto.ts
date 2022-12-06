import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class EducationDto {
  @IsString()
  @IsNotEmpty()
  university: string;

  @IsString()
  @IsNotEmpty()
  graduateYear: string;

  @IsString()
  @IsNotEmpty()
  departement: string;

  @IsNumber()
  @IsNotEmpty()
  cgpa: number;
}
