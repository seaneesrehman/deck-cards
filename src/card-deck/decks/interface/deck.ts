import config from "../../../config/config";
import { Card } from "./card.interface";

export class Deck {
    deckId: string;
    type: string;
    shuffled: boolean;
    remaining: number;
    cards:Card [];

    constructor(deckId, type, shuffled, remaining, cards) {
        this.deckId = deckId;
        this.type = type;
        this.shuffled = shuffled;
        this.remaining = remaining;
        this.cards = cards;
    }

    createDeckData(deck) {
        // this code can be optimized using recursion 
        for (const suit of config.suits) {
            for (const rank of config.ranks) {
                if (deck.type == 'FULL' || (deck.type == 'SHORT' && !(!isNaN(Number(rank)) && Number(rank) <= 6 && Number(rank) >= 2))) {
                    let card: Card = { value: rank, suit: suit, code: this.getCardCode(suit, rank) };
                    deck.cards.push(card);
                }
            }
        }
        deck.remaining = deck.cards.length;
        if(deck.shuffled){
            this.shuffleCard(deck);
        }
        return deck;
    }

    shuffleCard(deck){
        for(const[index,card]  of deck.cards.entries()){
            let j = Math.floor(Math.random() * index);
            let temp = card;
            deck.cards[index] = deck.cards[j];
             deck.cards[j] = temp;
        }
    }
    getCardCode(suit, rank) {
        if (isNaN(rank)) {
            return rank.charAt(0) + suit.charAt(0);
        } else {
            return rank + suit.charAt(0);
        }
    }
}
