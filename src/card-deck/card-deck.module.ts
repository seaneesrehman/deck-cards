import { MiddlewareConsumer, Module } from '@nestjs/common';
import { DecksController } from './decks/decks.controller';
import { DeckOperationsService } from './deck-operations/deck-operations.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DeckSchema } from './schema/deck.schema';
import { DeckMiddleware } from 'src/deck.middleware';

@Module({
  imports:[MongooseModule.forFeature([{name:"DeckOperations", schema:DeckSchema}])],
  controllers: [DecksController],
  providers: [DeckOperationsService]
})
export class CardDeckModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
     .apply(DeckMiddleware)
     .forRoutes(DecksController);
    }
}
