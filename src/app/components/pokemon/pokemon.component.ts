import { Component, OnInit, Input } from '@angular/core';
import { Pokemon, Type } from 'src/app/interfaces/pokemon.interface';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  @Input() pokemon?: Pokemon;
  displayedColumns: string[] = ['name', 'power'];

  constructor() { }

  ngOnInit(): void {
  }

  public getPokemonPercentHp(hp: number, hpMax: number){
    return (hp / hpMax) * 100
  }

  public getPokemonClassColor(typeName: string): string{
    return `type-${typeName.toLowerCase()}`
    
  }

  public getPokemonImage(number: string){
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${number}.png`
  }

  public getEffect(effect?: string){
    return effect ? effect.substring(0, 10) : '';
  }
}
