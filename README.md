# Booker API
API RESTful desenvolvida como parte do processo seletivo para o Setor de Inovação da Tek-System. O projeto visa gerenciar **usuários**, **salas de reunião** e **reservas**, com foco na **validação de conflitos**, **regras de permissão** e **controle de acesso via JWT**.
> [Documento com todas as instruções do desafio.](https://www.notion.so/Proc-Seletivo-Setor-de-Inova-o-Etapa-2-de-3-21e8c3ad88a980079523e1253ae04420)

## Tecnolohias e Pré-requisitos
- [Node.js (vLTS)](https://nodejs.org/)
- [NestJS](https://nestjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [SQLite](https://www.sqlite.org/)

## Instalação
```bash
# Clone o repositório
git clone https://github.com/TalythaLopes/crud-gualter.git

# Acesse a pasta
cd crud-gualter

# Instale as dependências
npm install

# Rode as migrations
npx prisma generate

# Inicie o servidor
npm run start
```
> O servidor será iniciado em `http://localhost:3000`

## Checklist de entregas do projeto
✅ Modelo de dados no SQLite

❌ Autenticação com JWT	

❌ Hash de senha com bcrypt	

❌ Validação de conflito de horários

✅ Criação/listagem de salas		

✅ Criação de reservas	

❌ Filtros por data ou id	

❌ Regras por tipo de usuário	

❌ Restrição de exclusão de sala com reservas futuras

❌ Tratamento correto de erros	

✅ Não permite duas salas com mesmo nome

## Endpoints Implementados

| Método | Rota           | Descrição                      |
|--------|----------------|-------------------------------|
| `POST` | `/users`     | Registra um novo usuário no sistema. |
| `POST` | `/rooms`        | Criação de uma nova sala.      |
| `GET`  | `/rooms`        | Listagem de todas as salas.    |
| `GET`  | `/rooms/:id`    | Busca sala por id.    |
| `PUT`  | `/rooms/:id`    | Atualização de informações de uma sala existente. |
| `DELETE` | `/rooms/:id`  | Exclusão de uma sala.          |
| `POST` | `/reservas`      | Cria uma nova reserva, vinculando um usuário e uma sala. |
| `GET`  | `/reservas`      | Listagem de todas as reservas. |
| `DELETE` | `/reservas/:id` | Cancela uma reserva específica. |

Exemplos:
```bash
# Reserva
{
    "proposito": "Apresentação TekDash",
    "qtdPessoas": 5,
    "dtInicio": "18-09-2025 14:00:00",
    "dtFim": "18-09-2025 17:15:00",
    "userId": "193",
    "roomId": "303"
}

# Sala
{
    "nome": "Sala 101",
    "capacity": 100,
    "about": "Sala equipada com sistema de som e projetor."
}

# Usuário
{
    "nome": "Adam Carlsen",
    "email": "adam@email.com",
    "senha": "adamCarlsen123",
    "nivelAcesso": "user"
}
```

## Autocrítica
Durante o desenvolvimento deste projeto, percebi que meu foco foi desproporcionalmente voltado para a parte de **modelagem e preenchimento do banco de dados**. Dediquei bastante tempo para garantir que as tabelas e os dados estivessem corretamente estruturados, mas isso acabou consumindo mais tempo do que o ideal. Esse tempo seria melhor aproveitado na implementação das **regras de negócio** e, especialmente, na **autenticação** (JWT), que são partes cruciais para o funcionamento seguro e eficiente da aplicação.

Uma das principais dificuldades que enfrentei foi a **rapidez no desenvolvimento**. À medida que fui me aprofundando no código, percebi que minha falta de experiência e maturidade no processo de desenvolvimento fez com que algumas tarefas simples tomassem mais tempo do que o esperado. Isso evidenciou a necessidade de adquirir mais **experiência prática**, especialmente em projetos mais completos como este.

Outro ponto de destaque é o uso de **NestJS** e **Prisma**, que não eram obrigatórios, mas que definitivamente agregaram valor ao projeto. O NestJS ajudou a organizar melhor a estrutura do código mesmo em um estágio inicial. O **Prisma** facilitou a interação com o banco de dados, tornando a parte de migração e manipulação de dados mais intuitiva.
