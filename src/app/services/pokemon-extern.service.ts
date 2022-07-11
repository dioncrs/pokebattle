import { Injectable } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon.interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonExternService {

  apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor() { }

  getPokemon(id: number): Observable<Pokemon> {
    const path = '/' + id;
    return pokemons;
  }
}
