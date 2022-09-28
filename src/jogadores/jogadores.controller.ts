import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CriarJogadorDto } from './dto/jogador.dto';
import { JogadoresService } from './jogadores.service';

@Controller('api/v1/jogadores')
export class JogadoresController {

    constructor(private readonly jogadoresService: JogadoresService) {
        
    }

    @Post()
    async criarAtualizarJogador(@Body() criarJogadorDto: CriarJogadorDto) {

        await this.jogadoresService.criarAtualizarJogador(criarJogadorDto);
    }

    //@Get()
    // async getAll(@Query("email") email: string): Promise<string> {

    //     if(email) {
    //         // return JSON.stringify(await this.jogadoresService.getByEmail(email))
    //     }

    //     // return JSON.stringify(await this.jogadoresService.getAll());
    // }
}
