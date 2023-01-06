import { Module } from '@nestjs/common';
import { UsuarioController } from './Controllers/usuario.controller';

@Module({
  imports: [],
  controllers: [UsuarioController],
  providers: [],
})
export class AppModule {}
