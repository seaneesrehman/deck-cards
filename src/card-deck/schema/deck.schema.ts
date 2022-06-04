import * as mongooes from 'mongoose';

export const DeckSchema = new mongooes.Schema({
    deckId:String,
    type:String,
    shuffled: Boolean,
    remaining:Number,
    cards:[]

})


