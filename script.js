// ========================================
// CONFIGURAÇÃO DE IMAGENS
// ========================================
// IMPORTANTE: Substitua as URLs abaixo pelas suas próprias imagens!
// Você pode usar:
// 1. URLs do Unsplash (gratuito): https://unsplash.com
// 2. Suas próprias imagens hospedadas
// 3. Imagens na pasta assets/ (ex: "assets/carne-premium.jpg")

const PRODUCT_IMAGES = {
    // Sanduíches - Substitua pelas suas fotos reais!
    'Januway Carne Premium': 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=600&fit=crop',
    'Januway Frango': 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=800&h=600&fit=crop',
    'Januway Fit': 'https://images.unsplash.com/photo-1553909489-cd47e0907980?w=800&h=600&fit=crop',

    // Bebidas
    'Coca-Cola Lata 220ml': 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&h=400&fit=crop',
    'Guaraná Lata 350ml': 'https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=400&h=400&fit=crop',

    // Molhos
    'Molho Barbecue': 'https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=400&h=400&fit=crop',
    'Maionese Verde': 'https://images.unsplash.com/photo-1596040033229-a0b3b9b22e9a?w=400&h=400&fit=crop',
    'Maionese de Bacon': 'https://images.unsplash.com/photo-1596040033229-a0b3b9b22e9a?w=400&h=400&fit=crop',
    'Maionese': 'https://images.unsplash.com/photo-1596040033229-a0b3b9b22e9a?w=400&h=400&fit=crop',
    'Molho Januway': 'https://images.unsplash.com/photo-1596040033229-a0b3b9b22e9a?w=400&h=400&fit=crop',
    'Sachê Ketchup': 'https://images.unsplash.com/photo-1596040033229-a0b3b9b22e9a?w=400&h=400&fit=crop',

    // Adicionais (proteínas)
    'Carne Bovina em cubos': 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=400&h=400&fit=crop',
    'Frango em cubos temperado': 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=400&h=400&fit=crop',
    'Peito de Peru defumado': 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=400&h=400&fit=crop',

    // Adicionais (queijos)
    'Muçarela': 'https://images.unsplash.com/photo-1618164435735-413d3b066c9a?w=400&h=400&fit=crop',
    'Queijo Cheddar': 'https://images.unsplash.com/photo-1618164435735-413d3b066c9a?w=400&h=400&fit=crop',

    // Adicionais (vegetais)
    'Picles': 'https://images.unsplash.com/photo-1530297698134-626d95460d8f?w=400&h=400&fit=crop',
    'Pepino': 'https://images.unsplash.com/photo-1589927986089-35812378d34a?w=400&h=400&fit=crop',
    'Pimentão': 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=400&h=400&fit=crop',
    'Cebola Roxa': 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=400&h=400&fit=crop',
    'Tomate': 'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=400&h=400&fit=crop',
    'Alface': 'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=400&h=400&fit=crop'
};

// ========================================
// DATA - MENU ITEMS
// ========================================

