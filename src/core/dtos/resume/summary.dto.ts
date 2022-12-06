import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UserSummaryDto {
  @IsString()
  @IsNotEmpty()
  summary: string;

  @IsString()
  @IsOptional()
  favoriteQuote: string;

  @IsString()
  @IsNotEmpty()
  headerTitle: string;
}
