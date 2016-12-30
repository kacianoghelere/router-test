import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeModule } from './home/home.module';

const appRoutes: Routes = [
  { path: "", component: WelcomeComponent },
  {
    path: 'hero',
    loadChildren: 'app/+hero/hero.module#HeroModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
