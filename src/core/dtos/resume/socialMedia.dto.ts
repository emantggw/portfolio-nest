import { IsNotEmpty, IsString } from "class-validator";

export class SocialMediaDto{
    @IsNotEmpty()
    @IsString()
    platform: string;
    @IsNotEmpty()
    @IsString()
    link: string;
}