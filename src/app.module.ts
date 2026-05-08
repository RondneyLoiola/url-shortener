import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UrlsModule } from './urls/urls.module';
import { MongooseModule } from '@nestjs/mongoose';
import 'dotenv/config';

const DATABASE = process.env.MONGODB_URI

@Module({
  imports: [MongooseModule.forRoot(DATABASE as string), UrlsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
