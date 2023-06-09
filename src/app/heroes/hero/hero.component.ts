import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 40;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changedName(): void {
    this.name = 'Spiderman';
  }

  changedAge(): void {
    this.age = 25;
  }

  resetData(): void {
    this.name = 'ironman';
    this.age = 40;
  }
}
