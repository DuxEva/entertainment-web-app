import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { Signup, SignupMsg } from '../../../models';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  signUpForm: FormGroup;
  isInputFocused: boolean = false;
  isPasswordFocused: boolean = false;
  isPassword2Focused: boolean = false;
  signupData!: Signup | SignupMsg;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private toastr: ToastrService
  ) {
    this.signUpForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required]],
      },
      { validators: this.passwordsMatchValidator }
    );
  }

  passwordsMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (password?.value !== confirmPassword?.value) {
      return { passwordsMismatch: true };
    }
    return null;
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      const formData = {
        ...this.signUpForm.value,
        firstName: 'Evariste',
        lastName: 'Dusingizimana',
      };

      this.authService.signUp(formData).subscribe({
        next: (data) => {
          this.signupData = data;
          this.toastr.success(data.message, 'Success');
          this.router.navigate(['/login']);
        },
        error: (err) => {
          if (err.status === 400 && err.error.message) {
            this.toastr.error(err.error.message, 'Error');
          } else {
            this.toastr.error(
              err.error.message || 'An error occurred, please try again',
              'Error'
            );
          }
        },
      });
    }
  }
}
