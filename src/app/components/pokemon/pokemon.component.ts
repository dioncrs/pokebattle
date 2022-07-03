import { Component, OnInit, Input } from '@angular/core';

import { Pokemon } from 'src/app/interfaces/pokemon.interface';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  @Input() pokemon?: Pokemon;

  constructor() { }

  ngOnInit(): void {
  }

  getPokemonPercentHp(hp: number, hpMax: number){

    return (hp / hpMax) * 100
  }

  getPokemonClassColor(type: string){
    return 'type-grass';
  }

}
