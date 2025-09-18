import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; 
import { Room } from '@prisma/client';

@Injectable()
export class RoomsService {
  constructor(private prisma: PrismaService) {}

  async create(data: { nome: string; capacity: number; about: string }): Promise<Room> {
    return this.prisma.room.create({
      data,
    });
  }

  async findAll(): Promise<Room[]> {
    return this.prisma.room.findMany();
  }

  async findOne(id: string): Promise<Room | null> {
    return this.prisma.room.findUnique({
      where: { id },
    });
  }

  async update(id: string, data: { nome: string; capacity: number; about: string }): Promise<Room> {
    return this.prisma.room.update({
      where: { id },
      data,
    });
  }

  async remove(id: string): Promise<Room> {
    return this.prisma.room.delete({
      where: { id },
    });
  }
}
