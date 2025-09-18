import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUser: { nome: string; email: string; senha: string; nivelAcesso: string }) {
    return this.usersService.create(createUser);
  }
}
