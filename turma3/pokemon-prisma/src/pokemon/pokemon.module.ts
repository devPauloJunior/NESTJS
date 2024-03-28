import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { PokemonService } from "./pokemon.service";
import { PokemonController } from "./pokemon.controller";

@Module({
    controllers: [PokemonController],
    providers: [PokemonService],
    imports: [PrismaModule]
})
export class PokemonModule {}