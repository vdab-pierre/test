import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-brol',
  standalone: true,
  imports: [FormsModule,
    NgIf,
    NgFor,
    UpperCasePipe,],
  templateUrl: './brol.component.html',
  styleUrl: './brol.component.css'
})
export class BrolComponent {
  heroes = HEROES;
  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
