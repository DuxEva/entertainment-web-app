// auth-guard.service.ts
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
import { AppState } from '../../models';
import { Store } from '@ngrx/store';
import * as appActions from '../../store/app.actions';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private route: Router,
    private store: Store<AppState>
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.auth.isLoggednIn()) {
      this.store.dispatch(appActions.isLoggedIn({ status: true }));
      return true;
    } else {
      this.route.navigate(['login']);
      return false;
    }
  }
}
