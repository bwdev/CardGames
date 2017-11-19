import {Player} from './Player';

export interface IGame {
    howManyCardsToDeal: Number;
    players: Player[];

    beginGame(numberOfPlayers: Number);
}