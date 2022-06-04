import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { DeckOperationsService } from './deck-operations.service';

describe('DeckOperationsService', () => {
  let service: DeckOperationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeckOperationsService,{ provide: getModelToken('DeckOperations'), useValue: jest.fn() }],
    }).compile();

    service = module.get<DeckOperationsService>(DeckOperationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
