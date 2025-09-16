import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormioModule } from '@formio/angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, FormioModule],
  templateUrl: './app.component.html'
})
export class AppComponent {
 
  forms = [
    { name: 'Money Transfer', url: 'https://zpunmivannqcixs.form.io/moneytransfer' },
    { name: 'Login', url: 'https://zpunmivannqcixs.form.io/login' }
  ];

 selectedFormUrl: string | null = null;
 
  options: any = {};
onFormChange() {
  console.log("Currently selected form URL:", this.selectedFormUrl);
}

  onSubmit(submission: any) {
    console.log('Form Submitted:', submission);
    alert('✅ Submission saved!');
  }
}
