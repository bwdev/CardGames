import { TestBed, async } from '@angular/core/testing';
import {Deck} from './Deck';
import {Card} from './Card';
import {Suit} from './Suit';

it('deck should have 52 cards', async(() => {
    let d = Deck.Generate();
    expect(d.length).toEqual(52);
  }));

it('shuffle should return 52 cards', async(() => {
  let d = Deck.Generate();
  let shuffled = Deck.Shuffle(d);
  expect(shuffled.length).toEqual(52);
}));

it('shuffled deck should contain 4 suits with 13 cards', async(() => {
  let d = Deck.Generate();
  let shuffled = Deck.Shuffle(d);
  
  var hearts = shuffled.filter((v, i, a) => {
    return v.suit === Suit.Hearts;
  });

  var spades = shuffled.filter((v,i,a) => {
    return v.suit === Suit.Spades;
  });

  var diamonds = shuffled.filter((v,i,a) => {
    return v.suit === Suit.Diamonds;
  });

  var clubs = shuffled.filter((v,i,a) => {
    return v.suit === Suit.Clubs;
  });

  expect(hearts.length).toEqual(13);
  expect(spades.length).toEqual(13);
  expect(diamonds.length).toEqual(13);
  expect(clubs.length).toEqual(13);
}));