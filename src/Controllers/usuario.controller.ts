import { Body, Controller, Get, Post } from '@nestjs/common';
@Controller('/usuarios')
export class UsuarioController {
  @Post('/create')
  async criaUsuario(@Body() body: any) {
    console.log(body);
    return 'usuario cirado!';
  }

  @Get('/lista')
  async listaUsuario() {
    return { usuario: [] };
  }
}
