# API de Controle de Estoque

A API de Controle de Estoque é uma solução que visa facilitar a gestão de estoque de uma empresa, permitindo o gerenciamento de categorias, produtos e vendas de forma eficiente.

## Instalação e Configuração Local

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/MichelRLima/API-Controle-de-Estoque
   cd API-Controle-de-Estoque
   ```
2. **Crie um arquivo .env na raiz do projeto e configure as seguintes variáveis de ambiente:**

    ```bash
    DATABASE_URL=link_do_seu_banco_de_dados
    J WT_SECRET=codigo_do_autenticador
    ```

3. **Instale as dependências:**
    ```bash
    npm install
    ```
4. **Instale as dependências:**
    ```bash
    npx prisma migrate dev
    ```
4. **Inicie o servidor:**
    ```bash
    npm run dev
    ```

## Principais Tecnologias Utilizadas
- Node.js
- Express.js
- TypeScript
- Prisma
- PostgreSQL
- JSON Web Token (JWT)

### Documentação da API
A documentação da API pode ser encontrada [aqui](https://api-controle-estoque.onrender.com/api-docs/)