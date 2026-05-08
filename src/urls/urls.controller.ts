import { Body, Controller, Get, Param, Post, Redirect, ValidationPipe } from '@nestjs/common';
import { UrlsService } from './urls.service';
import { CreateUrlDto } from './dto/create-url.dto';

@Controller()
export class UrlsController {
    constructor(private readonly urlsService: UrlsService) {}

    @Post('shorten')
    async shortenUrl(@Body(new ValidationPipe()) createUrlDto: CreateUrlDto) {
        const result = await this.urlsService.createShortUrl(createUrlDto.url);
        
        return {
            originalUrl: result.originalUrl,
            shortUrl: `http://localhost:3000/${result.shortCode}`,
            shortCode: result.shortCode,
        };
    }
    
    @Get(':shortCode')
    @Redirect()
    async redirect(@Param('shortCode') shortCode: string) {
        const originalUrl = await this.urlsService.getOriginalUrl(shortCode);
        return { url: originalUrl };
    }

    @Get('stats/:shortCode')
    async getStats(@Param('shortCode') shortCode: string) {
        return this.urlsService.getStats(shortCode)
    }
}
