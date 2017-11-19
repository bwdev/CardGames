import {IGame} from './IGame';
import {Player} from './Player';
import { Deck } from '../DeckManager/Deck';
import {Card} from '../DeckManager/Card';

export class GoFish implements IGame {
    howManyCardsToDeal: Number = 7;
    _players: Player[] = [];
    _deck: Card[];

    get deck():Card[] {
        return this._deck;
    }

    get players():Player[] {
        return this._players;
    }

    constructor() {
        this._deck = Deck.Shuffle(Deck.Generate());
    }

    public beginGame(numberOfPlayers: Number){
        //let deck = Deck.Shuffle(Deck.Generate());
        for(var i = 0; i < numberOfPlayers; i++){            
            this._players.push(new Player(`Player ${i + 1}`));
            //console.log(this._players);
        }

        Deck.Deal(this.players, this, this._deck);
    }
}