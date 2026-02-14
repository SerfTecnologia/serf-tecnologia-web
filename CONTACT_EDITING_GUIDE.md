# Guia de Edição - Dados de Contato e Redes Sociais

Este documento descreve onde e como editar os dados de contato da Serf Tecnologia no site.

## 📧 Email Institucional

**Arquivo:** `shared/contact.ts`

**Localização:** Linha 14

```typescript
export const CONTACT_INFO = {
  email: "serftecnologia@gmail.com", // ← Altere aqui
  // ...
};
```

**Como editar:**
1. Abra o arquivo `shared/contact.ts`
2. Localize a propriedade `email` dentro de `CONTACT_INFO`
3. Substitua o valor entre aspas pelo novo email
4. Salve o arquivo

**Onde aparece no site:**
- Rodapé (seção Contato)
- Formulário de leads (mensagem de confirmação)
- Links de email em todo o site

---

## 📱 Telefone / WhatsApp

**Arquivo:** `shared/contact.ts`

**Localização:** Linhas 16-18

```typescript
export const CONTACT_INFO = {
  // ...
  phone: "14997821490",           // ← Apenas números, sem formatação
  phoneFormatted: "(14) 99782-1490", // ← Com formatação para exibição
  // ...
};
```

**Como editar:**
1. Abra o arquivo `shared/contact.ts`
2. Altere `phone` com apenas os números (ex: "11987654321")
3. Altere `phoneFormatted` com a formatação desejada (ex: "(11) 98765-4321")
4. Salve o arquivo

**Importante:** O campo `phone` deve conter APENAS números. O `phoneFormatted` é usado para exibição.

**Onde aparece no site:**
- Rodapé (seção Contato) - com link WhatsApp
- Formulário de leads (após envio)
- Seção Commitments (botão "Falar no WhatsApp")

---

## 💬 Mensagem WhatsApp Pré-preenchida

**Arquivo:** `shared/contact.ts`

**Localização:** Linha 19

```typescript
export const CONTACT_INFO = {
  // ...
  whatsappMessage: "Olá! Gostaria de falar com a Serf Tecnologia sobre consultoria e suporte de TI.",
  // ↑ Altere aqui
  // ...
};
```

**Como editar:**
1. Abra o arquivo `shared/contact.ts`
2. Localize a propriedade `whatsappMessage`
3. Substitua o texto entre aspas pela nova mensagem
4. Salve o arquivo

**Nota:** A mensagem será automaticamente codificada para URL quando usada nos links.

---

## 🏙️ Localização (Cidade e Estado)

**Arquivo:** `shared/contact.ts`

**Localização:** Linhas 24-25

```typescript
export const CONTACT_INFO = {
  // ...
  city: "Bauru",  // ← Altere aqui
  state: "SP",    // ← Altere aqui
  // ...
};
```

**Como editar:**
1. Abra o arquivo `shared/contact.ts`
2. Altere `city` com o nome da cidade
3. Altere `state` com a sigla do estado (ex: "SP", "RJ", "MG")
4. Salve o arquivo

**Onde aparece no site:**
- Rodapé (seção Contato)

---

## 🔗 Redes Sociais

**Arquivo:** `shared/contact.ts`

**Localização:** Linhas 27-28

```typescript
export const CONTACT_INFO = {
  // ...
  linkedin: "https://www.linkedin.com/company/110831288/",
  // ↑ Altere aqui com o URL completo do LinkedIn
  
  instagram: "https://www.instagram.com/serftecnologia",
  // ↑ Altere aqui com o URL completo do Instagram
  // ...
};
```

### LinkedIn

**Como editar:**
1. Abra o arquivo `shared/contact.ts`
2. Localize a propriedade `linkedin`
3. Substitua o URL completo pelo novo link do LinkedIn
4. Salve o arquivo

**Formato esperado:** `https://www.linkedin.com/company/NUMERO_DA_EMPRESA/`

**Onde encontrar:**
- Acesse a página do LinkedIn da empresa
- Copie a URL da barra de endereços

### Instagram

**Como editar:**
1. Abra o arquivo `shared/contact.ts`
2. Localize a propriedade `instagram`
3. Substitua o URL completo pelo novo link do Instagram
4. Salve o arquivo

**Formato esperado:** `https://www.instagram.com/nome_do_perfil/`

**Onde encontrar:**
- Acesse o perfil do Instagram da empresa
- Copie a URL da barra de endereços

**Onde aparecem no site:**
- Rodapé (ícones clicáveis)
- Abrem em nova aba quando clicados

---

## 🎯 Resumo Rápido

| Dado | Arquivo | Propriedade | Exemplo |
|------|---------|-------------|---------|
| Email | `shared/contact.ts` | `email` | `serftecnologia@gmail.com` |
| Telefone (números) | `shared/contact.ts` | `phone` | `14997821490` |
| Telefone (formatado) | `shared/contact.ts` | `phoneFormatted` | `(14) 99782-1490` |
| Mensagem WhatsApp | `shared/contact.ts` | `whatsappMessage` | `Olá! Gostaria de...` |
| Cidade | `shared/contact.ts` | `city` | `Bauru` |
| Estado | `shared/contact.ts` | `state` | `SP` |
| LinkedIn | `shared/contact.ts` | `linkedin` | `https://www.linkedin.com/company/...` |
| Instagram | `shared/contact.ts` | `instagram` | `https://www.instagram.com/...` |

---

## ⚠️ Dicas Importantes

1. **Sempre edite o arquivo `shared/contact.ts`** - Todos os dados estão centralizados lá
2. **Não adicione espaços extras** - Os valores devem estar exatos
3. **Use URLs completas** - Para redes sociais, sempre inclua `https://`
4. **Teste após editar** - Verifique se os links funcionam corretamente
5. **Backup** - Considere fazer backup antes de grandes alterações

---

## 🔄 Propagação das Alterações

Após editar o arquivo `shared/contact.ts`, as alterações aparecem automaticamente em:

- ✅ Rodapé (Footer)
- ✅ Formulário de leads (LeadForm)
- ✅ Seção de compromissos (Commitments)
- ✅ Todos os links de contato do site

**Não é necessário editar múltiplos arquivos** - a centralização garante consistência.

---

## 📞 Suporte

Se tiver dúvidas sobre como editar os dados, consulte o arquivo `shared/contact.ts` que contém comentários explicativos adicionais.
