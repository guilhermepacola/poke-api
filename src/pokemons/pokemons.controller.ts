import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PokemonsService } from './pokemons.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { AppService } from 'src/app/app.service';

@Controller('pokemon')
export class PokemonsController {
  constructor(

    private readonly pokemonsService: PokemonsService, 
    private readonly appService: AppService){}

  @Get()
  async listPokemons() {
    return await this.pokemonsService.listPokemons();
  
  }

  @Post()
 async  listPokemonById(@Body() {id}) {
    return await this.pokemonsService.listPokemonById(id);
  }

}

