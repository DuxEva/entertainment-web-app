import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngrx/store';
import { AppState } from '../../../models';
import * as appActions from '../../../store/app.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup;
  isInputFocused: boolean = false;
  isPasswordFocused: boolean = false;
  isLoader!: boolean;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private toastr: ToastrService,
    private store: Store<AppState>
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  onSubmit() {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.valid) {
      this.isLoader = true;
      this.authService.login(this.loginForm.value).subscribe({
        next: (data) => {
          this.toastr.success(data.message, 'Success');
          this.isLoader = false;
          this.authService.sendToken(data.token);
          this.store.dispatch(appActions.isLoggedIn({ status: true }));
          this.router.navigate(['/home']);
        },
        error: (err) => {
          this.isLoader = false;
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
