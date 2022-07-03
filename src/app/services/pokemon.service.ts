import { Injectable } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon.interface';
import { Observable, of } from 'rxjs';
import { POKEMONS } from '../mock.pokemons';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  getPokemons(): Observable<Pokemon[]> {
    const pokemons = of(POKEMONS);
    return pokemons;
  }
}
