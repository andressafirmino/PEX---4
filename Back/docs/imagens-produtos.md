# Imagens de produtos

## O que o banco armazena

Na tabela `products`, o campo `imageUrl` guarda **texto** (link ou caminho), por exemplo:

```
http://localhost:4000/images/snacks/empada-frango.png
```

O PostgreSQL **não** guarda o arquivo JPG/PNG dentro da célula.

## Abordagens (da mais simples à mais escalável)

### 1. Arquivos locais + URL no banco (atual no PEX)

- Copie imagens para `Back/public/images/{tipo}/`
- Sirva com Express: `GET /images/...`
- No seed ou no `POST /products`, salve a URL completa em `imageUrl`

**Prós:** simples, sem custo extra.  
**Contras:** em deploy, precisa publicar a pasta `public` junto com a API.

### 2. Imagens no front (`public/` do Vite)

- Coloque em `Front/public/products/...`
- `imageUrl`: `http://localhost:5173/products/...`

**Prós:** fácil em dev.  
**Contras:** front e back desacoplados; em produção a URL do front muda.

### 3. Storage na nuvem (recomendado em produção)

- Upload para S3, Cloudinary, Supabase Storage, etc.
- Salve no banco só a URL pública que o serviço devolve

**Prós:** CDN, escala, upload pelo painel admin.  
**Contras:** configuração extra.

### 4. O que evitar

- **BYTEA / base64 no PostgreSQL** — deixa o banco pesado e lento.
- **Caminho só no front** (`/src/assets/...`) — não funciona na resposta da API para outros clientes.

## Cadastrar produto novo com imagem

1. Adicione o arquivo em `Back/public/images/snacks/meu-produto.png` (ou faça upload no storage).
2. Confirme que abre no navegador: `http://localhost:4000/images/snacks/meu-produto.png`
3. Crie o produto:

```http
POST /products
Authorization: Bearer <token-admin>
Content-Type: application/json

{
  "name": "Novo lanche",
  "description": "...",
  "price": 6.5,
  "type": "snacks",
  "imageUrl": "http://localhost:4000/images/snacks/meu-produto.png"
}
```

## Popular o cardápio mockado

```bash
cd Back
npm run dev:seed
```

Isso recria os 12 produtos do cardápio antigo do front (admin não é duplicado — usa `upsert`).
