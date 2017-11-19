import {Card} from './Card';
import {Player} from '../GameManager/Player';
import {IGame} from '../GameManager/IGame';

export namespace Deck {    
    export function Shuffle(deck: Card[]): Card[]{
        var touchedItems = [];

        while(deck.length > 0){
            let randomIndex = Math.floor(Math.random() * deck.length);
            let removedItem = deck.splice(randomIndex,1);
            touchedItems.push(removedItem[0]);  
        }
        
        return touchedItems;
    }
    export function Generate(): Card[]{
        var deck:Card[] = [];                      

        for(let i = 1; i <= 4; i++){
            for (var v = 2; v < 15; v++) {
                deck.push(new Card(i, v));                
            }
        }
        
        return deck;
    }
    export function Deal(players: Player[], game: IGame, deck: Card[]) {
        for(var i = 0; i < game.howManyCardsToDeal; i++){
            players.forEach((v,i,a) => {
                v.addToHand(deck[0]);
                deck.shift();
            });
        }
    }
}