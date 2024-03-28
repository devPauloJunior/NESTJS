import { Module } from "@nestjs/common";

@Module({
    controllers: [PokemonController],
    providers: [PokemonService]
})
export class PokemonModule {}