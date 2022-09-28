import { Schema } from "mongoose"

export const JogadorSchema = new Schema({

    telefone: { type: String, unique: true },
    email: { type: String, unique: true },
    nome: { type: String, unique: true },
    ranking: String,
    posicaoRanking: Number,
    urlFotoJogador: String
}, {timestamps: true, collection: "Jogador"})