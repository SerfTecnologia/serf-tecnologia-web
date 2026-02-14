# Serf Tecnologia - Website Institucional

Website profissional e responsivo para a empresa Serf Tecnologia, especializada em consultoria e suporte de TI.

## 🎯 Visão Geral

Este projeto é uma landing page moderna e otimizada para conversão, desenvolvida com as melhores práticas de design e desenvolvimento web. O site apresenta a empresa, seus serviços, processo de trabalho e inclui um formulário de captação de leads integrado ao banco de dados.

## 🛠️ Stack Tecnológico

- **Frontend**: React 19 + TypeScript + Tailwind CSS 4
- **Backend**: Express 4 + tRPC 11
- **Banco de Dados**: MySQL/TiDB com Drizzle ORM
- **Autenticação**: Manus OAuth
- **Ferramentas**: Vite, Vitest, Prettier

## 📋 Requisitos

- Node.js 22+
- pnpm 10+
- Variáveis de ambiente configuradas (DATABASE_URL, etc.)

## 🚀 Como Rodar Localmente

### 1. Instalar dependências

```bash
pnpm install
```

### 2. Configurar banco de dados

```bash
pnpm db:push
```

### 3. Iniciar servidor de desenvolvimento

```bash
pnpm dev
```

O site estará disponível em `http://localhost:3000`

## 📁 Estrutura de Pastas

```
serf-tecnologia-web/
├── client/
│   ├── src/
│   │   ├── components/        # Componentes React reutilizáveis
│   │   │   ├── Hero.tsx       # Seção hero com CTAs
│   │   │   ├── About.tsx      # Seção Quem Somos
│   │   │   ├── Services.tsx   # Seção de Serviços
│   │   │   ├── Process.tsx    # Seção Como Funciona
│   │   │   ├── Commitments.tsx # Seção Compromissos
│   │   │   ├── LeadForm.tsx   # Formulário de leads
│   │   │   └── Footer.tsx     # Rodapé
│   │   ├── pages/
│   │   │   └── Home.tsx       # Página principal
│   │   ├── lib/
│   │   │   └── trpc.ts        # Cliente tRPC
│   │   ├── index.css          # Estilos globais
│   │   ├── serf-theme.css     # Tema customizado Serf
│   │   └── main.tsx           # Ponto de entrada
│   ├── public/                # Assets estáticos
│   └── index.html             # HTML principal
├── server/
│   ├── routers.ts             # Procedimentos tRPC
│   ├── db.ts                  # Funções de banco de dados
│   ├── leads.test.ts          # Testes de leads
│   └── auth.logout.test.ts    # Testes de autenticação
├── drizzle/
│   └── schema.ts              # Schema do banco de dados
└── package.json
```

## 🎨 Identidade Visual

### Paleta de Cores

- **Azul Primário (Marinho)**: `#0B2D5B` - Textos fortes, títulos
- **Azul Secundário**: `#1E6FD9` - Links, realces, CTAs
- **Verde Primário**: `#22C55E` - Botões, destaques, badges
- **Verde Neon**: `#A3E635` - Efeitos de brilho, acentos
- **Cinza Fundo Claro**: `#F5F7FA` - Fundo principal
- **Cinza Fundo Escuro**: `#0F172A` - Seções escuras
- **Branco**: `#FFFFFF` - Texto sobre fundos escuros

### Tipografia

- **Headings**: Poppins (peso 700)
- **Texto**: Inter (peso 400/500)
- **Botões**: Inter (peso 600)

## 📝 Editando Conteúdo

### Textos das Seções

Os textos das diferentes seções estão localizados nos componentes correspondentes:

- **Hero**: `client/src/components/Hero.tsx` - Título, subtítulo e CTAs
- **Sobre**: `client/src/components/About.tsx` - Descrição e valores
- **Serviços**: `client/src/components/Services.tsx` - Lista de serviços
- **Processo**: `client/src/components/Process.tsx` - 4 passos do processo
- **Compromissos**: `client/src/components/Commitments.tsx` - Diferenciais
- **Rodapé**: `client/src/components/Footer.tsx` - Links e contato

### Contato e Links

Para editar informações de contato no rodapé, procure por:

```tsx
// Em Footer.tsx
<a href="mailto:contato@serf.com.br">contato@serf.com.br</a>
<a href="https://wa.me/5511999999999">(11) 99999-9999</a>
```

Substitua pelos dados reais da empresa.

### Cores

Para alterar as cores do tema, edite `client/src/serf-theme.css`:

```css
:root {
  --serf-primary-dark: #0B2D5B;
  --serf-primary: #1E6FD9;
  --serf-success: #22C55E;
  /* ... */
}
```

## 📊 Formulário de Leads

O formulário captura: Nome, Email, Telefone e Mensagem (opcional).

### Dados Salvos

Os leads são salvos no banco de dados na tabela `leads` com:
- `id`: Identificador único
- `name`: Nome do visitante
- `email`: Email para contato
- `phone`: Telefone/WhatsApp
- `message`: Mensagem opcional
- `createdAt`: Data/hora de criação
- `updatedAt`: Data/hora de atualização

### Notificações

Quando um novo lead é submetido, o proprietário recebe uma notificação automática via sistema de notificações do Manus.

### Validações

- Email deve ser válido
- Telefone deve ter no mínimo 10 dígitos
- Nome deve ter no mínimo 2 caracteres

## ✅ Testes

Executar todos os testes:

```bash
pnpm test
```

Testes incluem:
- Validação de dados do formulário
- Criação de leads
- Listagem de leads

## 🔧 Procedimentos tRPC

### `leads.create`

Cria um novo lead no banco de dados.

**Input**:
```typescript
{
  name: string;        // Mínimo 2 caracteres
  email: string;       // Email válido
  phone: string;       // Mínimo 10 dígitos
  message?: string;    // Opcional
}
```

**Output**:
```typescript
{
  success: boolean;
}
```

### `leads.list`

Lista todos os leads cadastrados.

**Output**:
```typescript
Lead[]
```

## 🚢 Deploy

### Opção 1: Manus (Recomendado)

1. Crie um checkpoint do projeto
2. Clique no botão "Publish" na interface do Manus
3. O site será automaticamente publicado com domínio customizável

### Opção 2: Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Opção 3: Netlify

```bash
# Instalar Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy
```

## 📱 Responsividade

O site é totalmente responsivo e otimizado para:
- **Desktop**: 1920px+
- **Tablet**: 768px - 1024px
- **Mobile**: 320px - 767px

## ♿ Acessibilidade

- Contraste de cores em conformidade com WCAG AA
- Navegação por teclado totalmente funcional
- Semântica HTML apropriada
- Labels em formulários

## 🔒 Segurança

- Validação de dados no backend
- Proteção contra CSRF via tRPC
- Senhas e tokens nunca são armazenados em localStorage
- Comunicação HTTPS obrigatória em produção

## 📞 Suporte

Para dúvidas ou sugestões sobre o desenvolvimento do site, consulte a documentação do template web-db-user no Manus.

## 📄 Licença

Este projeto é propriedade da Serf Tecnologia.

---

**Última atualização**: Fevereiro de 2026
