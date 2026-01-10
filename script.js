// ========== PRODUCT IMAGES ==========
const PRODUCT_IMAGES = {
    // Sanduíches
    'Januway Carne Premium': 'https://i.ibb.co/27ng7Fwp/image.jpg',
    'Januway Frango': 'https://i.ibb.co/Df4wP955/image.jpg',
    'Januway Fit': 'https://i.ibb.co/8DRWcQQg/image.jpg',

    // Bebidas
    'Coca-Cola Lata 220ml': 'https://i.ibb.co/pvL8mhcf/image.jpg',
    'Guaraná Lata 350ml': 'https://i.ibb.co/LGppTrh/image.jpg',

    // Molhos
    'Molho Barbecue': 'https://i.ibb.co/99L3zx12/image.jpg',
    'Maionese Verde': 'https://i.ibb.co/xtcng031/image.jpg',
    'Maionese de Bacon': 'https://i.ibb.co/5xT13DyH/image.jpg',
    'Maionese': 'https://i.ibb.co/8Dvh9Y0S/image.jpg',
    'Molho Januway': 'https://images.unsplash.com/photo-1596040033229-a0b3b9b22e9a?w=400&h=400&fit=crop',
    'Sachê Ketchup': 'https://i.ibb.co/jkhng6cv/image.jpg',

    // Adicionais
    'Carne Bovina em cubos': 'https://i.ibb.co/0pqpMXT2/image.jpg',
    'Frango em cubos temperado': 'https://i.ibb.co/Jj5t2xdp/image.jpg',
    'Peito de Peru defumado': 'https://i.ibb.co/GfGm6vFM/image.jpg',
    'Muçarela': 'https://i.ibb.co/Kc5NPdPz/image.jpg',
    'Queijo Cheddar': 'https://i.ibb.co/yvvG2yD/image.jpg',
    'Picles': 'https://i.ibb.co/1YrZ1nNS/image.jpg',
    'Pepino': 'https://i.ibb.co/JWQJL2r9/image.jpg',
    'Pimentão': 'https://i.ibb.co/vx9h6W21/image.jpg',
    'Cebola Roxa': 'https://i.ibb.co/ycwfdNHr/image.jpg',
    'Tomate': 'https://i.ibb.co/DH0yP5qw/image.jpg',
    'Alface': 'https://i.ibb.co/zTmJKyLn/image.jpg',
    'Pepperoni': 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=400&fit=crop'
};

// ========== MENU DATA ==========
const menuData = {
    sanduiches: [
        { id: 1, nome: 'Januway Carne Premium', preco: 28.00 },
        { id: 2, nome: 'Januway Frango', preco: 25.00 },
        { id: 3, nome: 'Januway Fit', preco: 23.00 }
    ],

    ingredientes: [
        'Alface',
        'Tomate',
        'Cebola Roxa',
        'Pimentão',
        'Pepino',
        'Picles'
    ],

    adicionais: [
        { id: 11, nome: 'Carne Bovina em cubos', preco: 6.00 },
        { id: 12, nome: 'Frango em cubos temperado', preco: 5.00 },
        { id: 13, nome: 'Peito de Peru defumado', preco: 4.00 },
        { id: 14, nome: 'Muçarela', preco: 3.00 },
        { id: 15, nome: 'Queijo Cheddar', preco: 3.50 },
        { id: 23, nome: 'Pepperoni', preco: 4.00 }
    ],

    bebidas: [
        { id: 16, nome: 'Coca-Cola Lata 220ml', preco: 4.00 },
        { id: 17, nome: 'Guaraná Lata 350ml', preco: 5.00 }
    ],

    molhos: [
        { id: 18, nome: 'Molho Barbecue', preco: 2.00 },
        { id: 19, nome: 'Maionese Verde', preco: 2.00 },
        { id: 20, nome: 'Maionese de Bacon', preco: 2.50 },
        { id: 21, nome: 'Maionese', preco: 1.50 },
        { id: 22, nome: 'Molho Januway', preco: 2.50 },
        { id: 24, nome: 'Sachê Ketchup', preco: 0.50 }
    ]
};

// ========== STATE MANAGEMENT ==========
const state = {
    currentStep: 'welcome',
    selectedSandwich: null,
    chosenIngredients: [],
    selectedExtras: [],
    selectedDrink: null,
    selectedSauces: []
};

// ========== HELPER FUNCTIONS ==========
function getProductImage(productName) {
    return PRODUCT_IMAGES[productName] || 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=600&fit=crop';
}

function formatPrice(price) {
    return `R$ ${price.toFixed(2).replace('.', ',')}`;
}

