import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { RoomsService } from './rooms/rooms.service';
import { RoomsModule } from './rooms/rooms.module';
import { ReservasService } from './reservas/reservas.service';
import { ReservasModule } from './reservas/reservas.module';

@Module({
  imports: [UsersModule, RoomsModule, ReservasModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, UsersService, RoomsService, ReservasService],
})
export class AppModule {}
