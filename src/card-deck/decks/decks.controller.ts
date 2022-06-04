import { Body, Controller, Get, Param, ParseIntPipe, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { isNotEmpty } from 'class-validator';
import { DeckOperationsService } from '../deck-operations/deck-operations.service';
import { CreateDeckDTO } from './dto/create-deck.dto';


@Controller('decks')
export class DecksController {
    constructor(private readonly deckService:DeckOperationsService){}

    @Post()
    async createDeck(@Body() createDeckDto:CreateDeckDTO):Promise<any>{
        return await this.deckService.createDeck(createDeckDto);
    }

    @Get(':deckId')
    async getDeck(@Param('deckId',ParseUUIDPipe) deckId){
        let count = 0;
        return await this.deckService.getDeck(deckId, count = 0);
    }

    @Get(':deckId/:count')
    async drawDeck(@Param('deckId',ParseUUIDPipe) deckId,@Param('count',ParseIntPipe) count){
        return await this.deckService.getDeck(deckId, count);
    }
}
