// ========================================
// DATA - MENU ITEMS
// ========================================

const menuData = {
    sanduiches: [
        {
            id: 1,
            nome: "Januway Carne Premium",
            descricao: "Pão de 15cm, carne bovina em cubos 160g, queijo cheddar, alface, tomate, cebola roxa, pimentão verde, molho barbecue",
            preco: 30.00,
            categoria: "sanduiches"
        },
        {
            id: 2,
            nome: "Januway Frango",
            descricao: "Pão de 15cm, frango em cubos temperado 160g, queijo muçarela, alface, tomate, cebola roxa, picles, molho Januway",
            preco: 28.00,
            categoria: "sanduiches"
        },
        {
            id: 3,
            nome: "Januway Fit",
            descricao: "Pão de 15cm, peito de peru defumado, queijo muçarela, alface, tomate, pepino fresco, molho Januway",
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

let cart = [];
let productQuantities = {};

// Initialize quantities for all products
Object.values(menuData).flat().forEach(product => {
    productQuantities[product.id] = 0;
});

// ========================================
// UTILITY FUNCTIONS
// ========================================

function formatCurrency(value) {
    return `R$ ${value.toFixed(2).replace('.', ',')}`;
}

function updateCartUI() {
    const badge = document.getElementById('cart-badge');
    const total = document.getElementById('cart-total');
    const floatingCart = document.getElementById('floating-cart');

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalValue = cart.reduce((sum, item) => sum + (item.preco * item.quantity), 0);

    badge.textContent = totalItems;
    total.textContent = formatCurrency(totalValue);

    // Pulse animation on update
    floatingCart.classList.add('pulse');
    setTimeout(() => floatingCart.classList.remove('pulse'), 500);
}

function updateCartModal() {
    const cartItems = document.getElementById('cart-items');
    const cartEmpty = document.getElementById('cart-empty');
    const subtotal = document.getElementById('subtotal');
    const totalEl = document.getElementById('total');

    if (cart.length === 0) {
        cartItems.classList.remove('has-items');
        cartEmpty.style.display = 'block';
        return;
    }

    cartItems.classList.add('has-items');
    cartEmpty.style.display = 'none';

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.nome}</div>
                <div class="cart-item-details">${item.quantity}x ${formatCurrency(item.preco)}</div>
            </div>
            <div class="cart-item-actions">
                <div class="cart-item-price">${formatCurrency(item.preco * item.quantity)}</div>
                <button class="btn-remove" onclick="removeFromCart(${item.id})" aria-label="Remover item">
                    🗑️
                </button>
            </div>
        </div>
    `).join('');

    const totalValue = cart.reduce((sum, item) => sum + (item.preco * item.quantity), 0);
    subtotal.textContent = formatCurrency(totalValue);
    totalEl.textContent = formatCurrency(totalValue);
}

// ========================================
// CART OPERATIONS
// ========================================

function addToCart(productId) {
    const quantity = productQuantities[productId];

    if (quantity === 0) {
        alert('Por favor, selecione a quantidade antes de adicionar ao carrinho.');
        return;
    }

    const product = Object.values(menuData).flat().find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            ...product,
            quantity: quantity
        });
    }

    // Reset quantity display
    productQuantities[productId] = 0;
    updateQuantityDisplay(productId);

    updateCartUI();
    updateCartModal();

    // Add animation to button
    const btn = event.target;
    btn.classList.add('adding');
    setTimeout(() => btn.classList.remove('adding'), 500);

    // Save to localStorage
    saveCart();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
    updateCartModal();
    saveCart();
}

function incrementQuantity(productId) {
    productQuantities[productId]++;
    updateQuantityDisplay(productId);
}

function decrementQuantity(productId) {
    if (productQuantities[productId] > 0) {
        productQuantities[productId]--;
        updateQuantityDisplay(productId);
    }
}

function updateQuantityDisplay(productId) {
    const display = document.querySelector(`[data-quantity-display="${productId}"]`);
    if (display) {
        display.textContent = productQuantities[productId];
    }
}

// ========================================
// RENDER FUNCTIONS
// ========================================

function renderProducts(category, containerId) {
    const container = document.getElementById(containerId);
    const products = menuData[category];

    container.innerHTML = products.map(product => `
        <div class="product-card">
            <h3 class="product-name">${product.nome}</h3>
            ${product.descricao ? `<p class="product-description">${product.descricao}</p>` : ''}
            <div class="product-price">${formatCurrency(product.preco)}</div>
            <div class="product-actions">
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="decrementQuantity(${product.id})" aria-label="Diminuir quantidade">−</button>
                    <span class="quantity-display" data-quantity-display="${product.id}">0</span>
                    <button class="quantity-btn" onclick="incrementQuantity(${product.id})" aria-label="Aumentar quantidade">+</button>
                </div>
                <button class="btn btn-add-to-cart" onclick="addToCart(${product.id})">
                    Adicionar ao Carrinho
                </button>
            </div>
        </div>
    `).join('');
}

function initializeMenu() {
    renderProducts('sanduiches', 'sanduiches-grid');
    renderProducts('bebidas', 'bebidas-grid');
    renderProducts('molhos', 'molhos-grid');
    renderProducts('adicionais', 'adicionais-grid');
}

// ========================================
// MODAL MANAGEMENT
// ========================================

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ========================================
// CHECKOUT PROCESS
// ========================================

function proceedToCheckout() {
    if (cart.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }

    closeModal('cart-modal');
    setTimeout(() => openModal('checkout-modal'), 300);
}

function submitOrder(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const customerData = {
        name: formData.get('name'),
        address: formData.get('address'),
        neighborhood: formData.get('neighborhood'),
        reference: formData.get('reference'),
        payment: formData.get('payment'),
        notes: formData.get('notes') || ''
    };

    // Generate WhatsApp message
    const whatsappMessage = generateWhatsAppMessage(customerData);
    const whatsappURL = `https://wa.me/5573936180266?text=${encodeURIComponent(whatsappMessage)}`;

    // Close checkout modal
    closeModal('checkout-modal');

    // Show success modal
    setTimeout(() => {
        openModal('success-modal');
        triggerConfetti();

        // Auto-redirect to WhatsApp after 2 seconds
        setTimeout(() => {
            window.open(whatsappURL, '_blank');
        }, 2000);

        // Store WhatsApp URL for manual button click
        document.getElementById('open-whatsapp').onclick = () => {
            window.open(whatsappURL, '_blank');
        };
    }, 300);

    // Clear cart
    cart = [];
    updateCartUI();
    updateCartModal();
    saveCart();

    // Reset form
    event.target.reset();
}

function generateWhatsAppMessage(customerData) {
    let message = '🍔 *NOVO PEDIDO - JANUWAY*\n\n';
    message += '*PEDIDO:*\n';

    cart.forEach(item => {
        message += `${item.quantity}x ${item.nome} - ${formatCurrency(item.preco * item.quantity)}\n`;
    });

    const total = cart.reduce((sum, item) => sum + (item.preco * item.quantity), 0);
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

// ========================================
// CONFETTI ANIMATION
// ========================================

function triggerConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.classList.add('active');

    const confetti = [];
    const confettiCount = 100;
    const colors = ['#1a4d2e', '#f3ec19', '#ff6b6b', '#4ecdc4', '#45b7d1'];

    for (let i = 0; i < confettiCount; i++) {
        confetti.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            r: Math.random() * 6 + 2,
            d: Math.random() * confettiCount,
            color: colors[Math.floor(Math.random() * colors.length)],
            tilt: Math.random() * 10 - 10,
            tiltAngleIncremental: Math.random() * 0.07 + 0.05,
            tiltAngle: 0
        });
    }

    function drawConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        confetti.forEach((c, i) => {
            ctx.beginPath();
            ctx.lineWidth = c.r / 2;
            ctx.strokeStyle = c.color;
            ctx.moveTo(c.x + c.tilt + c.r / 3, c.y);
            ctx.lineTo(c.x + c.tilt, c.y + c.tilt + c.r / 5);
            ctx.stroke();
        });

        updateConfetti();
    }

    function updateConfetti() {
        confetti.forEach((c, i) => {
            c.tiltAngle += c.tiltAngleIncremental;
            c.y += (Math.cos(c.d) + 3 + c.r / 2) / 2;
            c.x += Math.sin(c.d);
            c.tilt = Math.sin(c.tiltAngle - i / 3) * 15;

            if (c.y > canvas.height) {
                confetti[i] = {
                    x: Math.random() * canvas.width,
                    y: -30,
                    r: c.r,
                    d: c.d,
                    color: c.color,
                    tilt: c.tilt,
                    tiltAngleIncremental: c.tiltAngleIncremental,
                    tiltAngle: c.tiltAngle
                };
            }
        });
    }

    let animationId;
    let duration = 3000;
    let startTime = Date.now();

    function animate() {
        if (Date.now() - startTime < duration) {
            drawConfetti();
            animationId = requestAnimationFrame(animate);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            canvas.classList.remove('active');
            cancelAnimationFrame(animationId);
        }
    }

    animate();
}

// ========================================
// LOCAL STORAGE
// ========================================

function saveCart() {
    localStorage.setItem('januway-cart', JSON.stringify(cart));
}

function loadCart() {
    const savedCart = localStorage.getItem('januway-cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartUI();
    }
}

// ========================================
// EVENT LISTENERS
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize menu
    initializeMenu();

    // Load saved cart
    loadCart();

    // Floating cart button
    document.getElementById('floating-cart').addEventListener('click', () => {
        openModal('cart-modal');
        updateCartModal();
    });

    // Close modal buttons
    document.getElementById('close-cart').addEventListener('click', () => {
        closeModal('cart-modal');
    });

    document.getElementById('close-checkout').addEventListener('click', () => {
        closeModal('checkout-modal');
    });

    // Close modal when clicking outside
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal.id);
            }
        });
    });

    // Proceed to checkout
    document.getElementById('proceed-checkout').addEventListener('click', proceedToCheckout);

    // Submit order form
    document.getElementById('checkout-form').addEventListener('submit', submitOrder);
});

// ========================================
// KEYBOARD ACCESSIBILITY
// ========================================

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const activeModal = document.querySelector('.modal.active');
        if (activeModal) {
            closeModal(activeModal.id);
        }
    }
});
