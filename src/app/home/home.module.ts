import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeService } from './home.service';
import { HomeComponent } from './home.component';
import { HomeContactComponent } from './home-contact/home-contact.component';
import { HomeAboutComponent } from './home-about/home-about.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeAboutComponent,
    HomeContactComponent,
    HomeComponent,
    HomeContactComponent,
    HomeAboutComponent
  ],
  providers: [ HomeService ],
  exports: [
    HomeAboutComponent,
    HomeContactComponent,
    HomeComponent
  ]
})
export class HomeModule { }
