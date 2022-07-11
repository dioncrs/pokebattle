import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pokemon } from 'src/app/interfaces/pokemon.interface';


@Component({
  selector: 'app-pokemon-edit',
  templateUrl: './pokemon-edit.component.html',
  styleUrls: ['./pokemon-edit.component.css']
})
export class PokemonEditComponent implements OnInit {
  public createForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      person: ['', Validators.required]
    });
   }

  ngOnInit(): void {
  }

  public onCreate(pokemon: Pokemon) {
    // this.api
    //   .CreatePokemon(pokemon)
    //   .then((event) => {
    //     console.log('item created!');
    //     this.createForm.reset();
    //   })
    //   .catch((e) => {
    //     console.log('error creating pokemon...', e);
    //   });
  }

}
