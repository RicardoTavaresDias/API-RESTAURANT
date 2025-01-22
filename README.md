
<p align="center">
  <img alt="Logo - Rocketseat" src="./github/logo.png" width="200px" />
</p>

<h1 align="center"> API Sistema de Restaurante </h1>
<h3> Sobre:</h3>
<p align="center">
API Sistema de Restaurante, será vinculado um número da mesa, aonde cliente realizará pedidos dos pratos cadastrados no sistema, sendo realizado abertura da mesa para pedidos, enquanto a mesa estiver aberto, estará ocupada para cadastramento de pedido dos pratos até o fechamento da conta, aonde será calculado total dos pedidos da mesa, no sistema vai informar se a mesa esta ocupada ou disponivel, dispobilizado para próximo cliente para consumo, nessa API vai realizar todo esse controle de um restaurante 
</p>


## Tecnologias ##

- TypeScript
- NodeJS
- SQLite
- Framework Zod
- Framework Express
- Framework knex


## Criar Ticket ##
<i>Cria um novo ticket de suporte.<i><br><br>

**Método:** POST

**URL:** `/tickets`

**Dados:**

- `equipment` (string, obrigatório): Nome do equipamento (exemplo: computador)
- `description` (string, obrigatório): Descrição do problema.
- `user_name` (string, obrigatório): nome do usuário que está criando o ticket.<br><br>


## Obter Tickets<br>
**Método:** GET

**URL:** `/tickets`

**Descrição:** Obtém uma lista de todos os tickets de suporte.

**Parâmetros de Consulta (Query Parameters)**:

- `status` (string, opcional): Filtra os tickets pelo status ("open" ou "closed").<br><br>

## Atualizar Ticket<br>
**Método:** PUT

**URL:** `/tickets/:id`

**Descrição:** Atualiza as informações de um ticket específico.

**Parâmetros de Rota:**

- `id` (UUID, obrigatório): ID do ticket.

**Parâmetros no Corpo (JSON):**

- `equipment` (string, obrigatório): Nome do equipamento (exemplo: computador)
- `description` (string, obrigatório): Descrição do problema.
- `user_name` não altera.<br><br>

## Fechar Ticket<br>
**Método:** PATCH

**URL:** `/tickets/:id/status`

**Descrição:** Atualiza as informações de um ticket específico.

**Parâmetros de Rota:**

- `id` (UUID, obrigatório): ID do ticket.<br><br>

## Excluir Ticket<br>
**Método:** DELETE

**URL:** `/tickets/:id`

**Descrição:** Exclui um ticket específico pelo seu ID.

**Parâmetros de Rota:**

- `id` (UUID, obrigatório): ID do ticket.<br><br>

## 💻 Projeto

O projeto foi executado junto com instrutor da Rocketseat somente API nodeJS todo o sistema de controle de um restaurante ultilizando os frameworks e TypeScript que foi ensinado nas aulas, conforme as tecnologia informado a cima.

---

Rocketseat: [Participe da nossa comunidade!](https://www.rocketseat.com.br/)
