import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TicTacToeComponent } from "./tic-tac-toe/tic-tac-toe.component";

@Component({
  selector: 'app-root',
  imports: [ TicTacToeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tic-tca-toe';
}
