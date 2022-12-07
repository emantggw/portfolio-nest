import {
  ArrayNotEmpty,
  IsArray,
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class UserInfoDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsOptional()
  middleName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsString()
  @IsNotEmpty()
  headerTitle: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsArray()
  @ArrayNotEmpty()
  phoneNumbers: string[];

  @IsDateString()
  @IsOptional()
  birthYear: Date;
}
