import { TestBed } from '@angular/core/testing';

import { PokemonExternService } from './pokemon-extern.service';

describe('PokemonExternService', () => {
  let service: PokemonExternService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonExternService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
