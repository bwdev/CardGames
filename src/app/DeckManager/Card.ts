import {Suit} from './Suit';

export class Card {
    private _suit:Suit;    
    get suit():Suit {
        return this._suit;
    }

    private _value:Number;  
    get value():Number {
        return this._value;
    }

    get display():string {
        return `${this.value} of ${this.suit}`;
    }

    constructor(suit:Suit, value:Number) {                
        this._suit = suit;
        this._value = value;
    }
}