function calculateTotal() {
    let total = 0;

    if (state.selectedSandwich) {
        total += state.selectedSandwich.preco;
    }

    state.selectedExtras.forEach(extra => {
        total += extra.preco;
    });

    if (state.selectedDrink) {
        total += state.selectedDrink.preco;
    }

    state.selectedSauces.forEach(sauce => {
        total += sauce.preco;
    });

    return total;
}

// ========== SCREEN MANAGEMENT ==========
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });

    const screen = document.getElementById(`screen-${screenId}`);
    if (screen) {
        screen.classList.add('active');
    }

    // Show/hide progress bar
    const progressContainer = document.getElementById('progress-container');
    if (screenId === 'welcome') {
        progressContainer.style.display = 'none';
    } else {
        progressContainer.style.display = 'block';
        updateProgressBar(screenId);
    }

    state.currentStep = screenId;
}

function updateProgressBar(step) {
    const stepMap = {
        'step1': 1,
        'step2': 2,
        'step3': 3,
        'step4': 4,
        'step5': 5
    };

    const currentStepNumber = stepMap[step];

    document.querySelectorAll('.progress-step').forEach((stepEl, index) => {
        if (index < currentStepNumber) {
            stepEl.classList.add('active');
        } else {
            stepEl.classList.remove('active');
        }
    });
}

