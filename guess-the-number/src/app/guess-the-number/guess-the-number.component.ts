import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-guess-the-number',
  imports: [CommonModule,FormsModule],
  templateUrl: './guess-the-number.component.html',
  styleUrl: './guess-the-number.component.scss'
})
export class GuessTheNumberComponent {
  secretNumber = this.generateRandomNumber();
  attempsLeft = 10;
  guessedNumber?: number;
  feadbackMessage = '';
  gameOver = false;


  private static readonly MAX_ATTEMPTS = 10;
  private static readonly MAX_Number = 100;

  private generateRandomNumber(): number {
    return Math.floor(Math.random() * GuessTheNumberComponent.MAX_Number) + 1;
    
  }
  

  public isValidGuess(guess?:number): boolean {
    return (guess !== undefined && guess > 0 && guess <= GuessTheNumberComponent.MAX_Number);

  }
submitGuess(): void {
  if (!this.isValidGuess(this.guessedNumber) || this.gameOver) {
    return;
  }
  this.attempsLeft--;
  this.evaluateGuess(this.guessedNumber!);

}
  private evaluateGuess(guess: number): void {
    if (guess === this.secretNumber) {
      this.endGame(true);
      
    } else if (this.attempsLeft === 0) {
      this.feadbackMessage = `Game Over! The correct number was ${this.secretNumber}.`;
     this.endGame(false);
    } else if (guess < this.secretNumber) {
      this.feadbackMessage = 'Too low! Try again.';
    } else {
      this.feadbackMessage = 'Too high! Try again.';
    }
  }
  private endGame(isWin: boolean): void {
    this.gameOver = true;
    if (isWin) {
      this.feadbackMessage =' You won the game!';
    } else {
      this.feadbackMessage = ' Better luck next time!';
    }
  }

  resetGame(): void {
    this.secretNumber = this.generateRandomNumber();
    this.attempsLeft = GuessTheNumberComponent.MAX_ATTEMPTS;
    this.guessedNumber = undefined;
    this.feadbackMessage = '';
    this.gameOver = false;
    console.log("New secret number (debug):", this.secretNumber);
  }
}
