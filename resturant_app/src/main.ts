import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { provideRouter } from '@angular/router'; //configure routes
import { provideHttpClient } from '@angular/common/http';  //to make http requests
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), //to configure routes
    provideHttpClient()   //to make http requests
  ]
});