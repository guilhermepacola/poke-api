import { Injectable } from '@nestjs/common';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import axios from 'axios'

@Injectable()
export class PokemonsService {
private readonly baseUrl = 'https://pokeapi.co/api/v2'

 async listPokemons() {
    const pokemonsList = await axios.get(`${this.baseUrl}/pokemon`);
    return pokemonsList.data;
  }

   async listPokemonById(id: string) {
     const getPokemonId = await axios.get(`${this.baseUrl}/pokemon/${id}`);
     const objects = {
      name: getPokemonId.data.forms[0].name,
      abilities: getPokemonId.data.abilities[0].ability
     }
     return objects;
     

  }

}
