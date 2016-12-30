import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroRoutingModule } from './hero-routing.module';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroNotFoundComponent } from './hero-not-found/hero-not-found.component';
import { HeroService } from './hero.service';

@NgModule({
  imports: [
    CommonModule,
    HeroRoutingModule
  ],
  declarations: [
    HeroDetailComponent,
    HeroListComponent,
    HeroNotFoundComponent
  ],
  providers: [ HeroService ]
})
export class HeroModule { }