const menuData = {
    sanduiches: [
        {
            id: 1,
            nome: "Januway Carne Premium",
            descricao: "Pão de 15cm, carne bovina em cubos 160g, queijo cheddar, alface, tomate, cebola roxa, pimentão verde, molho barbecue",
            ingredientes: ["Pão artesanal 15cm", "Carne bovina em cubos 160g", "Queijo cheddar", "Alface", "Tomate", "Cebola roxa", "Pimentão verde", "Molho barbecue"],
            preco: 30.00,
            categoria: "sanduiches"
        },
        {
            id: 2,
            nome: "Januway Frango",
            descricao: "Pão de 15cm, frango em cubos temperado 160g, queijo muçarela, alface, tomate, cebola roxa, picles, molho Januway",
            ingredientes: ["Pão artesanal 15cm", "Frango em cubos 160g", "Queijo muçarela", "Alface", "Tomate", "Cebola roxa", "Picles", "Molho Januway"],
            preco: 28.00,
            categoria: "sanduiches"
        },
        {
            id: 3,
            nome: "Januway Fit",
            descricao: "Pão de 15cm, peito de peru defumado, queijo muçarela, alface, tomate, pepino fresco, molho Januway",
            ingredientes: ["Pão artesanal 15cm", "Peito de peru defumado", "Queijo muçarela", "Alface", "Tomate", "Pepino fresco", "Molho Januway"],
            preco: 23.00,
            categoria: "sanduiches"
        }
    ],
    bebidas: [
        { id: 4, nome: "Coca-Cola Lata 220ml", preco: 5.00, categoria: "bebidas" },
        { id: 5, nome: "Guaraná Lata 350ml", preco: 5.00, categoria: "bebidas" }
    ],
    molhos: [
        { id: 6, nome: "Molho Barbecue", preco: 3.99, categoria: "molhos" },
        { id: 7, nome: "Maionese Verde", preco: 3.99, categoria: "molhos" },
        { id: 8, nome: "Maionese de Bacon", preco: 3.99, categoria: "molhos" },
        { id: 9, nome: "Maionese", preco: 3.99, categoria: "molhos" },
        { id: 10, nome: "Molho Januway", preco: 3.99, categoria: "molhos" },
        { id: 11, nome: "Sachê Ketchup", preco: 0.50, categoria: "molhos" }
    ],
    adicionais: [
        { id: 12, nome: "Carne Bovina em cubos", preco: 5.00, categoria: "adicionais" },
        { id: 13, nome: "Frango em cubos temperado", preco: 4.00, categoria: "adicionais" },
        { id: 14, nome: "Peito de Peru defumado", preco: 4.00, categoria: "adicionais" },
        { id: 15, nome: "Muçarela", preco: 3.00, categoria: "adicionais" },
        { id: 16, nome: "Queijo Cheddar", preco: 3.00, categoria: "adicionais" },
        { id: 17, nome: "Picles", preco: 3.00, categoria: "adicionais" },
        { id: 18, nome: "Pepino", preco: 1.00, categoria: "adicionais" },
        { id: 19, nome: "Pimentão", preco: 1.00, categoria: "adicionais" },
        { id: 20, nome: "Cebola Roxa", preco: 1.00, categoria: "adicionais" },
        { id: 21, nome: "Tomate", preco: 1.00, categoria: "adicionais" },
        { id: 22, nome: "Alface", preco: 1.00, categoria: "adicionais" }
    ]
};

// ========================================
// STATE MANAGEMENT
// ========================================

let currentStep = 0;
let order = {
    sandwich: null,
    removedIngredients: [],
    addedExtras: [],
    drinks: [],
    sauces: []
};

// ========================================
// UTILITY FUNCTIONS
// ========================================

function formatCurrency(value) {
    return `R$ ${value.toFixed(2).replace('.', ',')}`;
}

function getProductImage(productName) {
    return PRODUCT_IMAGES[productName] || 'https://via.placeholder.com/400x300/1a4d2e/f3ec19?text=' + encodeURIComponent(productName);
}

function calculateTotal() {
    let total = 0;

    if (order.sandwich) {
        total += order.sandwich.preco;
    }

    order.addedExtras.forEach(extra => {
        total += extra.preco * (extra.quantity || 1);
    });

    order.drinks.forEach(drink => {
        total += drink.preco * (drink.quantity || 1);
    });

    order.sauces.forEach(sauce => {
        total += sauce.preco * (sauce.quantity || 1);
    });

    return total;
}

// ========================================
// STEP NAVIGATION
// ========================================

function showStep(stepNumber) {
    // Hide all screens
    document.getElementById('welcome-screen').style.display = 'none';
    for (let i = 1; i <= 5; i++) {
        document.getElementById(`step-${i}`).style.display = 'none';
    }

    // Show current step
    if (stepNumber === 0) {
        document.getElementById('welcome-screen').style.display = 'block';
        document.getElementById('progress-container').style.display = 'none';
    } else {
        document.getElementById(`step-${stepNumber}`).style.display = 'block';
        document.getElementById('progress-container').style.display = 'block';
        updateProgressBar(stepNumber);
    }

    currentStep = stepNumber;
    window.scrollTo(0, 0);
}

function updateProgressBar(stepNumber) {
    const progressFill = document.getElementById('progress-fill');
    const progressSteps = document.querySelectorAll('.progress-step');

    const percentage = ((stepNumber - 1) / 4) * 100;
    progressFill.style.width = percentage + '%';

    progressSteps.forEach((step, index) => {
        if (index < stepNumber) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    });
}

