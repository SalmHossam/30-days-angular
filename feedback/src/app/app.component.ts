import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { FeedbackFormComponent } from "./feedback-form/feedback-form.component";

@Component({
  selector: 'app-root',
  imports: [FeedbackFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'feedback';
}
