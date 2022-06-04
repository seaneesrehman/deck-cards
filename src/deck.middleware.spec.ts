import { DeckMiddleware } from './deck.middleware';

describe('DeckMiddleware', () => {
  it('should be defined', () => {
    expect(new DeckMiddleware()).toBeDefined();
  });
});
