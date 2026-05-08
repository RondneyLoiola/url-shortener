import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUrlDto {
    @IsNotEmpty()
    @IsString()
    url: string;
}