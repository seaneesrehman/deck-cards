import { Card } from "./card.interface";

export interface SuccessRes {
    deckId:string;
    type?:string;
    shuffled?:boolean;
    remaining?:number;
    cards?:Card[];
}