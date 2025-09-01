import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-feedback-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss']
})
export class FeedbackFormComponent {
  feedback = {
    name: '',
    email: '',
    message: ''
  };
  submitted = false;

  onSubmit(form: any) {
    if (!form.valid) return;
    this.submitted = true;
    console.log('Feedback submitted:', this.feedback);
  }
}
