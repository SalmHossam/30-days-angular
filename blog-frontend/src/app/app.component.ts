import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlogComponentComponent } from "./blog-component/blog-component.component";
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [HttpClientModule, BlogComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'blog-frontend';
}
