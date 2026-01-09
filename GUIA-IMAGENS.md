# 📸 Guia Completo: Como Adicionar Imagens aos Produtos

Este guia explica todas as formas de adicionar imagens reais dos seus produtos no sistema Januway Delivery.

## 🎯 Por que Adicionar Imagens?

Imagens de produtos aumentam as vendas em até 30%! Clientes querem ver o que estão comprando.

## 🔧 3 Métodos para Adicionar Imagens

### Método 1: Usar Imagens da Pasta `assets/` (Recomendado)

**Vantagens**: Imagens sempre disponíveis, não dependem de internet, mais rápido

**Como fazer:**

1. **Tire fotos dos seus produtos** com boa iluminação e fundo limpo
2. **Otimize as imagens** (use https://tinypng.com para reduzir o tamanho)
3. **Renomeie os arquivos** para nomes simples:
   ```
   carne-premium.jpg
   frango.jpg
   fit.jpg
   coca-cola.jpg
   guarana.jpg
   molho-barbecue.jpg
   etc...
   ```

4. **Adicione as imagens na pasta `assets/`** do projeto

5. **Edite o arquivo `script.js`** (linhas 10-43):

```javascript
const PRODUCT_IMAGES = {
    // Sanduíches
    'Januway Carne Premium': 'assets/carne-premium.jpg',
    'Januway Frango': 'assets/frango.jpg',
    'Januway Fit': 'assets/fit.jpg',

    // Bebidas
    'Coca-Cola Lata 220ml': 'assets/coca-cola.jpg',
    'Guaraná Lata 350ml': 'assets/guarana.jpg',

    // Molhos
    'Molho Barbecue': 'assets/molho-barbecue.jpg',
    'Maionese Verde': 'assets/maionese-verde.jpg',
    // ... continue para todos os produtos
};
```

6. **Commit e push as alterações**:
```bash
git add .
git commit -m "feat: Adicionar imagens reais dos produtos"
git push
```

---

### Método 2: Hospedar em Serviço de Imagens (Mais Fácil)

**Vantagens**: Não precisa fazer upload no GitHub, fácil de atualizar

**Serviços Gratuitos:**

#### **ImgBB** (Recomendado)
- Site: https://imgbb.com
- Upload gratuito ilimitado
- Link direto para imagens

**Como usar:**
1. Acesse https://imgbb.com
2. Faça upload das suas fotos
3. Copie o link "Direct Link"
4. Cole no `script.js`

```javascript
const PRODUCT_IMAGES = {
    'Januway Carne Premium': 'https://i.ibb.co/XXXXX/carne-premium.jpg',
    'Januway Frango': 'https://i.ibb.co/XXXXX/frango.jpg',
    // ...
};
```

#### **Google Drive**
1. Faça upload no Google Drive
2. Clique com botão direito → "Obter link"
3. Altere o link de:
   ```
   https://drive.google.com/file/d/FILE_ID/view
   ```
   Para:
   ```
   https://drive.google.com/uc?export=view&id=FILE_ID
   ```

#### **Imgur**
- Site: https://imgur.com
- Perfeito para imagens de produtos
- Upload anônimo permitido

---

### Método 3: Usar Unsplash (Temporário)

**Vantagens**: Imagens profissionais gratuitas enquanto você não tem as suas

**Já está configurado!** O sistema atual usa Unsplash como placeholder.

**Para personalizar:**
1. Acesse https://unsplash.com
2. Busque por "burger", "sandwich", "coca cola", etc.
3. Abra a imagem desejada
4. Copie a URL e adicione `?w=800&h=600&fit=crop` no final
5. Substitua no `script.js`

Exemplo:
```javascript
'Januway Carne Premium': 'https://images.unsplash.com/photo-XXXXX?w=800&h=600&fit=crop'
```

---

## 📐 Especificações Técnicas das Imagens

### Tamanhos Recomendados:

- **Sanduíches**: 800x600px (proporção 4:3)
- **Bebidas**: 400x400px (quadrado)
- **Molhos**: 400x400px (quadrado)
- **Adicionais**: 400x400px (quadrado)

### Formato:
- **JPG** para fotos (menor tamanho)
- **PNG** se precisar de fundo transparente
- **WebP** para melhor compressão (navegadores modernos)

### Tamanho de Arquivo:
- Máximo 300KB por imagem
- Use https://tinypng.com para comprimir

---

## 🎨 Dicas para Fotos Profissionais

### Iluminação:
- ✅ Use luz natural (próximo à janela)
- ✅ Evite sombras duras
- ✅ Fotografe durante o dia

### Composição:
- ✅ Fundo limpo e neutro (branco, madeira clara)
- ✅ Produto centralizado
- ✅ Foto de cima ou levemente inclinada
- ✅ Adicione elementos decorativos (guardanapo, talheres)

### Equipamento:
- ✅ Smartphone moderno é suficiente
- ✅ Limpe bem a lente
- ✅ Use modo HDR se disponível
- ✅ Não use zoom digital

### Edição Básica:
1. Ajuste brilho e contraste
2. Aumente levemente a saturação
3. Corte para centralizar
4. Comprima com TinyPNG

---

## 🔄 Como Atualizar uma Imagem

1. **Se estiver usando `assets/`:**
   - Substitua o arquivo na pasta
   - Commit e push

2. **Se estiver usando serviço externo:**
   - Faça upload da nova imagem
   - Copie o novo link
   - Atualize o `script.js`
   - Commit e push

---

## 🆘 Solução de Problemas

### Imagem não aparece (erro 404):
- ✅ Verifique se o nome do arquivo está correto
- ✅ Verifique se a imagem está na pasta `assets/`
- ✅ Verifique se o link externo está público

### Imagem muito lenta para carregar:
- ✅ Comprima a imagem com TinyPNG
- ✅ Reduza dimensões para os tamanhos recomendados
- ✅ Converta para WebP

### Imagem distorcida:
- ✅ Use as proporções corretas (4:3 para sanduíches, 1:1 para resto)
- ✅ No CSS, a propriedade `background-size: cover` já está configurada

---

## 📝 Template Completo de Configuração

Copie e cole este template no `script.js`, substituindo os links:

```javascript
const PRODUCT_IMAGES = {
    // ========== SANDUÍCHES ==========
    'Januway Carne Premium': 'assets/carne-premium.jpg',  // 800x600
    'Januway Frango': 'assets/frango.jpg',                 // 800x600
    'Januway Fit': 'assets/fit.jpg',                       // 800x600

    // ========== BEBIDAS ==========
    'Coca-Cola Lata 220ml': 'assets/coca-cola.jpg',        // 400x400
    'Guaraná Lata 350ml': 'assets/guarana.jpg',            // 400x400

    // ========== MOLHOS ==========
    'Molho Barbecue': 'assets/molho-barbecue.jpg',         // 400x400
    'Maionese Verde': 'assets/maionese-verde.jpg',         // 400x400
    'Maionese de Bacon': 'assets/maionese-bacon.jpg',      // 400x400
    'Maionese': 'assets/maionese.jpg',                     // 400x400
    'Molho Januway': 'assets/molho-januway.jpg',           // 400x400
    'Sachê Ketchup': 'assets/ketchup.jpg',                 // 400x400

    // ========== ADICIONAIS - PROTEÍNAS ==========
    'Carne Bovina em cubos': 'assets/carne-cubos.jpg',     // 400x400
    'Frango em cubos temperado': 'assets/frango-cubos.jpg', // 400x400
    'Peito de Peru defumado': 'assets/peru.jpg',           // 400x400

    // ========== ADICIONAIS - QUEIJOS ==========
    'Muçarela': 'assets/mucarela.jpg',                     // 400x400
    'Queijo Cheddar': 'assets/cheddar.jpg',                // 400x400

    // ========== ADICIONAIS - VEGETAIS ==========
    'Picles': 'assets/picles.jpg',                         // 400x400
    'Pepino': 'assets/pepino.jpg',                         // 400x400
    'Pimentão': 'assets/pimentao.jpg',                     // 400x400
    'Cebola Roxa': 'assets/cebola.jpg',                    // 400x400
    'Tomate': 'assets/tomate.jpg',                         // 400x400
    'Alface': 'assets/alface.jpg'                          // 400x400
};
```

---

## ✅ Checklist Final

Antes de publicar, verifique:

- [ ] Todas as imagens estão otimizadas (< 300KB)
- [ ] Todas as imagens têm os tamanhos corretos
- [ ] Todos os produtos têm imagens configuradas
- [ ] As imagens carregam rápido
- [ ] As imagens ficam bonitas no mobile
- [ ] Testei em diferentes navegadores

---

## 🎥 Vídeo Tutorial

Para um tutorial em vídeo sobre como adicionar imagens, acesse:
- YouTube: Pesquise por "como adicionar imagens em site HTML"
- Ou peça ajuda para Miranda Devs

---

## 📞 Suporte

Dúvidas? Entre em contato:
- Email: [seu-email]
- WhatsApp: [seu-whatsapp]
- GitHub Issues: https://github.com/aiaipedrox/januway/issues

---

**Feito com ❤️ por Miranda Devs**

🍔 Boas vendas com suas imagens incríveis!
