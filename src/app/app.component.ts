import { Component } from '@angular/core';
import {GoFish} from './GameManager/GoFish'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  game = new GoFish(); //TODO inject this

  constructor() {
    
  }
}
