import { IsString, IsUrl } from "class-validator";

export class GenerateUrlDto {
    @IsString()
    @IsUrl()
    url: string;
}