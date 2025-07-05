import { Module } from '@nestjs/common';
import { PokemonsService } from './pokemons.service';
import { PokemonsController } from './pokemons.controller';
import { AppService } from 'src/app/app.service';
import { AppModule } from 'src/app/app.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports:[HttpModule],
  controllers: [PokemonsController],
  providers: [PokemonsService, AppService],
})
export class PokemonsModule {}
