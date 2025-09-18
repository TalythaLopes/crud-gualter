import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ReservasService } from './reservas.service';

@Controller('reservas')
export class ReservasController {
  constructor(private readonly reservaController: ReservasService) {}

  @Post()
  create(@Body() createReserva: { proposito: string; qtdPessoas: number; dtInicio: string; dtFim: string; userId: string; roomId: string }) {
    return this.reservaController.create(createReserva);
  }

  @Get()
  findAll() {
    return this.reservaController.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reservaController.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateReserva: { proposito: string; qtdPessoas: number; dtInicio: string; dtFim: string; userId: string; roomId: string }) {
    return this.reservaController.update(id, updateReserva);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reservaController.remove(id);
  }
}
