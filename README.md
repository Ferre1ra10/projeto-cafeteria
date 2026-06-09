# ☕ Projeto Cafeteria Central

Site institucional de uma cafeteria fictícia, servido por um servidor **Node.js + Express** e hospedado na **Railway** a partir de um repositório no **GitHub**.

Este projeto foi desenvolvido como atividade prática para exercitar:

- Criação de um servidor web simples com Express;
- Organização de arquivos estáticos (HTML/CSS);
- Uso de **variáveis de ambiente**;
- Versionamento com Git/GitHub;
- **Deploy (hospedagem) na nuvem** usando a plataforma Railway.

---

## 📁 Estrutura do projeto

```
projeto-cafeteria/
├── server.js          # Servidor Express (back-end)
├── package.json       # Dependências e scripts do projeto
├── .gitignore         # Arquivos/pastas que não vão para o GitHub
└── public/            # Arquivos estáticos (front-end)
    ├── index.html     # Página inicial
    ├── contato.html   # Página de contato
    └── style.css      # Estilização das páginas
```

Essa estrutura segue exatamente o modelo proposto na atividade: o back-end fica na raiz (`server.js`) e tudo que o navegador acessa diretamente fica dentro de `public/`.

---

## 🛠️ Tecnologias utilizadas

| Tecnologia | Para quê |
|------------|----------|
| **Node.js** | Ambiente de execução do JavaScript no servidor |
| **Express** | Framework que cria o servidor web e serve os arquivos |
| **HTML5** | Estrutura das páginas |
| **CSS3** | Estilização (tema de cafeteria) |
| **Git + GitHub** | Versionamento e armazenamento do código |
| **Railway** | Hospedagem do projeto na internet |

---

## 🚧 Como o projeto foi construído (passo a passo)

### 1. Inicialização do projeto

Dentro da pasta do projeto, no terminal:

```bash
npm init -y
```

> Esse comando cria o arquivo **`package.json`**, que guarda as informações e dependências do projeto. O `-y` aceita as configurações padrão automaticamente.

### 2. Instalação do Express

```bash
npm install express
```

> Instala o **Express**, framework usado para criar o servidor. Isso adiciona o Express às dependências do `package.json` e cria a pasta `node_modules/`.

### 3. Criação do servidor (`server.js`)

```js
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/sobre", (req, res) => {
    res.json({
        empresa: process.env.EMPRESA || "Cafeteria Central",
        cidade: "Brasília"
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`Empresa: ${process.env.EMPRESA}`);
});
```

**Por que cada parte existe:**

- `require("express")` → importa o framework.
- `const PORT = process.env.PORT || 3000` → usa a porta definida pelo **ambiente de hospedagem** (a Railway define essa variável automaticamente). Se nenhuma porta for informada (rodando localmente), usa a **3000**. Isso é essencial para o deploy funcionar.
- `app.use(express.static("public"))` → faz o Express **servir os arquivos da pasta `public/`** (HTML e CSS), permitindo acessar o site direto pelo navegador.
- `app.get("/sobre", ...)` → cria uma **rota de API** que devolve um JSON com dados da empresa. Demonstra o uso de **variável de ambiente** (`process.env.EMPRESA`): se ela existir, usa o valor configurado; caso contrário, usa `"Cafeteria Central"` como padrão.
- `app.listen(PORT, ...)` → coloca o servidor "no ar", ouvindo a porta definida.

### 4. Criação das páginas (`public/`)

- **`index.html`** → página inicial, com cabeçalho, menu de navegação, uma seção de boas-vindas e o cardápio da cafeteria.
- **`contato.html`** → página com um formulário (nome, e-mail e mensagem).
- **`style.css`** → folha de estilos responsável por toda a aparência (tema de cafeteria com tons de café, cards, formulário estilizado e responsividade).

### 5. Configuração do `.gitignore`

```
node_modules
.env
```

**Por quê:**

- `node_modules` → pasta gigante com as dependências; **não deve ir para o GitHub** porque pode ser recriada a qualquer momento com `npm install`.
- `.env` → arquivo com **variáveis de ambiente sensíveis**; não deve ser exposto publicamente no repositório.

---

## ▶️ Como rodar localmente

1. Clonar o repositório e entrar na pasta:
   ```bash
   git clone https://github.com/SEU-USUARIO/projeto-cafeteria.git
   cd projeto-cafeteria
   ```
2. Instalar as dependências:
   ```bash
   npm install
   ```
3. Iniciar o servidor:
   ```bash
   node server.js
   ```
   > ou `npm start` (configurado no `package.json`).
4. Abrir no navegador:
   ```
   http://localhost:3000
   ```

A rota de API pode ser testada em `http://localhost:3000/sobre`.

---

## 🌱 Variáveis de ambiente

| Variável | Descrição | Padrão |
|----------|-----------|--------|
| `PORT` | Porta em que o servidor roda (definida automaticamente pela Railway) | `3000` |
| `EMPRESA` | Nome da empresa exibido na rota `/sobre` | `Cafeteria Central` |

Localmente, as variáveis podem ser definidas em um arquivo `.env` (que é ignorado pelo Git). Na Railway, são configuradas no painel do projeto (aba **Variables**).

---

## 🚀 Deploy na Railway

A hospedagem foi feita na **Railway**, conectada diretamente ao repositório do GitHub. Passo a passo seguido (conforme a atividade):

1. **Criar uma conta** na Railway e conectá-la ao **GitHub**.
2. Clicar em **New / Novo** e escolher a opção de fazer deploy a partir de um repositório (**Deploy from GitHub repo**).
3. **Autorizar** a Railway a acessar os repositórios do GitHub e **selecionar** o repositório `projeto-cafeteria`.
4. A Railway cria automaticamente um **fluxo de hospedagem** (representado por um quadrado no painel) e faz o build/deploy usando o script `start` do `package.json`.
5. Entrar em **Settings** do serviço e, na seção de rede, clicar em **Generate Domain** para gerar o **domínio público** do site.
6. Acessar o domínio gerado para ver o site no ar. 🎉

> Como o servidor usa `process.env.PORT`, ele se ajusta automaticamente à porta fornecida pela Railway — por isso o deploy funciona sem alterações no código.

---

## 📌 Resumo

Este projeto demonstra o ciclo completo de uma aplicação web simples: **desenvolvimento** (Express + HTML/CSS) → **versionamento** (Git/GitHub) → **deploy** (Railway), passando pelo uso de **variáveis de ambiente** e boas práticas como o `.gitignore`.
