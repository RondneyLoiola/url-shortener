import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { nanoid } from 'nanoid';
import { Url } from './schemas/url.schema';

@Injectable()
export class UrlsService {
    constructor(@InjectModel(Url.name) private urlModel: Model<Url>) {}

    async createShortUrl(originalUrl: string): Promise<Url> {
        // Generate short code with 7 random characters
        const shortCode = nanoid(7);

        const newUrl = new this.urlModel({
            originalUrl,
            shortCode
        })

        return newUrl.save()
    }

    async getOriginalUrl(shortCode: string): Promise<string> {
        const url = await this.urlModel.findOne({ shortCode });

        if(!url) {
            throw new NotFoundException('URL not found');
        }

        // Increment click count
        url.clicks += 1;
        await url.save();

        return url.originalUrl
    }

    async getStats(shortCode: string): Promise<Url> {
        const url = await this.urlModel.findOne({ shortCode });

        if(!url) {
            throw new NotFoundException('Url not found');
        }

        return url;
    }
}
