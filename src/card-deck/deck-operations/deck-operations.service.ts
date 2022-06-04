import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDeckDTO } from '../decks/dto/create-deck.dto';
import { SuccessRes } from '../decks/interface/success-res.interface';
import { Deck } from '../decks/interface/deck';
import { v4 as uuidv4 } from 'uuid';



@Injectable()
export class DeckOperationsService {
    constructor(@InjectModel('DeckOperations') private readonly deckModel: Model<Deck>) { }

    createDeck(createDeckDTO: CreateDeckDTO) {
        return new Promise((resolve, reject) => {
            try{
                const newItem = new Deck(uuidv4(), createDeckDTO.type, createDeckDTO.shuffled, 0, []);
                const newDeck = new this.deckModel(newItem.createDeckData(newItem));
                newDeck.save().then(obj => {
                    const deckRes: SuccessRes = { deckId: obj.deckId, type: obj.type, shuffled: obj.shuffled, remaining: obj.remaining }
                    return resolve({
                        ...deckRes
                    })
                })
                    .catch(err => {
                        return reject({
                            statusCode: err.statusCode,
                            message: err.message
                        })
                    });
            }catch(err){
                return reject({
                    statusCode: 500,
                    message: err.message
                })
            }
            
        });
    }


    getDeck(deckId, count) {
        return new Promise((resolve, reject) => {
            this.deckModel.findOne({ deckId: deckId })
          .then((obj) => {
           const cards = count > 0 ? obj.cards.slice(0,count):obj.cards
            const deckRes: SuccessRes = { deckId: obj.deckId, type: obj.type, shuffled: obj.shuffled, remaining: obj.remaining - count, cards:cards }
            return resolve({
                ...deckRes
            })
            })
                .catch(err => {
                    return reject({
                        statusCode: err.statusCode,
                        message: err.message
                    })
                });
        });
    }


    drawFromDeck(id,count){

    }

     getNElementsofCards(cards,count) {
        return cards.slice(0,count);
      }
}
