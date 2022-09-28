import { Injectable, Logger } from '@nestjs/common';
import { CriarJogadorDto } from './dto/jogador.dto';
import { Jogador } from './interface/jogador.interface';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';

@Injectable()
export class JogadoresService {

    private readonly logger = new Logger(JogadoresService.name);
    private jogadores: Jogador[] = [];

    constructor(@InjectConnection("prod") private readonly jogadorModel: Connection) {

    }

    async criarAtualizarJogador(criarJogadorDto: CriarJogadorDto): Promise<void> {

        this.criar(criarJogadorDto);
    }

    private async criar(criarJogadorDto : CriarJogadorDto): Promise<void> {


        /*
        const jogador: Jogador = {
            telefone,
            nome,
            email,
            ranking: "A",
            posicaoRanking: 1,
            urlFotoJogador: ""
        };
        */ 

        // const result = await this.jogadorModel.findOneAndUpdate({email: criarJogadorDto.email});
        // console.log(">> ")
        // console.log(result)
        // if(result) {
        //     return;
        // }

        // await this.jogadorModel.create(criarJogadorDto)
        // this.logger.log(`criaJogadorDto: ${JSON.stringify(criarJogadorDto)}`)
    }

    // public async getAll(): Promise<Jogador[]> {
        
    //     // return this.jogadorModel.find({});
    // }

    // public async getByEmail(email: string): Promise<Jogador> {
        
    //     // return await this.jogadorModel.findOne({email});
    // }
}
