import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroNotFoundComponent } from './hero-not-found/hero-not-found.component';

const heroRoutes: Routes = [
  { path: "",          component: HeroListComponent },
  { path: "not-found", component: HeroNotFoundComponent },
  { path: ":id",       component: HeroDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(heroRoutes) ],
  declarations: [],
  exports: [ RouterModule ]
})
export class HeroRoutingModule { }
