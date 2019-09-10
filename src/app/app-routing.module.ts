import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './modules/home/home.module#HomeModule',
  },
  {
    path: 'search',
    loadChildren: './modules/search/search.module#SearchModule',
  },
  {
    path: 'about-us',
    loadChildren: './modules/about-us/about-us.module#AboutUsModule',
  },
  {
    path: 'contact-us',
    loadChildren: './modules/contact-us/contact-us.module#ContactUsModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
