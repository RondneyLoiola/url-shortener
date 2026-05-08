# 🔗 URL Shortener - Encurtador de Links

Um encurtador de URLs moderno e eficiente construído com NestJS, MongoDB e TypeScript. Similar ao Bitly, permite transformar URLs longas em links curtos e rastreáveis.

![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

## ✨ Funcionalidades

- ✅ Encurtamento de URLs longas
- ✅ Redirecionamento automático
- ✅ Contador de cliques/acessos
- ✅ Estatísticas detalhadas por link
- ✅ Códigos únicos de 7 caracteres
- ✅ API RESTful

## 🚀 Tecnologias

- **[NestJS](https://nestjs.com/)** - Framework Node.js progressivo
- **[MongoDB](https://www.mongodb.com/)** - Banco de dados NoSQL
- **[Mongoose](https://mongoosejs.com/)** - ODM para MongoDB
- **[TypeScript](https://www.typescriptlang.org/)** - Superset JavaScript
- **[nanoid](https://github.com/ai/nanoid)** - Gerador de IDs únicos

## 📋 Pré-requisitos

Antes de começar, você precisa ter instalado:

- [Node.js](https://nodejs.org/) (v16 ou superior)
- [MongoDB](https://www.mongodb.com/try/download/community) (v4.4 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## 🔧 Instalação

1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/url-shortener.git
cd url-shortener
```

2. Instale as dependências
```bash
npm install
```

3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:
```env
MONGODB_URI=mongodb://localhost:27017/url-shortener
PORT=3000
BASE_URL=http://localhost:3000
```

4. Inicie o MongoDB
```bash
# Linux/Mac
mongod

# Windows
# Inicie o serviço MongoDB
```

5. Execute a aplicação
```bash
# Desenvolvimento
npm run start:dev

# Produção
npm run build
npm run start:prod
```

## 📡 API Endpoints

### Criar URL Curta

```http
POST /shorten
Content-Type: application/json

{
  "url": "https://www.exemplo.com/pagina-muito-longa"
}
```

**Resposta:**
```json
{
  "originalUrl": "https://www.exemplo.com/pagina-muito-longa",
  "shortUrl": "http://localhost:3000/abc1234",
  "shortCode": "abc1234"
}
```

### Redirecionar

```http
GET /:shortCode
```

Redireciona automaticamente para a URL original.

### Obter Estatísticas

```http
GET /stats/:shortCode
```

**Resposta:**
```json
{
  "_id": "...",
  "originalUrl": "https://www.exemplo.com/pagina-muito-longa",
  "shortCode": "abc1234",
  "clicks": 42,
  "createdAt": "2024-01-15T10:30:00.000Z"
}
```

## 🧪 Testando

### Com cURL

```bash
# Criar URL curta
curl -X POST http://localhost:3000/shorten \
  -H "Content-Type: application/json" \
  -d '{"url": "https://www.google.com"}'

# Ver estatísticas
curl http://localhost:3000/stats/abc1234
```

### Com Postman ou Insomnia

1. Importe a coleção de exemplos (em breve)
2. Execute os requests de teste

## 📂 Estrutura do Projeto

```
url-shortener/
├── src/
│   ├── urls/
│   │   ├── schemas/
│   │   │   └── url.schema.ts      # Schema do MongoDB
│   │   ├── urls.controller.ts     # Rotas da API
│   │   ├── urls.service.ts        # Lógica de negócio
│   │   └── urls.module.ts         # Módulo NestJS
│   ├── app.module.ts              # Módulo principal
│   └── main.ts                    # Entry point
├── package.json
└── README.md
```

## 🛠️ Scripts Disponíveis

```bash
# Desenvolvimento
npm run start:dev

# Build
npm run build

# Produção
npm run start:prod

# Testes
npm run test

# Linting
npm run lint
```

## 🎯 Próximas Funcionalidades

- [ ] Autenticação de usuários
- [ ] Dashboard com analytics
- [ ] Expiração automática de links
- [ ] Links personalizados (custom aliases)
- [ ] QR Code para URLs
- [ ] Rate limiting
- [ ] Cache com Redis
- [ ] Domínio customizado

## 🤝 Como Contribuir

Contribuições são bem-vindas! Siga os passos:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

Seu Nome
- GitHub: [@RondneyLoiola](https://github.com/RondneyLoiola)
- LinkedIn: [rondneyloiola](https://linkedin.com/in/rondneyloiola)

## 📞 Contato

Tem alguma dúvida ou sugestão? Entre em contato!

- Email: rondney.loiola1@gmail.com
- LinkedIn: [rondneyloiola](https://linkedin.com/in/rondneyloiola)

---

⭐ Se este projeto te ajudou, deixe uma estrela!

Feito com ❤️ e ☕
