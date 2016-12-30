import { Component, OnInit } from '@angular/core';

import { Hero, Heroes } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  heroes: Heroes = [];

  constructor(private service: HeroService) { }

  ngOnInit() {
    this.heroes = this.service.heroes;
  }
}
