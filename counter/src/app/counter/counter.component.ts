import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-counter',
  imports: [FormsModule,CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  counter = 0;
  increment() {
    this.counter++;
  }
  decrement() {
    if (this.counter > 0) {
      this.counter--;
    }
  }
  getCounterStatus() {
    if(this.counter === 0) {
      return 'zero';
    }
    else if(this.counter > 0) {
      return 'positive';
    } else {
      return 'negative';
    }
  }


}
