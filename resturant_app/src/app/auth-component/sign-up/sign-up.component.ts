import { Component } from '@angular/core';
import { AuthService } from '../../auth-services/auth-service/auth.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  signupForm: FormGroup;
  submitted = false;
  serverError: string | null = null;

  constructor(private service: AuthService, private fb: FormBuilder, private router: Router) {
    this.signupForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/^(?=.*[A-Z])(?=.*\d).+$/) // at least 1 uppercase & 1 number
        ]
      ]
    });
  }

  get f() {
    return this.signupForm.controls;
  }

  register() {
    this.submitted = true;
    this.serverError = null;

    if (this.signupForm.invalid) {
      return; // stop here if form is invalid
    }

    this.service.signup(this.signupForm.value).subscribe({
      next: (res) => {
        if (res.status === 201) {
          console.log('User created successfully!', res.body);
        }
        this.router.navigate(['/landing']);
      },
      error: (err) => {
        console.error('Error during signup', err);
        this.serverError = err.error?.message || 'Signup failed. Please try again.';
      }
    });
  }
}
