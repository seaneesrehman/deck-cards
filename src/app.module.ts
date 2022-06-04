import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CardDeckModule } from './card-deck/card-deck.module';
import config from './config/config';

@Module({
  imports: [MongooseModule.forRoot(config.mongoURI), CardDeckModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
