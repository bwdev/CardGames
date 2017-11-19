import {Card} from '../DeckManager/Card';

export class Player {
    constructor(name: string) {
        this._name = name;    
    }
    
    private _name : string;
    public get name() : string {
        return this._name;
    }

    private _hand : Card[] = [];
    public get hand(): Card[]{
        return this._hand;
    }

    public addToHand(card: Card){
        this._hand.push(card);
    }

    public removeFromHand(card: Card){
        
    }
}