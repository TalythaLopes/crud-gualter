import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { RoomsService } from './rooms.service';

@Controller('rooms')
export class RoomsController {
constructor(private readonly roomsService: RoomsService) {}

  @Post()
  create(@Body() createRoom: { nome: string; capacity: number; about: string }) {
    return this.roomsService.create(createRoom);
  }

  @Get()
  findAll() {
    return this.roomsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roomsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateRoom: { nome: string; capacity: number; about: string }) {
    return this.roomsService.update(id, updateRoom);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roomsService.remove(id);
  }
}
