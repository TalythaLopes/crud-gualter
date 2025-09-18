import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; 
import { Usuario } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data: { nome: string; email: string; senha: string; nivelAcesso: string }): Promise<Usuario> {
    return this.prisma.usuario.create({
      data,
    });
  }
}
