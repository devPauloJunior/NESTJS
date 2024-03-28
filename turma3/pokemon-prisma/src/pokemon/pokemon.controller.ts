import { Body, Controller, Post } from "@nestjs/common";

@Controller('pokemon')
export class PokemonController {
    constructor(private readonly pokemonService: PokemonService)

    @Post()
    create(@Body createPokemonDto: CreatePokemonDto) {
        return this.pokemonService.create(createPokemonDto)
    }
}