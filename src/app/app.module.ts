import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

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
import { WatchedMovieComponent } from './global/components/watched-movie/watched-movie.component';
import { ToWatchMovieComponent } from './global/components/to-watch-movie/to-watch-movie.component';
import { WatchedComponent } from './global/components/watched/watched.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotificationTableComponent } from './global/components/notification-table/notification-table.component';
import { MovieProfileComponent } from './pages/movie-profile/movie-profile.component';

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
    WatchedMovieComponent,
    ToWatchMovieComponent,
    WatchedComponent,
    NotificationTableComponent,
    MovieProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
