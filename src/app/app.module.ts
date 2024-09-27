import { NgModule, isDevMode } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { TrendingsComponent } from './components/trendings/trendings.component';
import { HomeComponent } from './pages/home/home.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { appReducer } from './store/app-reducer';
import { AppEffects } from './store/app.effect';
import { MediaCardComponent } from './components/media-card/media-card.component';
import { MovieComponent } from './pages/movie/movie.component';
import { BookMarkComponent } from './pages/book-mark/book-mark.component';
import { TvSeriesComponent } from './pages/tv-series/tv-series.component';
import { SearchComponent } from './components/search/search.component';
import { CategoryWrapperComponent } from './components/category-wrapper/category-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TrendingsComponent,
    HomeComponent,
    MediaCardComponent,
    MovieComponent,
    BookMarkComponent,
    TvSeriesComponent,
    SearchComponent,
    CategoryWrapperComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      data: appReducer,
    }),
    EffectsModule.forRoot([AppEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
      connectInZone: true, // If set to true, the connection is established within the Angular zone
    }),
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