// ========================================
// STEP 1: CHOOSE SANDWICH
// ========================================

function renderSandwiches() {
    const grid = document.getElementById('sandwiches-grid');
    grid.innerHTML = menuData.sanduiches.map(sandwich => `
        <div class="product-card sandwich-card" onclick="selectSandwich(${sandwich.id})">
            <div class="product-image" style="background-image: url('${getProductImage(sandwich.nome)}')"></div>
            <div class="product-info">
                <h3 class="product-name">${sandwich.nome}</h3>
                <p class="product-description">${sandwich.descricao}</p>
                <div class="product-price">${formatCurrency(sandwich.preco)}</div>
                <button class="btn btn-primary btn-select">Selecionar</button>
            </div>
        </div>
    `).join('');
}

function selectSandwich(sandwichId) {
    const sandwich = menuData.sanduiches.find(s => s.id === sandwichId);
    order.sandwich = sandwich;
    order.removedIngredients = []; // Reset
    showStep(2);
    renderCustomization();
}

// ========================================
// STEP 2: CUSTOMIZE SANDWICH
// ========================================

function renderCustomization() {
    // Display selected sandwich
    const display = document.getElementById('selected-sandwich-display');
    display.innerHTML = `
        <div class="selected-item">
            <div class="selected-image" style="background-image: url('${getProductImage(order.sandwich.nome)}')"></div>
            <div class="selected-info">
                <h3>${order.sandwich.nome}</h3>
                <p class="price">${formatCurrency(order.sandwich.preco)}</p>
            </div>
        </div>
    `;

    // Render ingredients to remove
    const ingredientsList = document.getElementById('remove-ingredients');
    ingredientsList.innerHTML = order.sandwich.ingredientes
        .filter(ing => !ing.includes('Pão')) // Não pode remover o pão
        .map(ingredient => `
            <label class="ingredient-checkbox">
                <input type="checkbox"
                       value="${ingredient}"
                       onchange="toggleIngredient('${ingredient}')"
                       ${order.removedIngredients.includes(ingredient) ? 'checked' : ''}>
                <span class="checkbox-custom"></span>
                <span class="ingredient-name">${ingredient}</span>
            </label>
        `).join('');

    // Render extras to add
    const extrasGrid = document.getElementById('add-extras');
    extrasGrid.innerHTML = menuData.adicionais.map(extra => {
        const existingExtra = order.addedExtras.find(e => e.id === extra.id);
        const quantity = existingExtra ? existingExtra.quantity : 0;

        return `
            <div class="extra-card ${quantity > 0 ? 'selected' : ''}">
                <div class="extra-image" style="background-image: url('${getProductImage(extra.nome)}')"></div>
                <div class="extra-info">
                    <h4>${extra.nome}</h4>
                    <p class="extra-price">+${formatCurrency(extra.preco)}</p>
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="changeExtraQuantity(${extra.id}, -1)">−</button>
                        <span class="quantity-display">${quantity}</span>
                        <button class="quantity-btn" onclick="changeExtraQuantity(${extra.id}, 1)">+</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function toggleIngredient(ingredient) {
    const index = order.removedIngredients.indexOf(ingredient);
    if (index === -1) {
        order.removedIngredients.push(ingredient);
    } else {
        order.removedIngredients.splice(index, 1);
    }
}

function changeExtraQuantity(extraId, delta) {
    const extra = menuData.adicionais.find(e => e.id === extraId);
    const existingExtra = order.addedExtras.find(e => e.id === extraId);

    if (existingExtra) {
        existingExtra.quantity += delta;
        if (existingExtra.quantity <= 0) {
            order.addedExtras = order.addedExtras.filter(e => e.id !== extraId);
        }
    } else if (delta > 0) {
        order.addedExtras.push({ ...extra, quantity: 1 });
    }

    renderCustomization();
}

// ========================================
// STEP 3: CHOOSE DRINK
// ========================================

function renderDrinks() {
    const grid = document.getElementById('drinks-grid');
    grid.innerHTML = menuData.bebidas.map(drink => {
        const existingDrink = order.drinks.find(d => d.id === drink.id);
        const quantity = existingDrink ? existingDrink.quantity : 0;

        return `
            <div class="product-card drink-card ${quantity > 0 ? 'selected' : ''}">
                <div class="product-image" style="background-image: url('${getProductImage(drink.nome)}')"></div>
                <div class="product-info">
                    <h3 class="product-name">${drink.nome}</h3>
                    <div class="product-price">${formatCurrency(drink.preco)}</div>
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="changeDrinkQuantity(${drink.id}, -1)">−</button>
                        <span class="quantity-display">${quantity}</span>
                        <button class="quantity-btn" onclick="changeDrinkQuantity(${drink.id}, 1)">+</button>
                    </div>
                    ${quantity > 0 ? '<div class="selected-badge">✓ Adicionado</div>' : ''}
                </div>
            </div>
        `;
    }).join('');
}

function changeDrinkQuantity(drinkId, delta) {
    const drink = menuData.bebidas.find(d => d.id === drinkId);
    const existingDrink = order.drinks.find(d => d.id === drinkId);

    if (existingDrink) {
        existingDrink.quantity += delta;
        if (existingDrink.quantity <= 0) {
            order.drinks = order.drinks.filter(d => d.id !== drinkId);
        }
    } else if (delta > 0) {
        order.drinks.push({ ...drink, quantity: 1 });
    }

    renderDrinks();
}

// ========================================
// STEP 4: CHOOSE SAUCES
// ========================================

function renderSauces() {
    const grid = document.getElementById('sauces-grid');
    grid.innerHTML = menuData.molhos.map(sauce => {
        const existingSauce = order.sauces.find(s => s.id === sauce.id);
        const quantity = existingSauce ? existingSauce.quantity : 0;

        return `
            <div class="extra-card ${quantity > 0 ? 'selected' : ''}">
                <div class="extra-image" style="background-image: url('${getProductImage(sauce.nome)}')"></div>
                <div class="extra-info">
                    <h4>${sauce.nome}</h4>
                    <p class="extra-price">+${formatCurrency(sauce.preco)}</p>
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="changeSauceQuantity(${sauce.id}, -1)">−</button>
                        <span class="quantity-display">${quantity}</span>
                        <button class="quantity-btn" onclick="changeSauceQuantity(${sauce.id}, 1)">+</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function changeSauceQuantity(sauceId, delta) {
    const sauce = menuData.molhos.find(s => s.id === sauceId);
    const existingSauce = order.sauces.find(s => s.id === sauceId);

    if (existingSauce) {
        existingSauce.quantity += delta;
        if (existingSauce.quantity <= 0) {
            order.sauces = order.sauces.filter(s => s.id !== sauceId);
        }
    } else if (delta > 0) {
        order.sauces.push({ ...sauce, quantity: 1 });
    }

    renderSauces();
}

// ========================================
// STEP 5: DELIVERY & SUMMARY
// ========================================

function renderOrderSummary() {
    const summaryItems = document.getElementById('final-summary-items');
    const finalTotal = document.getElementById('final-total');

    let html = '';

    // Sandwich
    if (order.sandwich) {
        html += `<div class="summary-item">
            <span>${order.sandwich.nome}</span>
            <span>${formatCurrency(order.sandwich.preco)}</span>
        </div>`;

        if (order.removedIngredients.length > 0) {
            html += `<div class="summary-note">Sem: ${order.removedIngredients.join(', ')}</div>`;
        }
    }

    // Extras
    order.addedExtras.forEach(extra => {
        html += `<div class="summary-item">
            <span>${extra.quantity}x ${extra.nome}</span>
            <span>${formatCurrency(extra.preco * extra.quantity)}</span>
        </div>`;
    });

    // Drinks
    order.drinks.forEach(drink => {
        html += `<div class="summary-item">
            <span>${drink.quantity}x ${drink.nome}</span>
            <span>${formatCurrency(drink.preco * drink.quantity)}</span>
        </div>`;
    });

    // Sauces
    order.sauces.forEach(sauce => {
        html += `<div class="summary-item">
            <span>${sauce.quantity}x ${sauce.nome}</span>
            <span>${formatCurrency(sauce.preco * sauce.quantity)}</span>
        </div>`;
    });

    summaryItems.innerHTML = html;
    finalTotal.textContent = formatCurrency(calculateTotal());
}

// ========================================
// WHATSAPP MESSAGE
// ========================================

function generateWhatsAppMessage(customerData) {
    let message = '🍔 *NOVO PEDIDO - JANUWAY*\n\n';
    message += '*PEDIDO:*\n';

    // Sandwich
    if (order.sandwich) {
        message += `• ${order.sandwich.nome} - ${formatCurrency(order.sandwich.preco)}\n`;

        if (order.removedIngredients.length > 0) {
            message += `  ⚠️ Sem: ${order.removedIngredients.join(', ')}\n`;
        }

        if (order.addedExtras.length > 0) {
            order.addedExtras.forEach(extra => {
                message += `  ➕ ${extra.quantity}x ${extra.nome} - ${formatCurrency(extra.preco * extra.quantity)}\n`;
            });
        }
    }

    // Drinks
    if (order.drinks.length > 0) {
        message += '\n*BEBIDAS:*\n';
        order.drinks.forEach(drink => {
            message += `• ${drink.quantity}x ${drink.nome} - ${formatCurrency(drink.preco * drink.quantity)}\n`;
        });
    }

    // Sauces
    if (order.sauces.length > 0) {
        message += '\n*MOLHOS EXTRAS:*\n';
        order.sauces.forEach(sauce => {
            message += `• ${sauce.quantity}x ${sauce.nome} - ${formatCurrency(sauce.preco * sauce.quantity)}\n`;
        });
    }

    const total = calculateTotal();
    message += `\n*TOTAL: ${formatCurrency(total)}*\n\n`;
    message += '──────────────────\n\n';
    message += '👤 *DADOS DO CLIENTE:*\n';
    message += `Nome: ${customerData.name}\n`;
    message += `Endereço: ${customerData.address}\n`;
    message += `Bairro: ${customerData.neighborhood}\n`;
    message += `Referência: ${customerData.reference}\n\n`;
    message += `💳 *Pagamento:* ${customerData.payment}\n`;

    if (customerData.notes) {
        message += `\n📝 *Observações:* ${customerData.notes}`;
    }

    return message;
}

function sendToWhatsApp(customerData) {
    const message = generateWhatsAppMessage(customerData);
    const whatsappURL = `https://wa.me/5573936180266?text=${encodeURIComponent(message)}`;

    // Show loading
    document.getElementById('loading-overlay').style.display = 'flex';

    setTimeout(() => {
        window.open(whatsappURL, '_blank');

        setTimeout(() => {
            document.getElementById('loading-overlay').style.display = 'none';
            alert('✅ Pedido enviado! Verifique o WhatsApp para confirmar o envio.');
            location.reload(); // Reset para novo pedido
        }, 1500);
    }, 1000);
}

// ========================================
// EVENT LISTENERS
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Start order
    document.getElementById('start-order').addEventListener('click', () => {
        showStep(1);
        renderSandwiches();
    });

    // Step 2 -> Step 3
    document.getElementById('next-to-step-3').addEventListener('click', () => {
        showStep(3);
        renderDrinks();
    });

    // Step 3 -> Step 4
    document.getElementById('skip-drinks').addEventListener('click', () => {
        showStep(4);
        renderSauces();
    });

    // Step 4 -> Step 5
    document.getElementById('skip-sauces').addEventListener('click', () => {
        showStep(5);
        renderOrderSummary();
    });

    // Back buttons
    document.getElementById('back-to-step-1').addEventListener('click', () => {
        showStep(1);
        renderSandwiches();
    });

    document.getElementById('back-to-step-2').addEventListener('click', () => {
        showStep(2);
        renderCustomization();
    });

    document.getElementById('back-to-step-3').addEventListener('click', () => {
        showStep(3);
        renderDrinks();
    });

    document.getElementById('back-to-step-4').addEventListener('click', () => {
        showStep(4);
        renderSauces();
    });

    // Submit form
    document.getElementById('delivery-form').addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const customerData = {
            name: formData.get('name'),
            address: formData.get('address'),
            neighborhood: formData.get('neighborhood'),
            reference: formData.get('reference'),
            payment: formData.get('payment'),
            notes: formData.get('notes') || ''
        };

        sendToWhatsApp(customerData);
    });
});
