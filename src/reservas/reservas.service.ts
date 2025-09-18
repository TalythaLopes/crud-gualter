import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; 
import { Reserva } from '@prisma/client';

@Injectable()
export class ReservasService {
  constructor(private prisma: PrismaService) {}

  async create(data: { proposito: string; qtdPessoas: number; dtInicio: string; dtFim: string; userId: string; roomId: string }): Promise<Reserva> {
    return this.prisma.reserva.create({ data });
  }

  async findAll(): Promise<Reserva[]> {
    return this.prisma.reserva.findMany();
  }

  async findOne(id: string): Promise<Reserva | null> {
    return this.prisma.reserva.findUnique({
      where: { id },
    });
  }

  async update(id: string, data: { proposito: string; qtdPessoas: number; dtInicio: string; dtFim: string; userId: string; roomId: string }): Promise<Reserva> {
    return this.prisma.reserva.update({
      where: { id },
      data,
    });
  }

  async remove(id: string): Promise<Reserva> {
    return this.prisma.reserva.delete({
      where: { id },
    });
  }
}
