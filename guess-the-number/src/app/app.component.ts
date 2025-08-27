import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GuessTheNumberComponent } from "./guess-the-number/guess-the-number.component";

@Component({
  selector: 'app-root',
  imports: [GuessTheNumberComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'guess-the-number';
}
