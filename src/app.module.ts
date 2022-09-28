import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JogadoresController } from './jogadores/jogadores.controller';
import { JogadoresModule } from './jogadores/jogadores.module';
import { JogadoresService } from './jogadores/jogadores.service';

@Module({
  imports: [
    MongooseModule.forRoot(
      "mongodb+srv://admin:david504@cluster0.gveszop.mongodb.net/prod?retryWrites=true&w=majority",
    ),
    JogadoresModule,
  ],
  controllers: [JogadoresController],
  providers: [JogadoresService],
})
export class AppModule {}
