import { IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class CertificatesDto {
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsString()
  @IsNotEmpty()
  issuedBy: string;
  @IsDateString()
  @IsNotEmpty()
  issuedDate: Date;
}
