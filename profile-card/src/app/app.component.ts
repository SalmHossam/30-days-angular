import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'profile-card';
  name: string = 'Salma Hossam';
  age: number = 23;
  location: string = 'Cairo, Egypt';
  description: string = 'Software Engineer';
}
