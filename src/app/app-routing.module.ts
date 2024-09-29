import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieComponent } from './pages/movie/movie.component';
import { BookMarkComponent } from './pages/book-mark/book-mark.component';
import { TvSeriesComponent } from './pages/tv-series/tv-series.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { AuthGuard } from './services/guard/auth-guard.service';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'movies', component: MovieComponent, canActivate: [AuthGuard] },
  { path: 'bookmark', component: BookMarkComponent, canActivate: [AuthGuard] },
  { path: 'tv-series', component: TvSeriesComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
