import { TestBed, async } from '@angular/core/testing';
import {GoFish} from './GoFish';

it('GoFish begin game should create players', async(() => {
    let game = new GoFish();
    game.beginGame(2);

    //console.log(game._players);
    expect(game._players.length).toEqual(2);
  }));