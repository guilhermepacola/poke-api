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

  async listPokemonByName(name: string) {

     const getPokemonId = await axios.get(`${this.baseUrl}/pokemon/${name}`);
     const createPokemonInfo = {
      name: getPokemonId.data.forms[0].name,
      ability: getPokemonId.data.abilities[0].ability,
      ability_2:getPokemonId.data.abilities[1].ability,
      weight: getPokemonId.data.weight,
      height: getPokemonId.data.height

     }
     return createPokemonInfo;
  }
}
