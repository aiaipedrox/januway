# 🍔 Januway Delivery - Sistema de Comanda Digital

Sistema completo de comanda digital para delivery desenvolvido para a **Januway**, especializada em sanduíches artesanais premium. Interface moderna, responsiva e otimizada para conversão de pedidos via WhatsApp.

![Version](https://img.shields.io/badge/version-1.0.0-green)
![License](https://img.shields.io/badge/license-MIT-blue)

## 📸 Preview

Sistema com design minimalista, paleta de cores profissional (verde escuro #1a4d2e e amarelo #f3ec19) e experiência do usuário focada em simplicidade e eficiência.

## ✨ Funcionalidades

### 🎯 Principais Recursos

- **Cardápio Completo**: Sanduíches, bebidas, molhos e adicionais organizados por categorias
- **Carrinho Flutuante**: Visualização em tempo real do pedido com contador de itens e valor total
- **Sistema de Quantidade**: Controle preciso de quantidades antes de adicionar ao carrinho
- **Checkout Simplificado**: Formulário otimizado com validação de campos obrigatórios
- **Integração WhatsApp**: Pedido formatado e enviado automaticamente para o número configurado
- **Tela de Sucesso**: Animação de confirmação com efeito confete celebrativo
- **Persistência de Dados**: Carrinho salvo no localStorage (não perde itens ao recarregar)
- **Responsividade Total**: Design mobile-first adaptável a todos os dispositivos

### 🎨 Design & UX

- Interface limpa e minimalista
- Animações suaves e satisfatórias
- Feedback visual em todas as interações
- Tipografia moderna e legível
- Cards com sombras sutis e bordas arredondadas
- Paleta de cores profissional e acessível

## 🚀 Como Usar

### 1. Fork do Repositório

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/januway-delivery.git

# Ou faça fork pelo GitHub e clone seu fork
git clone https://github.com/seu-usuario/januway-delivery.git
```

### 2. Ativar GitHub Pages

1. Acesse o repositório no GitHub
2. Vá em **Settings** (Configurações)
3. No menu lateral, clique em **Pages**
4. Em **Source**, selecione a branch `main` (ou `master`)
5. Selecione a pasta `/root` ou `/januway-delivery` conforme sua estrutura
6. Clique em **Save**
7. Aguarde alguns minutos e seu site estará disponível em:
   ```
   https://seu-usuario.github.io/januway-delivery/
   ```

### 3. Acessar o Sistema

Após ativado, acesse a URL fornecida pelo GitHub Pages. O sistema estará pronto para uso!

## ⚙️ Personalização

### Alterar Número do WhatsApp

Edite o arquivo `script.js` na linha do número do WhatsApp:

```javascript
// Procure por esta linha (aproximadamente linha 270)
const whatsappURL = `https://wa.me/5573936180266?text=${encodeURIComponent(whatsappMessage)}`;

// Substitua pelo seu número (formato: código do país + DDD + número)
const whatsappURL = `https://wa.me/55SEU_DDD_SEU_NUMERO?text=${encodeURIComponent(whatsappMessage)}`;
```

**Exemplo**: Para o número (11) 98765-4321:
```javascript
const whatsappURL = `https://wa.me/5511987654321?text=${encodeURIComponent(whatsappMessage)}`;
```

### Personalizar Cardápio

Edite o arquivo `script.js` no início do arquivo onde está o objeto `menuData`:

```javascript
const menuData = {
    sanduiches: [
        {
            id: 1,
            nome: "Nome do Sanduíche",
            descricao: "Descrição completa dos ingredientes",
            preco: 30.00,
            categoria: "sanduiches"
        },
        // Adicione mais sanduíches aqui
    ],
    bebidas: [
        { id: 4, nome: "Nome da Bebida", preco: 5.00, categoria: "bebidas" },
        // Adicione mais bebidas aqui
    ],
    // ... outros itens
};
```

**⚠️ Importante**:
- Cada item deve ter um `id` único
- Mantenha a estrutura do objeto
- Use vírgulas entre os itens
- O `id` deve ser numérico e crescente

### Alterar Cores do Site

Edite o arquivo `style.css` no início, nas variáveis CSS:

```css
:root {
    /* Cores principais */
    --primary-green: #1a4d2e;    /* Verde principal */
    --accent-yellow: #f3ec19;     /* Amarelo destaque */
    --bg-color: #f8f9fa;          /* Cor de fundo */
    --text-color: #2d2d2d;        /* Cor do texto */
    --card-bg: #ffffff;           /* Fundo dos cards */
}
```

Altere os valores hexadecimais para as cores desejadas.

### Substituir Logo

O logo atual é um SVG inline no `index.html`. Para substituir:

1. **Opção 1 - Imagem PNG/JPG**:
   - Adicione sua imagem na pasta `assets/`
   - No `index.html`, substitua o SVG por:
   ```html
   <img src="assets/seu-logo.png" alt="Januway" class="logo">
   ```

2. **Opção 2 - Novo SVG**:
   - Substitua o código SVG existente no `index.html` (dentro de `<svg class="logo">...</svg>`)

### Alterar Rodapé

No arquivo `index.html`, procure pela seção footer e altere:

```html
<footer class="footer">
    <div class="container">
        <p>Desenvolvimento: Seu Nome ou Empresa</p>
    </div>
</footer>
```

## 📁 Estrutura de Arquivos

```
januway-delivery/
├── index.html          # Estrutura HTML principal
├── style.css           # Estilos e design responsivo
├── script.js           # Lógica, carrinho e integração WhatsApp
├── assets/             # Pasta para imagens e recursos
│   └── logo.png        # Logo da empresa (opcional)
└── README.md           # Este arquivo
```

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**:
  - Flexbox e Grid Layout
  - CSS Variables (Custom Properties)
  - Animações e transições suaves
  - Design responsivo mobile-first
- **JavaScript ES6+**:
  - Vanilla JS (sem dependências)
  - LocalStorage para persistência
  - Manipulação do DOM
  - Canvas API para animação de confete

## 📱 Compatibilidade

- ✅ Chrome/Edge (versões recentes)
- ✅ Firefox (versões recentes)
- ✅ Safari (iOS 12+)
- ✅ Opera (versões recentes)
- ✅ Navegadores móveis (Android/iOS)

## 🎯 Fluxo de Uso

1. **Cliente acessa o site** → Visualiza o cardápio organizado por categorias
2. **Seleciona quantidades** → Usa botões +/- para escolher quantidade de cada item
3. **Adiciona ao carrinho** → Clica em "Adicionar ao Carrinho"
4. **Revisa pedido** → Clica no botão flutuante do carrinho
5. **Preenche dados** → Clica em "Continuar para Entrega" e preenche formulário
6. **Finaliza pedido** → Clica em "Finalizar Pedido"
7. **Confirmação** → Vê animação de sucesso e é redirecionado ao WhatsApp
8. **WhatsApp** → Mensagem formatada é aberta automaticamente para envio

## 📋 Formato da Mensagem WhatsApp

A mensagem enviada segue este formato:

```
🍔 *NOVO PEDIDO - JANUWAY*

*PEDIDO:*
1x Januway Carne Premium - R$ 30,00
1x Coca-Cola Lata 220ml - R$ 5,00
1x Molho Barbecue - R$ 3,99

*TOTAL: R$ 38,99*

──────────────────

👤 *DADOS DO CLIENTE:*
Nome: João Silva
Endereço: Rua das Flores, 123
Bairro: Centro
Referência: Próximo ao mercado São José

💳 *Pagamento:* PIX

📝 *Observações:* Sem cebola roxa no sanduíche
```

## 🔒 Segurança e Privacidade

- Nenhum dado é armazenado em servidor
- Informações do cliente vão diretamente para o WhatsApp
- LocalStorage usado apenas para carrinho (pode ser limpo pelo usuário)
- Sistema totalmente client-side

## 🐛 Solução de Problemas

### Pedido não abre WhatsApp

- Verifique se o número está no formato correto: `5573936180266` (sem espaços ou caracteres especiais)
- Certifique-se de que o navegador permite pop-ups
- Teste em outro navegador ou dispositivo

### Carrinho não salva itens

- Verifique se o navegador permite LocalStorage
- Limpe o cache e cookies do navegador
- Tente em modo anônimo para testar

### Layout quebrado no mobile

- Limpe o cache do navegador móvel
- Verifique se todos os arquivos CSS e JS foram carregados
- Teste em outro dispositivo

## 📞 Suporte

Para dúvidas ou problemas:
- Abra uma issue no GitHub
- Entre em contato com Miranda Devs

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar, modificar e distribuir.

## 🙏 Créditos

- **Desenvolvimento**: Miranda Devs
- **Cliente**: Januway - Sanduíches Artesanais
- **Design**: Minimalista e clean, focado em conversão

## 🔄 Atualizações Futuras

Possíveis melhorias:
- [ ] Sistema de cupons de desconto
- [ ] Cálculo de taxa de entrega por bairro
- [ ] Horário de funcionamento
- [ ] Tempo estimado de entrega
- [ ] Histórico de pedidos
- [ ] Avaliação do pedido
- [ ] Modo escuro

---

**Desenvolvido com ❤️ por Miranda Devs**

🍔 Bom apetite e boas vendas!
