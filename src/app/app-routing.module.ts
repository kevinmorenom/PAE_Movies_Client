import { NgModule } from '@angular/core';
import { Routes, RouterModule,ExtraOptions } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { Page404Component } from './pages/page404/page404.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { MovieProfileComponent } from './pages/movie-profile/movie-profile.component';
import {AuthGuard} from './global/guards/auth/auth.guard';
import {UnAuthGuard} from './global/guards/unAuth/un-auth.guard';

const routes: Routes = [
  { path:'', redirectTo:'register', pathMatch:'full'},
  { path:'register', component: RegisterComponent, canActivate:[UnAuthGuard]},
  { path:'home', component: HomeComponent, canActivate:[AuthGuard]},
  { path:'profile', component: MyProfileComponent, canActivate:[AuthGuard]},
  { path:'movie/:id', component: MovieProfileComponent, canActivate:[AuthGuard]},
  { path:'**', component:Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
