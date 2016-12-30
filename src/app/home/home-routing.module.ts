import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { HomeAboutComponent } from './home-about/home-about.component';
import { HomeContactComponent } from './home-contact/home-contact.component';

const homeRoutes: Routes = [
  { path: "home",         component: HomeComponent },
  { path: "home/about",   component: HomeAboutComponent },
  { path: "home/contact", component: HomeContactComponent },
  { path: 'home/**',      redirectTo: '' }
];

@NgModule({
  imports: [ RouterModule.forChild(homeRoutes) ],
  declarations: [],
  exports: [ RouterModule ]
})
export class HomeRoutingModule { }
