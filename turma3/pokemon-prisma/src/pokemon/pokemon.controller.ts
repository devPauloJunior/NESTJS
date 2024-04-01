import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { PokemonService } from "./pokemon.service";
import { CreatePokemonDto } from "./dto/create-pokemon.dto";
import { UpdatePokemonDto } from "./dto/update-pokemon.dto";
import { create } from "domain";

@Controller('pokemon')
export class PokemonController {
    constructor(private readonly pokemonService: PokemonService){}

    @Post()
    async create(@Body() createPokemonDto: CreatePokemonDto) {
        return this.pokemonService.create(createPokemonDto)
    }

    @Get()
    async list() {
        return this.pokemonService.list()
    }

    @Get(':id')
    async listOne(@Param('id', ParseIntPipe) id: number) {
        return this.pokemonService.listOne(id)
    }

    @Put(':id')
    async update(@Body() updatePokemonDto: UpdatePokemonDto, @Param('id', ParseIntPipe) id: number) {
        return this.pokemonService.update(id, updatePokemonDto)
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        return this.pokemonService.delete(id)
    }
}