// ========== RENDER FUNCTIONS ==========
function renderSandwiches() {
    const grid = document.getElementById('sandwiches-grid');
    grid.innerHTML = '';

    menuData.sanduiches.forEach(sandwich => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image" style="background-image: url('${getProductImage(sandwich.nome)}')"></div>
            <div class="product-info">
                <h3 class="product-name">${sandwich.nome}</h3>
                <p class="product-price">${formatPrice(sandwich.preco)}</p>
            </div>
        `;

        card.addEventListener('click', () => {
            state.selectedSandwich = sandwich;
            showScreen('step2');
            renderStep2();
        });

        grid.appendChild(card);
    });
}

function renderStep2() {
    // Display selected sandwich
    const display = document.getElementById('selected-sandwich');
    if (state.selectedSandwich) {
        display.innerHTML = `
            <div class="selected-sandwich-image" style="background-image: url('${getProductImage(state.selectedSandwich.nome)}')"></div>
            <div class="selected-sandwich-info">
                <h3>${state.selectedSandwich.nome}</h3>
                <p>${formatPrice(state.selectedSandwich.preco)}</p>
            </div>
        `;
    }

    // Render ingredients
    const ingredientsGrid = document.getElementById('ingredients-grid');
    ingredientsGrid.innerHTML = '';

    menuData.ingredientes.forEach(ingredient => {
        const item = document.createElement('div');
        item.className = 'ingredient-item';
        if (state.chosenIngredients.includes(ingredient)) {
            item.classList.add('selected');
        }

        item.innerHTML = `
            <div class="ingredient-checkbox"></div>
            <span class="ingredient-name">${ingredient}</span>
        `;

        item.addEventListener('click', () => {
            if (state.chosenIngredients.includes(ingredient)) {
                state.chosenIngredients = state.chosenIngredients.filter(i => i !== ingredient);
                item.classList.remove('selected');
            } else {
                state.chosenIngredients.push(ingredient);
                item.classList.add('selected');
            }
        });

        ingredientsGrid.appendChild(item);
    });

    // Render extras
    const extrasGrid = document.getElementById('extras-grid');
    extrasGrid.innerHTML = '';

    menuData.adicionais.forEach(extra => {
        const card = document.createElement('div');
        card.className = 'extra-card';

        const isSelected = state.selectedExtras.some(e => e.id === extra.id);
        if (isSelected) {
            card.classList.add('selected');
        }

        card.innerHTML = `
            <div class="extra-image" style="background-image: url('${getProductImage(extra.nome)}')"></div>
            <div class="extra-info">
                <h4 class="extra-name">${extra.nome}</h4>
                <p class="extra-price">${formatPrice(extra.preco)}</p>
            </div>
        `;

        card.addEventListener('click', () => {
            if (state.selectedExtras.some(e => e.id === extra.id)) {
                state.selectedExtras = state.selectedExtras.filter(e => e.id !== extra.id);
                card.classList.remove('selected');
            } else {
                state.selectedExtras.push(extra);
                card.classList.add('selected');
            }
        });

        extrasGrid.appendChild(card);
    });
}

function renderDrinks() {
    const grid = document.getElementById('drinks-grid');
    grid.innerHTML = '';

    menuData.bebidas.forEach(drink => {
        const card = document.createElement('div');
        card.className = 'product-card';

        if (state.selectedDrink && state.selectedDrink.id === drink.id) {
            card.classList.add('selected');
        }

        card.innerHTML = `
            <div class="product-image" style="background-image: url('${getProductImage(drink.nome)}')"></div>
            <div class="product-info">
                <h3 class="product-name">${drink.nome}</h3>
                <p class="product-price">${formatPrice(drink.preco)}</p>
            </div>
        `;

        card.addEventListener('click', () => {
            state.selectedDrink = drink;
            document.querySelectorAll('#drinks-grid .product-card').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
        });

        grid.appendChild(card);
    });
}

function renderSauces() {
    const grid = document.getElementById('sauces-grid');
    grid.innerHTML = '';

    menuData.molhos.forEach(sauce => {
        const card = document.createElement('div');
        card.className = 'extra-card';

        const isSelected = state.selectedSauces.some(s => s.id === sauce.id);
        if (isSelected) {
            card.classList.add('selected');
        }

        card.innerHTML = `
            <div class="extra-image" style="background-image: url('${getProductImage(sauce.nome)}')"></div>
            <div class="extra-info">
                <h4 class="extra-name">${sauce.nome}</h4>
                <p class="extra-price">${formatPrice(sauce.preco)}</p>
            </div>
        `;

        card.addEventListener('click', () => {
            if (state.selectedSauces.some(s => s.id === sauce.id)) {
                state.selectedSauces = state.selectedSauces.filter(s => s.id !== sauce.id);
                card.classList.remove('selected');
            } else {
                state.selectedSauces.push(sauce);
                card.classList.add('selected');
            }
        });

        grid.appendChild(card);
    });
}

function renderOrderSummary() {
    const itemsContainer = document.getElementById('summary-items');
    const totalElement = document.getElementById('total-value');

    itemsContainer.innerHTML = '';

    // Sandwich
    if (state.selectedSandwich) {
        const item = document.createElement('div');
        item.className = 'summary-item';

        let details = '';
        if (state.chosenIngredients.length > 0) {
            details = `<div class="summary-item-details">Com: ${state.chosenIngredients.join(', ')}</div>`;
        }

        if (state.selectedExtras.length > 0) {
            const extrasText = state.selectedExtras.map(e => e.nome).join(', ');
            details += `<div class="summary-item-details">Extras: ${extrasText}</div>`;
        }

        item.innerHTML = `
            <div class="summary-item-name">
                ${state.selectedSandwich.nome}
                ${details}
            </div>
            <span class="summary-item-price">${formatPrice(state.selectedSandwich.preco)}</span>
        `;
        itemsContainer.appendChild(item);
    }

    // Extras (prices)
    state.selectedExtras.forEach(extra => {
        const item = document.createElement('div');
        item.className = 'summary-item';
        item.innerHTML = `
            <div class="summary-item-name">+ ${extra.nome}</div>
            <span class="summary-item-price">${formatPrice(extra.preco)}</span>
        `;
        itemsContainer.appendChild(item);
    });

    // Drink
    if (state.selectedDrink) {
        const item = document.createElement('div');
        item.className = 'summary-item';
        item.innerHTML = `
            <div class="summary-item-name">${state.selectedDrink.nome}</div>
            <span class="summary-item-price">${formatPrice(state.selectedDrink.preco)}</span>
        `;
        itemsContainer.appendChild(item);
    }

    // Sauces
    state.selectedSauces.forEach(sauce => {
        const item = document.createElement('div');
        item.className = 'summary-item';
        item.innerHTML = `
            <div class="summary-item-name">${sauce.nome}</div>
            <span class="summary-item-price">${formatPrice(sauce.preco)}</span>
        `;
        itemsContainer.appendChild(item);
    });

    // Total
    totalElement.textContent = formatPrice(calculateTotal());
}

// ========== WHATSAPP FUNCTION ==========
function sendToWhatsApp(formData) {
    let message = '*🍔 NOVO PEDIDO JANUWAY DELIVERY*\n\n';

    // Sandwich
    if (state.selectedSandwich) {
        message += `*Sanduíche:* ${state.selectedSandwich.nome}\n`;
        message += `Preço: ${formatPrice(state.selectedSandwich.preco)}\n`;

        if (state.chosenIngredients.length > 0) {
            message += `Ingredientes escolhidos: ${state.chosenIngredients.join(', ')}\n`;
        }
        message += '\n';
    }

    // Extras
    if (state.selectedExtras.length > 0) {
        message += '*Extras:*\n';
        state.selectedExtras.forEach(extra => {
            message += `- ${extra.nome} (${formatPrice(extra.preco)})\n`;
        });
        message += '\n';
    }

    // Drink
    if (state.selectedDrink) {
        message += `*Bebida:* ${state.selectedDrink.nome} (${formatPrice(state.selectedDrink.preco)})\n\n`;
    }

    // Sauces
    if (state.selectedSauces.length > 0) {
        message += '*Molhos:*\n';
        state.selectedSauces.forEach(sauce => {
            message += `- ${sauce.nome} (${formatPrice(sauce.preco)})\n`;
        });
        message += '\n';
    }

    // Total
    message += `*TOTAL: ${formatPrice(calculateTotal())}*\n\n`;

    // Customer info
    message += '*📍 DADOS DE ENTREGA*\n';
    message += `Nome: ${formData.name}\n`;
    message += `Endereço: ${formData.address}\n`;
    message += `Bairro: ${formData.neighborhood}\n`;
    message += `Referência: ${formData.reference}\n`;
    message += `Pagamento: ${formData.payment}\n`;

    if (formData.notes) {
        message += `\n*Observações:* ${formData.notes}\n`;
    }

    const whatsappNumber = '5538991254708';
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.location.href = whatsappURL;
}

// ========== EVENT LISTENERS ==========
function setupEventListeners() {
    // Welcome screen
    document.getElementById('btn-start').addEventListener('click', () => {
        showScreen('step1');
        renderSandwiches();
    });

    // Step 2 navigation
    document.getElementById('back-step2').addEventListener('click', () => {
        showScreen('step1');
    });

    document.getElementById('btn-continue-step2').addEventListener('click', () => {
        showScreen('step3');
        renderDrinks();
    });

    // Step 3 navigation
    document.getElementById('back-step3').addEventListener('click', () => {
        showScreen('step2');
    });

    document.getElementById('btn-continue-step3').addEventListener('click', () => {
        showScreen('step4');
        renderSauces();
    });

    document.getElementById('btn-skip-drinks').addEventListener('click', () => {
        state.selectedDrink = null;
        showScreen('step4');
        renderSauces();
    });

    // Step 4 navigation
    document.getElementById('back-step4').addEventListener('click', () => {
        showScreen('step3');
    });

    document.getElementById('btn-continue-step4').addEventListener('click', () => {
        showScreen('step5');
        renderOrderSummary();
    });

    document.getElementById('btn-skip-sauces').addEventListener('click', () => {
        state.selectedSauces = [];
        showScreen('step5');
        renderOrderSummary();
    });

    // Step 5 navigation
    document.getElementById('back-step5').addEventListener('click', () => {
        showScreen('step4');
    });

    // Form submission
    document.getElementById('delivery-form').addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = {
            name: document.getElementById('name').value,
            address: document.getElementById('address').value,
            neighborhood: document.getElementById('neighborhood').value,
            reference: document.getElementById('reference').value,
            payment: document.querySelector('input[name="payment"]:checked').value,
            notes: document.getElementById('notes').value
        };

        sendToWhatsApp(formData);
    });
}

// ========== OPENING HOURS ==========
function checkOpeningHours() {
    const now = new Date();
    const day = now.getDay(); // 0 = Domingo, 1 = Segunda, etc.
    const hour = now.getHours();
    const minute = now.getMinutes();
    const currentTime = hour * 60 + minute; // Converter para minutos

    // Horário: 18:30 às 00:00 (meia-noite)
    const openingTime = 18 * 60 + 30; // 18:30 = 1110 minutos
    const closingTime = 24 * 60; // 00:00 = 1440 minutos (meia-noite)

    const statusBadge = document.getElementById('status-badge');

    // Verifica se está dentro do horário (18:30 até meia-noite)
    if (currentTime >= openingTime && currentTime < closingTime) {
        statusBadge.textContent = 'Aberto';
        statusBadge.classList.remove('closed');
        statusBadge.classList.add('open');
    } else {
        statusBadge.textContent = 'Fechado';
        statusBadge.classList.remove('open');
        statusBadge.classList.add('closed');
    }
}

// ========== HIGHLIGHTS ==========
function renderHighlights() {
    const grid = document.getElementById('highlights-grid');

    // Produtos em destaque (mais pedidos)
    const highlights = [
        { nome: 'Januway Carne Premium', preco: 28.00 },
        { nome: 'Januway Frango', preco: 25.00 },
        { nome: 'Januway Fit', preco: 23.00 },
        { nome: 'Coca-Cola Lata 220ml', preco: 4.00 }
    ];

    highlights.forEach(product => {
        const card = document.createElement('div');
        card.className = 'highlight-card';
        card.innerHTML = `
            <div class="highlight-image" style="background-image: url('${getProductImage(product.nome)}')"></div>
            <div class="highlight-info">
                <div class="highlight-name">${product.nome}</div>
                <div class="highlight-price">${formatPrice(product.preco)}</div>
            </div>
        `;

        card.addEventListener('click', () => {
            // Ao clicar no destaque, vai direto para começar pedido
            document.getElementById('btn-start').click();
        });

        grid.appendChild(card);
    });
}

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    showScreen('welcome');
    checkOpeningHours();
    renderHighlights();

    // Atualizar status a cada minuto
    setInterval(checkOpeningHours, 60000);
});
