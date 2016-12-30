export class Hero {

  id: number;
  name: string = "";
  picture: string = "";

  constructor(id: number, name: string, picture: string) {
    this.id = id;
    this.name = name;
    this.picture = picture;
  }
}

export type Heroes = Hero[];
