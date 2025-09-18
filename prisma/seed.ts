import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Inserir usuários
  await prisma.usuario.createMany({
    data: [
      {
        id: "204",
        nome: "Lukas Blomqvist",
        email: "lukas@email.com",
        senha: "lukasblomqvist123",
        nivelAcesso: "user"
      },
      { 
        id: "216",
        nome: "Talytha Lopes",
        email: "talytha@email.com",
        senha: "talythalopes123",
        nivelAcesso: "user"
      },
      {
        id: "193",
        nome: "Gualter Albino",
        email: "gualter@email.com",
        senha: "gualteralbino123",
        nivelAcesso: "admin"
      }
    ]
  });

  // Inserir salas
  await prisma.room.createMany({
    data: [
      {
        id: "303",
        nome: "Sala de Inovação",
        capacity: 3,
        about: "Sala de trabalho da equipe de inovação equipada com 3 (três) computadores, 6 (seis) telas e 1 (um) ar condicionado."
      },
      {
        id: "307",
        nome: "Sala de Reunião I",
        capacity: 8,
        about: "Sala de reuniões equipada com 1 (um) computador, 8 (oito) cadeiras, 1 (uma) mesa redonda, 1 (um) projetor e 1 (um) ar condicionado."
      }
    ]
  });

  // Inserir salas
  await prisma.reserva.createMany({
    data: [
      {
        id: "permanente",
        proposito: "Sala de trabalho da equipe de inovação - INDISPONÍVEL PARA RESERVA",
        dtInicio: "01-01-2025 00:00:00",
        dtFim: "01-01-2125 00:00:00",
        qtdPessoas: 1,
        userId: "193",
        roomId: "303" 
      },
      {
        id: "idQualquer27",
        proposito: "Apresentação TekDash",
        dtInicio: "18-09-2025 14:00:00",
        dtFim: "18-09-2025 17:15:00",
        qtdPessoas: 1,
        userId: "193",
        roomId: "303" 
      }
    ]
  });
  console.log("Banco de dados populado com sucesso!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
