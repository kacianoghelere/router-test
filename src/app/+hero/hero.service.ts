import { Injectable } from '@angular/core';

import { Hero, Heroes } from './hero';

@Injectable()
export class HeroService {

  heroes: Heroes = [
    {
      id: 1,
      name: "Batman",
      picture: "http://images.clipartbro.com/25/-25589.jpeg"
    },
    {
      id: 2,
      name: "Iron-Man",
      picture: "https://cdn4.iconfinder.com/data/icons/superheroes-and-supervillains/128/Ironman.png"
    },
    {
      id: 3,
      name: "Flash",
      picture: "http://68.media.tumblr.com/avatar_f5e3a4dda3af_128.png"
    },
    {
      id: 4,
      name: "Thor",
      picture: "https://image.freepik.com/free-icon/thor_318-101780.png"
    },
    {
      id: 5,
      name: "Aquaman",
      picture: "https://cdn4.iconfinder.com/data/icons/superhero/400/aquaman.png"
    },
    {
      id: 6,
      name: "Black Panther",
      picture: "https://s-media-cache-ak0.pinimg.com/736x/4d/07/7f/4d077f1c5336a988c6cc6b27d89d295f.jpg"
    }
  ];

  constructor() { }

  getHero(id: number) {
    return this.heroes.filter((hero) => { return hero.id == id; })[0];
  }
}
