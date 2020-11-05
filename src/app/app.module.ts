import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './global/components/navbar/navbar.component';
import { FooterComponent } from './global/components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterModalComponent } from './global/components/register-modal/register-modal.component';
import { HomeComponent } from './pages/home/home.component';
import { Page404Component } from './pages/page404/page404.component';
import { MovieCardComponent } from './global/components/movie-card/movie-card.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { ProfileInfoComponent } from './global/components/profile-info/profile-info.component';
import { TowatchComponent } from './global/components/towatch/towatch.component';
import { ViewedComponent } from './global/components/viewed/viewed.component';
import { WatchedMovieComponent } from './global/components/watched-movie/watched-movie.component';
import { ToWatchMovieComponent } from './global/components/to-watch-movie/to-watch-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    RegisterModalComponent,
    HomeComponent,
    Page404Component,
    MovieCardComponent,
    MyProfileComponent,
    ProfileInfoComponent,
    TowatchComponent,
    ViewedComponent,
    WatchedMovieComponent,
    ToWatchMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
