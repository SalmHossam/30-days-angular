import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-stopwatch',
  imports: [CommonModule,FormsModule],
  templateUrl: './stopwatch.component.html',
  styleUrl: './stopwatch.component.scss'
})
export class StopwatchComponent {
  elapsedTime = 0;
  isRunning = false;
  intervalRef: any;

  startStop(){
  this.isRunning ? this.stop() : this.strat();
  }
  private strat(){
    if (!this.isRunning) {
      this.isRunning = true;
      this.intervalRef = setInterval(() => {
        this.elapsedTime+=1;
      }, 1000);
      console.log("Stopwatch started");
    }
  }
  private stop(){
    if (this.isRunning) {
      this.isRunning = false;
      clearInterval(this.intervalRef);
      console.log("Stopwatch stopped");
    }
  }
  reset(){
    this.isRunning = false;
    clearInterval(this.intervalRef);
    this.elapsedTime = 0;
    console.log("Stopwatch reset");
  }

}
