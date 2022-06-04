import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { DeckOperationsService } from '../deck-operations/deck-operations.service';
import { DecksController } from './decks.controller';
import { CreateDeckDTO } from './dto/create-deck.dto';
import { Deck } from './interface/deck';

describe('DecksController', () => {
  let controller: DecksController;
  let deckOperationService;
  let cards ={
    deckId: "123e4567-e89b-12d3-a456-426614174000",
     remaining: 52, 
     shuffled: false,
      type: "FULL",
    cards:[
      {
          "value": "Ace",
          "suit": "Spades",
          "code": "AS"
      },
      {
          "value": "2",
          "suit": "Spades",
          "code": "2S"
      },
      {
          "value": "3",
          "suit": "Spades",
          "code": "3S"
      },
      {
          "value": "4",
          "suit": "Spades",
          "code": "4S"
      },
      {
          "value": "5",
          "suit": "Spades",
          "code": "5S"
      },
      {
          "value": "6",
          "suit": "Spades",
          "code": "6S"
      },
      {
          "value": "7",
          "suit": "Spades",
          "code": "7S"
      },
      {
          "value": "8",
          "suit": "Spades",
          "code": "8S"
      },
      {
          "value": "9",
          "suit": "Spades",
          "code": "9S"
      },
      {
          "value": "10",
          "suit": "Spades",
          "code": "10S"
      },
      {
          "value": "Jack",
          "suit": "Spades",
          "code": "JS"
      },
      {
          "value": "Queen",
          "suit": "Spades",
          "code": "QS"
      },
      {
          "value": "King",
          "suit": "Spades",
          "code": "KS"
      },
      {
          "value": "Ace",
          "suit": "Diamonds",
          "code": "AD"
      },
      {
          "value": "2",
          "suit": "Diamonds",
          "code": "2D"
      },
      {
          "value": "3",
          "suit": "Diamonds",
          "code": "3D"
      },
      {
          "value": "4",
          "suit": "Diamonds",
          "code": "4D"
      },
      {
          "value": "5",
          "suit": "Diamonds",
          "code": "5D"
      },
      {
          "value": "6",
          "suit": "Diamonds",
          "code": "6D"
      },
      {
          "value": "7",
          "suit": "Diamonds",
          "code": "7D"
      },
      {
          "value": "8",
          "suit": "Diamonds",
          "code": "8D"
      },
      {
          "value": "9",
          "suit": "Diamonds",
          "code": "9D"
      },
      {
          "value": "10",
          "suit": "Diamonds",
          "code": "10D"
      },
      {
          "value": "Jack",
          "suit": "Diamonds",
          "code": "JD"
      },
      {
          "value": "Queen",
          "suit": "Diamonds",
          "code": "QD"
      },
      {
          "value": "King",
          "suit": "Diamonds",
          "code": "KD"
      },
      {
          "value": "Ace",
          "suit": "Club",
          "code": "AC"
      },
      {
          "value": "2",
          "suit": "Club",
          "code": "2C"
      },
      {
          "value": "3",
          "suit": "Club",
          "code": "3C"
      },
      {
          "value": "4",
          "suit": "Club",
          "code": "4C"
      },
      {
          "value": "5",
          "suit": "Club",
          "code": "5C"
      },
      {
          "value": "6",
          "suit": "Club",
          "code": "6C"
      },
      {
          "value": "7",
          "suit": "Club",
          "code": "7C"
      },
      {
          "value": "8",
          "suit": "Club",
          "code": "8C"
      },
      {
          "value": "9",
          "suit": "Club",
          "code": "9C"
      },
      {
          "value": "10",
          "suit": "Club",
          "code": "10C"
      },
      {
          "value": "Jack",
          "suit": "Club",
          "code": "JC"
      },
      {
          "value": "Queen",
          "suit": "Club",
          "code": "QC"
      },
      {
          "value": "King",
          "suit": "Club",
          "code": "KC"
      },
      {
          "value": "Ace",
          "suit": "Heart",
          "code": "AH"
      },
      {
          "value": "2",
          "suit": "Heart",
          "code": "2H"
      },
      {
          "value": "3",
          "suit": "Heart",
          "code": "3H"
      },
      {
          "value": "4",
          "suit": "Heart",
          "code": "4H"
      },
      {
          "value": "5",
          "suit": "Heart",
          "code": "5H"
      },
      {
          "value": "6",
          "suit": "Heart",
          "code": "6H"
      },
      {
          "value": "7",
          "suit": "Heart",
          "code": "7H"
      },
      {
          "value": "8",
          "suit": "Heart",
          "code": "8H"
      },
      {
          "value": "9",
          "suit": "Heart",
          "code": "9H"
      },
      {
          "value": "10",
          "suit": "Heart",
          "code": "10H"
      },
      {
          "value": "Jack",
          "suit": "Heart",
          "code": "JH"
      },
      {
          "value": "Queen",
          "suit": "Heart",
          "code": "QH"
      },
      {
          "value": "King",
          "suit": "Heart",
          "code": "KH"
      }
  ]
  } 
  const mockDeckRepository = () => ({
    createMockDeck: jest.fn(),
  });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DecksController],
      providers: [DeckOperationsService,
        { provide: getModelToken('DeckOperations'), useValue: jest.fn(),useFactory:mockDeckRepository },
      ],
    }).compile();

    controller = module.get<DecksController>(DecksController);
    deckOperationService = module.get<DeckOperationsService>(DeckOperationsService);

  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('decks FULL type', () => {
    it('It should create a deck with 52 cards', async () => {  
      const deck = new Deck("123e4567-e89b-12d3-a456-426614174000",'FULL',false,0,[]);
      const deckCards = deck.createDeckData(deck);
      expect(deckCards).toEqual(cards);

    });
  });

});
