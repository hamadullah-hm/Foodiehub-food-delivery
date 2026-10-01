// ==========================================================================
// FOODIE - POPULAR DISHES, CUSTOMIZATION MODAL & CART FUNCTIONALITY
// ==========================================================================

// Dishes Database
const dishesData = [
    {
        id: 1,
        slug: "burgers",
        name: "Classic Beef Burger",
        category: "Burgers",
        image: "./Gallery/Classic Beef Burger.jpg",
        desc: "Juicy grilled beef patty with melted cheese, fresh veggies and our secret signature sauce.",
        rating: 4.8,
        reviews: 95,
        badge: "🔥 Bestseller",
        sizes: [
            { name: "Single Patty", label: "Small (Single Patty)", price: 699, default: true },
            { name: "Double Patty", label: "Medium (Double Patty)", price: 899 },
            { name: "Triple Beast", label: "Large (Triple Monster)", price: 1099 }
        ],
        addons: [
            { id: "cheese", name: "Extra Cheddar Cheese", price: 90 },
            { id: "sauce", name: "Special Garlic Mayo Dip", price: 50 },
            { id: "fries", name: "Add Fries & Drink Combo", price: 220 }
        ]
    },
    {
        id: 2,
        slug: "pizza",
        name: "Pepperoni Pizza",
        category: "Pizza",
        image: "./Gallery/popular pizza.jpg",
        desc: "Freshly baked pizza topped with rich tomato sauce, premium melted mozzarella and spicy Italian pepperoni.",
        rating: 4.9,
        reviews: 140,
        badge: "⭐ Chef's Special",
        sizes: [
            { name: "Small", label: "Small (8 Inches - 4 Slices)", price: 899 },
            { name: "Medium", label: "Medium (11 Inches - 6 Slices)", price: 1199, default: true },
            { name: "Large", label: "Large (14 Inches - 8 Slices)", price: 1599 }
        ],
        addons: [
            { id: "stuffed_crust", name: "Cheese Stuffed Crust", price: 200 },
            { id: "extra_cheese", name: "Extra Mozzarella Layer", price: 150 },
            { id: "dip", name: "Ranch Dipping Sauce", price: 60 }
        ]
    },
    {
        id: 3,
        slug: "chicken",
        name: "Crispy Fried Chicken",
        category: "Fried Chicken",
        image: "./Gallery/Crispy Fried Chicken.jpg",
        desc: "Golden crispy fried chicken with our signature crunchy coating and juicy tenderness in every single bite.",
        rating: 4.9,
        reviews: 85,
        badge: "🍗 Crispy & Hot",
        sizes: [
            { name: "Small", label: "Small (4 Pieces + 1 Dip)", price: 799 },
            { name: "Medium", label: "Medium (8 Pieces + 2 Dips)", price: 1499, default: true },
            { name: "Large", label: "Large (12 Pieces Jumbo Bucket)", price: 2099 }
        ],
        addons: [
            { id: "spicy_seasoning", name: "Spicy Peri-Peri Dust", price: 50 },
            { id: "coleslaw", name: "Fresh Coleslaw Cup", price: 90 },
            { id: "dinner_rolls", name: "2 Butter Dinner Rolls", price: 80 }
        ]
    },
    {
        id: 4,
        slug: "shawarma",
        name: "Chicken Shawarma",
        category: "Shawarma",
        image: "./Gallery/Chicken Shawarma2.jpg",
        desc: "Tender grilled chicken wrapped in warm pita with crunchy pickles, crisp veggies and velvety garlic toum.",
        rating: 4.9,
        reviews: 110,
        badge: "🌯 Top Choice",
        sizes: [
            { name: "Small", label: "Small (Regular Pita Wrap)", price: 399, default: true },
            { name: "Medium", label: "Medium (Jumbo Arabic Wrap)", price: 549 },
            { name: "Large", label: "Large (Platter with Fries & Drink)", price: 699 }
        ],
        addons: [
            { id: "extra_toum", name: "Extra Garlic Toum Sauce", price: 40 },
            { id: "cheese_melt", name: "Melted Cheese Inside", price: 70 },
            { id: "jalapenos", name: "Pickled Jalapeños", price: 50 }
        ]
    },
    {
        id: 5,
        slug: "fries",
        name: "Loaded Cheese Fries",
        category: "Fries",
        image: "./Gallery/Loaded Fries.jpg",
        desc: "Crispy golden potato fries drenched in hot cheddar sauce, topped with seasoned chicken cubes and jalapenos.",
        rating: 4.9,
        reviews: 125,
        badge: "🧀 Extra Cheesy",
        sizes: [
            { name: "Small", label: "Small (Personal Box)", price: 499 },
            { name: "Medium", label: "Medium (Regular Bowl)", price: 699, default: true },
            { name: "Large", label: "Large (Party Mega Box)", price: 899 }
        ],
        addons: [
            { id: "extra_cheese", name: "Double Cheese Sauce", price: 90 },
            { id: "bacon_bits", name: "Crispy Chicken Bacon Bits", price: 100 },
            { id: "chipotle", name: "Smoky Chipotle Drizzle", price: 60 }
        ]
    },
    {
        id: 6,
        slug: "desserts",
        name: "Chocolate Fudge Cake",
        category: "Desserts",
        image: "./Gallery/Chocolate Cake (2).jpg",
        desc: "Moist and ultra-rich dark chocolate sponge cake layered generously with smooth melted chocolate ganache.",
        rating: 4.9,
        reviews: 78,
        badge: "🍰 Sweet Tooth",
        sizes: [
            { name: "Small", label: "Small (1 Generous Slice)", price: 399 },
            { name: "Medium", label: "Medium (2 Slices Combo)", price: 699, default: true },
            { name: "Large", label: "Large (Full 1-Pound Cake)", price: 1299 }
        ],
        addons: [
            { id: "ice_cream", name: "Vanilla Ice Cream Scoop", price: 120 },
            { id: "hot_fudge", name: "Warm Belgian Fudge Drizzle", price: 60 },
            { id: "choco_chips", name: "Crispy Choco Pearls", price: 40 }
        ]
    }
];

// Current State
let currentModalDish = null;
let selectedSizeIndex = 0;
let selectedAddonIds = new Set();
let modalQuantity = 1;
let cartItems = [];

// Initialize DOM on Load
function initFoodieApp() {
    renderPopularDishes();
    updateCartUI();
    initAuthSystem();
    initNavScrollSpy();
    initMobileNavListeners();
    initScrollReveal();
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initFoodieApp);
} else {
    initFoodieApp();
}

// Render the 6 Popular Dishes Cards
function renderPopularDishes() {
    const container = document.getElementById("popular-dishes-container");
    if (!container) return;

    const revealClasses = [
        "reveal-left",
        "reveal-up delay-1",
        "reveal-right delay-2",
        "reveal-left delay-1",
        "reveal-up delay-2",
        "reveal-right delay-3"
    ];

    container.innerHTML = dishesData.map((dish, index) => {
        // Find default or lowest price for display
        const displayPrice = dish.sizes[0].price;
        const revealClass = revealClasses[index % revealClasses.length];
        return `
            <div class="dish-card ${revealClass}" id="dish-${dish.slug}" data-dish-id="${dish.id}">
                <div class="dish-img-wrap">
                    <img src="${dish.image}" alt="${dish.name}" loading="lazy">
                    <span class="dish-badge">${dish.badge}</span>
                    <button class="dish-fav-btn" onclick="toggleFavorite(this, event)" title="Add to Wishlist" aria-label="Favorite">
                        <i class="fa-regular fa-heart"></i>
                    </button>
                </div>
                <div class="dish-content">
                    <div class="dish-header-row">
                        <h3 class="dish-title">${dish.name}</h3>
                        <div class="dish-rating">
                            <i class="fa-solid fa-star"></i>
                            <span class="rating-val">${dish.rating.toFixed(1)}</span>
                            <span class="rating-count">(${dish.reviews}+)</span>
                        </div>
                    </div>
                    <p class="dish-desc">${dish.desc}</p>
                    <div class="dish-footer-row">
                        <div class="dish-price-wrap">
                            <span class="price-prefix">From</span>
                            <div class="dish-price">
                                <span class="currency">Rs.</span>
                                <span class="amount">${displayPrice.toLocaleString()}</span>
                            </div>
                        </div>
                        <button class="add-to-cart-btn" onclick="openDishModal(${dish.id})">
                            <i class="fa-solid fa-cart-plus"></i>
                            <span>Add to Cart</span>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join("");

    // Re-observe dynamic cards
    if (typeof initScrollReveal === 'function') {
        initScrollReveal();
    }
}

// Open Dish Customization Modal
function openDishModal(dishId) {
    const dish = dishesData.find(d => d.id === dishId);
    if (!dish) return;

    currentModalDish = dish;
    // Set default size (either flagged default or first)
    const defaultIndex = dish.sizes.findIndex(s => s.default);
    selectedSizeIndex = defaultIndex >= 0 ? defaultIndex : 0;
    selectedAddonIds.clear();
    modalQuantity = 1;

    // Populate Modal Content
    document.getElementById("modal-dish-img").src = dish.image;
    document.getElementById("modal-dish-img").alt = dish.name;
    document.getElementById("modal-dish-badge").innerText = dish.badge;
    document.getElementById("modal-dish-category").innerText = dish.category;
    document.getElementById("modal-dish-title").innerText = dish.name;
    document.getElementById("modal-dish-desc").innerText = dish.desc;
    document.getElementById("modal-dish-rating").innerHTML = `
        <i class="fa-solid fa-star"></i>
        <span>${dish.rating.toFixed(1)}</span>
        <span class="modal-rev-count">(${dish.reviews} reviews)</span>
    `;

    // Render Sizes
    renderModalSizes();

    // Render Add-ons
    renderModalAddons();

    // Update Quantity and Price
    document.getElementById("modal-qty-display").innerText = modalQuantity;
    calculateModalTotal();

    // Open Modal with Animation
    const modal = document.getElementById("dish-modal");
    modal.classList.add("active");
    document.body.style.overflow = "hidden"; // Prevent background scrolling
}

// Render Modal Size Selection Buttons
function renderModalSizes() {
    const container = document.getElementById("modal-size-options");
    if (!container || !currentModalDish) return;

    container.innerHTML = currentModalDish.sizes.map((size, index) => {
        const isSelected = index === selectedSizeIndex;
        return `
            <div class="size-card ${isSelected ? 'active' : ''}" onclick="selectModalSize(${index})">
                <div class="size-info">
                    <span class="size-name">${size.label}</span>
                    <span class="size-tag">${index === 0 ? 'Small / Regular' : (index === 1 ? 'Medium / Recommended' : 'Large / Jumbo')}</span>
                </div>
                <div class="size-price">
                    <span>Rs. ${size.price.toLocaleString()}</span>
                    <div class="size-radio-circle">
                        <i class="fa-solid fa-check"></i>
                    </div>
                </div>
            </div>
        `;
    }).join("");
}

// Render Modal Add-ons
function renderModalAddons() {
    const container = document.getElementById("modal-addons-list");
    if (!container || !currentModalDish) return;

    if (!currentModalDish.addons || currentModalDish.addons.length === 0) {
        container.innerHTML = `<p class="no-addons">No additional extras for this item.</p>`;
        return;
    }

    container.innerHTML = currentModalDish.addons.map(addon => {
        const isChecked = selectedAddonIds.has(addon.id);
        return `
            <label class="addon-item ${isChecked ? 'active' : ''}">
                <div class="addon-left">
                    <input type="checkbox" ${isChecked ? 'checked' : ''} onchange="toggleModalAddon('${addon.id}')">
                    <span class="addon-name">${addon.name}</span>
                </div>
                <span class="addon-price">+Rs. ${addon.price}</span>
            </label>
        `;
    }).join("");
}

// Change Selected Size
function selectModalSize(index) {
    selectedSizeIndex = index;
    renderModalSizes();
    calculateModalTotal();
}

// Toggle Add-on
function toggleModalAddon(addonId) {
    if (selectedAddonIds.has(addonId)) {
        selectedAddonIds.delete(addonId);
    } else {
        selectedAddonIds.add(addonId);
    }
    renderModalAddons();
    calculateModalTotal();
}

// Update Modal Quantity Stepper
function updateModalQty(change) {
    const newQty = modalQuantity + change;
    if (newQty >= 1 && newQty <= 30) {
        modalQuantity = newQty;
        document.getElementById("modal-qty-display").innerText = modalQuantity;
        calculateModalTotal();
    }
}

// Calculate Modal Total Price
function calculateModalTotal() {
    if (!currentModalDish) return 0;

    const baseSizePrice = currentModalDish.sizes[selectedSizeIndex].price;
    let addonsTotal = 0;

    if (currentModalDish.addons) {
        currentModalDish.addons.forEach(addon => {
            if (selectedAddonIds.has(addon.id)) {
                addonsTotal += addon.price;
            }
        });
    }

    const itemUnitPrice = baseSizePrice + addonsTotal;
    const finalTotal = itemUnitPrice * modalQuantity;

    const priceElem = document.getElementById("modal-total-price");
    if (priceElem) {
        priceElem.innerText = `Rs. ${finalTotal.toLocaleString()}`;
    }

    return finalTotal;
}

// Close Modal
function closeDishModal() {
    const modal = document.getElementById("dish-modal");
    if (modal) {
        modal.classList.remove("active");
    }
    document.body.style.overflow = "";
    currentModalDish = null;
}

// Handle Backdrop Click
function handleBackdropClick(e) {
    if (e.target.id === "dish-modal") {
        closeDishModal();
    }
}

// Confirm and Add to Cart
function confirmAddToCart() {
    if (!currentModalDish) return;

    const size = currentModalDish.sizes[selectedSizeIndex];
    const selectedAddonsList = currentModalDish.addons 
        ? currentModalDish.addons.filter(a => selectedAddonIds.has(a.id))
        : [];

    const basePrice = size.price;
    const addonsPrice = selectedAddonsList.reduce((sum, a) => sum + a.price, 0);
    const unitPrice = basePrice + addonsPrice;

    // Unique signature to group identical items with identical size & addons
    const addonsKey = selectedAddonsList.map(a => a.id).sort().join(",");
    const itemSignature = `${currentModalDish.id}_${selectedSizeIndex}_${addonsKey}`;

    const existingIndex = cartItems.findIndex(item => item.signature === itemSignature);

    if (existingIndex > -1) {
        cartItems[existingIndex].quantity += modalQuantity;
    } else {
        cartItems.push({
            signature: itemSignature,
            dishId: currentModalDish.id,
            name: currentModalDish.name,
            image: currentModalDish.image,
            sizeName: size.name,
            sizeLabel: size.label,
            unitPrice: unitPrice,
            quantity: modalQuantity,
            addons: selectedAddonsList
        });
    }

    // Save and Update UI
    updateCartUI();

    // Show Toast
    showToast(
        "Added to Cart! 🛒",
        `${modalQuantity}x ${currentModalDish.name} (${size.name}) added to your cart.`
    );

    // Close Modal
    closeDishModal();

    // Trigger Cart Badge Bounce
    const badge = document.querySelector(".cart-badge");
    if (badge) {
        badge.classList.remove("badge-bounce");
        void badge.offsetWidth; // Trigger reflow
        badge.classList.add("badge-bounce");
    }
}

// Update Cart Badge and Drawer Content
function updateCartUI() {
    const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    
    // Update Navbar Badge
    const badges = document.querySelectorAll(".cart-badge");
    badges.forEach(badge => {
        badge.innerText = totalCount;
        badge.style.display = totalCount > 0 ? "flex" : "flex";
    });

    // Update Drawer Title Count
    const drawerCount = document.getElementById("cart-item-count");
    if (drawerCount) {
        drawerCount.innerText = totalCount;
    }

    // Render Drawer Items
    renderCartDrawerItems();
}

// Render Cart Items in Drawer
function renderCartDrawerItems() {
    const container = document.getElementById("cart-items-container");
    const footer = document.getElementById("cart-drawer-footer");
    if (!container) return;

    if (cartItems.length === 0) {
        container.innerHTML = `
            <div class="empty-cart-state">
                <div class="empty-icon"><i class="fa-solid fa-basket-shopping"></i></div>
                <h4>Your Cart is Empty</h4>
                <p>Looks like you haven't added anything to your cart yet. Explore our delicious menu!</p>
                <button class="explore-btn" onclick="closeCartDrawer(); scrollToPopular();">
                    <span>Explore Popular Dishes</span>
                    <i class="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        `;
        if (footer) footer.style.display = "none";
        return;
    }

    if (footer) footer.style.display = "block";

    let subtotal = 0;

    container.innerHTML = cartItems.map((item, index) => {
        const itemTotal = item.unitPrice * item.quantity;
        subtotal += itemTotal;

        const addonsHtml = item.addons && item.addons.length > 0
            ? `<div class="cart-item-addons">+ ${item.addons.map(a => a.name).join(", ")}</div>`
            : "";

        return `
            <div class="cart-item-card">
                <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                <div class="cart-item-info">
                    <div class="cart-item-title-row">
                        <h4 class="cart-item-title">${item.name}</h4>
                        <button class="cart-item-delete" onclick="removeCartItem(${index})" title="Remove item">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                    <div class="cart-item-size-badge">Size: ${item.sizeName}</div>
                    ${addonsHtml}
                    <div class="cart-item-bottom">
                        <div class="cart-item-qty-stepper">
                            <button type="button" class="cart-qty-btn" onclick="updateCartItemQty(${index}, -1)"><i class="fa-solid fa-minus"></i></button>
                            <span class="cart-qty-val">${item.quantity}</span>
                            <button type="button" class="cart-qty-btn" onclick="updateCartItemQty(${index}, 1)"><i class="fa-solid fa-plus"></i></button>
                        </div>
                        <div class="cart-item-total">Rs. ${itemTotal.toLocaleString()}</div>
                    </div>
                </div>
            </div>
        `;
    }).join("");

    // Update Totals
    const subtotalElem = document.getElementById("cart-subtotal");
    const grandTotalElem = document.getElementById("cart-grand-total");

    if (subtotalElem) subtotalElem.innerText = `Rs. ${subtotal.toLocaleString()}`;
    if (grandTotalElem) grandTotalElem.innerText = `Rs. ${subtotal.toLocaleString()}`;
}

// Update Cart Item Quantity in Drawer
function updateCartItemQty(index, change) {
    if (index < 0 || index >= cartItems.length) return;

    cartItems[index].quantity += change;

    if (cartItems[index].quantity <= 0) {
        cartItems.splice(index, 1);
        showToast("Item Removed", "Dish has been removed from your cart.");
    }

    updateCartUI();
}

// Remove Item from Cart
function removeCartItem(index) {
    if (index < 0 || index >= cartItems.length) return;
    const removedName = cartItems[index].name;
    cartItems.splice(index, 1);
    updateCartUI();
    showToast("Item Removed", `${removedName} removed from cart.`);
}

// Cart Drawer Open/Close
function openCartDrawer() {
    const drawer = document.getElementById("cart-drawer");
    const overlay = document.getElementById("cart-drawer-overlay");
    if (drawer && overlay) {
        drawer.classList.add("active");
        overlay.classList.add("active");
        document.body.style.overflow = "hidden";
    }
}

function closeCartDrawer() {
    const drawer = document.getElementById("cart-drawer");
    const overlay = document.getElementById("cart-drawer-overlay");
    if (drawer && overlay) {
        drawer.classList.remove("active");
        overlay.classList.remove("active");
        document.body.style.overflow = "";
    }
}

// Checkout Handler
function handleCheckout() {
    if (cartItems.length === 0) return;
    const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const grandTotal = cartItems.reduce((sum, item) => sum + (item.unitPrice * item.quantity), 0);

    alert(`🎉 Order Placed Successfully!\n\nTotal Items: ${totalCount}\nTotal Amount: Rs. ${grandTotal.toLocaleString()}\n\nThank you for ordering with Foodie! Your delicious meal is on its way.`);
    
    // Clear Cart
    cartItems = [];
    updateCartUI();
    closeCartDrawer();
}

// Toast Notification System
let toastTimeout = null;
function showToast(title, message) {
    const toast = document.getElementById("cart-toast");
    const toastTitle = document.getElementById("toast-title");
    const toastDesc = document.getElementById("toast-desc");

    if (!toast) return;

    if (toastTitle) toastTitle.innerText = title;
    if (toastDesc) toastDesc.innerText = message;

    toast.classList.add("show");

    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toast.classList.remove("show");
    }, 3200);
}

// Toggle Wishlist Button Heart
function toggleFavorite(btn, event) {
    event.stopPropagation();
    const icon = btn.querySelector("i");
    if (icon.classList.contains("fa-regular")) {
        icon.classList.remove("fa-regular");
        icon.classList.add("fa-solid");
        btn.classList.add("active");
        showToast("Saved to Favorites ❤️", "Item added to your favorite dishes.");
    } else {
        icon.classList.remove("fa-solid");
        icon.classList.add("fa-regular");
        btn.classList.remove("active");
    }
}

// Scroll Helper
function scrollToPopular() {
    const section = document.getElementById("popular-dishes");
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}

// ==========================================================================
// USER AUTHENTICATION SYSTEM (LOGIN & SIGN UP)
// ==========================================================================

const STORAGE_USERS_KEY = "foodie_users";
const STORAGE_SESSION_KEY = "foodie_current_user";

// Seed demo user if no database exists in localStorage
function initAuthSystem() {
    let existingUsers = getUsersFromStorage();
    if (existingUsers.length === 0) {
        const demoUser = {
            name: "John Doe",
            email: "demo@foodie.com",
            phone: "0300 1234567",
            password: "123456",
            createdAt: new Date().toISOString()
        };
        saveUsersToStorage([demoUser]);
    }

    // Check logged in session on page load
    checkAuthSession();

    // Close user dropdown and search dropdown when clicking anywhere outside
    document.addEventListener("click", function(e) {
        const profileMenu = document.getElementById("user-profile-menu");
        const dropdown = document.getElementById("user-dropdown");
        if (profileMenu && !profileMenu.contains(e.target)) {
            if (dropdown) dropdown.classList.remove("show");
            if (profileMenu) profileMenu.classList.remove("open");
        }

        const searchContainer = document.querySelector(".search-container");
        if (searchContainer && !searchContainer.contains(e.target)) {
            closeSearchDropdown();
        }
    });
}

function getUsersFromStorage() {
    try {
        const data = localStorage.getItem(STORAGE_USERS_KEY);
        return data ? JSON.parse(data) : [];
    } catch (e) {
        return [];
    }
}

function saveUsersToStorage(users) {
    try {
        localStorage.setItem(STORAGE_USERS_KEY, JSON.stringify(users));
    } catch (e) {
        console.error("Failed to save users in localStorage", e);
    }
}

function getCurrentUserSession() {
    try {
        const data = localStorage.getItem(STORAGE_SESSION_KEY);
        return data ? JSON.parse(data) : null;
    } catch (e) {
        return null;
    }
}

function setCurrentUserSession(user) {
    try {
        if (user) {
            localStorage.setItem(STORAGE_SESSION_KEY, JSON.stringify(user));
        } else {
            localStorage.removeItem(STORAGE_SESSION_KEY);
        }
    } catch (e) {
        console.error("Failed to update session in localStorage", e);
    }
}

// Check session on load & update Navbar
function checkAuthSession() {
    const user = getCurrentUserSession();
    updateAuthNavbarUI(user);
}

// Update Navbar UI depending on auth state
function updateAuthNavbarUI(user) {
    const guestActions = document.getElementById("guest-actions");
    const userProfileMenu = document.getElementById("user-profile-menu");
    const avatarElem = document.getElementById("navbar-user-avatar");
    const nameElem = document.getElementById("navbar-user-name");
    const dropdownNameElem = document.getElementById("dropdown-user-fullname");
    const dropdownEmailElem = document.getElementById("dropdown-user-email");

    if (user) {
        if (guestActions) guestActions.style.display = "none";
        if (userProfileMenu) userProfileMenu.style.display = "flex";

        // Generate initials (e.g. John Doe -> JD, Alex -> AL)
        const parts = user.name.trim().split(" ");
        let initials = parts[0].charAt(0).toUpperCase();
        if (parts.length > 1) {
            initials += parts[parts.length - 1].charAt(0).toUpperCase();
        } else if (parts[0].length > 1) {
            initials += parts[0].charAt(1).toUpperCase();
        }

        if (avatarElem) avatarElem.innerText = initials;
        if (nameElem) nameElem.innerText = parts[0];
        if (dropdownNameElem) dropdownNameElem.innerText = user.name;
        if (dropdownEmailElem) dropdownEmailElem.innerText = user.email;
    } else {
        if (guestActions) guestActions.style.display = "flex";
        if (userProfileMenu) userProfileMenu.style.display = "none";
        toggleUserDropdown(false);
    }
}

// Open Modal for Login or Sign Up
function openAuthModal(tab = 'login') {
    const modal = document.getElementById("auth-modal");
    if (!modal) return;

    switchAuthTab(tab);
    clearAuthAlerts();

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}

// Close Modal
function closeAuthModal() {
    const modal = document.getElementById("auth-modal");
    if (modal) {
        modal.classList.remove("active");
    }
    document.body.style.overflow = "";
    clearAuthAlerts();
}

// Handle Backdrop Click
function handleAuthBackdropClick(e) {
    if (e.target.id === "auth-modal") {
        closeAuthModal();
    }
}

// Switch between Login and Sign Up tabs
function switchAuthTab(tab) {
    const loginTabBtn = document.getElementById("tab-login-btn");
    const signupTabBtn = document.getElementById("tab-signup-btn");
    const loginPane = document.getElementById("login-form-pane");
    const signupPane = document.getElementById("signup-form-pane");

    clearAuthAlerts();

    if (tab === 'signup') {
        if (loginTabBtn) loginTabBtn.classList.remove("active");
        if (signupTabBtn) signupTabBtn.classList.add("active");
        if (loginPane) loginPane.classList.remove("active");
        if (signupPane) signupPane.classList.add("active");
    } else {
        if (loginTabBtn) loginTabBtn.classList.add("active");
        if (signupTabBtn) signupTabBtn.classList.remove("active");
        if (loginPane) loginPane.classList.add("active");
        if (signupPane) signupPane.classList.remove("active");
    }
}

// Toggle password visibility
function togglePasswordVisibility(inputId, btnElem) {
    const input = document.getElementById(inputId);
    if (!input) return;

    const icon = btnElem.querySelector("i");
    if (input.type === "password") {
        input.type = "text";
        if (icon) {
            icon.classList.remove("fa-eye");
            icon.classList.add("fa-eye-slash");
        }
    } else {
        input.type = "password";
        if (icon) {
            icon.classList.remove("fa-eye-slash");
            icon.classList.add("fa-eye");
        }
    }
}

// Clear error alerts
function clearAuthAlerts() {
    const loginErr = document.getElementById("login-error");
    const signupErr = document.getElementById("signup-error");
    if (loginErr) {
        loginErr.style.display = "none";
        loginErr.innerText = "";
    }
    if (signupErr) {
        signupErr.style.display = "none";
        signupErr.innerText = "";
    }
}

// Handle Login Submission
function handleLoginSubmit(e) {
    e.preventDefault();
    clearAuthAlerts();

    const emailInput = document.getElementById("login-email");
    const passwordInput = document.getElementById("login-password");
    const loginError = document.getElementById("login-error");

    if (!emailInput || !passwordInput) return;

    const email = emailInput.value.trim().toLowerCase();
    const password = passwordInput.value.trim();

    const users = getUsersFromStorage();
    const foundUser = users.find(u => u.email.toLowerCase() === email && u.password === password);

    if (!foundUser) {
        if (loginError) {
            loginError.innerText = "❌ Incorrect email or password. Please try again.";
            loginError.style.display = "block";
        }
        return;
    }

    // Login successful
    setCurrentUserSession(foundUser);
    updateAuthNavbarUI(foundUser);
    closeAuthModal();

    // Reset inputs
    emailInput.value = "";
    passwordInput.value = "";

    showToast(`Welcome Back, ${foundUser.name}! 👋`, "You are now logged in. Enjoy your meal!");
}

// Handle Sign Up Submission
function handleSignUpSubmit(e) {
    e.preventDefault();
    clearAuthAlerts();

    const nameInput = document.getElementById("signup-name");
    const emailInput = document.getElementById("signup-email");
    const phoneInput = document.getElementById("signup-phone");
    const passwordInput = document.getElementById("signup-password");
    const signupError = document.getElementById("signup-error");

    if (!nameInput || !emailInput || !passwordInput) return;

    const name = nameInput.value.trim();
    const email = emailInput.value.trim().toLowerCase();
    const phone = phoneInput ? phoneInput.value.trim() : "";
    const password = passwordInput.value.trim();

    if (password.length < 6) {
        if (signupError) {
            signupError.innerText = "⚠️ Password must be at least 6 characters.";
            signupError.style.display = "block";
        }
        return;
    }

    const users = getUsersFromStorage();
    const exists = users.some(u => u.email.toLowerCase() === email);

    if (exists) {
        if (signupError) {
            signupError.innerText = "⚠️ An account with this email address already exists. Please log in.";
            signupError.style.display = "block";
        }
        return;
    }

    // Create & save new user
    const newUser = {
        name: name,
        email: email,
        phone: phone,
        password: password,
        createdAt: new Date().toISOString()
    };

    users.push(newUser);
    saveUsersToStorage(users);

    // Auto log in new user
    setCurrentUserSession(newUser);
    updateAuthNavbarUI(newUser);
    closeAuthModal();

    // Reset form
    nameInput.value = "";
    emailInput.value = "";
    if (phoneInput) phoneInput.value = "";
    passwordInput.value = "";

    showToast(`Account Created! 🚀`, `Welcome to FoodieHub, ${name}! Your account is ready.`);
}

// Auto Fill Demo Credentials
function fillDemoCredentials() {
    const emailInput = document.getElementById("login-email");
    const passwordInput = document.getElementById("login-password");
    if (emailInput) emailInput.value = "demo@foodie.com";
    if (passwordInput) passwordInput.value = "123456";
    showToast("Demo Credentials Filled", "Click 'Log In' button to continue.");
}

// Simulated Social Login (Google / Facebook)
function handleSocialAuth(provider) {
    const demoSocialUser = {
        name: `${provider} User`,
        email: `user_${provider.toLowerCase()}@example.com`,
        phone: "0300 9998877",
        password: "social_oauth_user",
        provider: provider,
        createdAt: new Date().toISOString()
    };

    const users = getUsersFromStorage();
    const exists = users.find(u => u.email === demoSocialUser.email);
    if (!exists) {
        users.push(demoSocialUser);
        saveUsersToStorage(users);
    }

    setCurrentUserSession(demoSocialUser);
    updateAuthNavbarUI(demoSocialUser);
    closeAuthModal();

    showToast(`Signed In with ${provider} ✨`, `Welcome, ${demoSocialUser.name}!`);
}

// Forgot password simulation
function handleForgotPassword() {
    const email = document.getElementById("login-email")?.value.trim() || "your email";
    showToast("Reset Link Sent! ✉️", `Password reset instructions have been sent to ${email}.`);
}

// Toggle User Dropdown Menu
function toggleUserDropdown(forceState) {
    const dropdown = document.getElementById("user-dropdown");
    const profileMenu = document.getElementById("user-profile-menu");
    if (!dropdown) return;

    if (typeof forceState === "boolean") {
        if (forceState) {
            dropdown.classList.add("show");
            if (profileMenu) profileMenu.classList.add("open");
        } else {
            dropdown.classList.remove("show");
            if (profileMenu) profileMenu.classList.remove("open");
        }
    } else {
        dropdown.classList.toggle("show");
        if (profileMenu) profileMenu.classList.toggle("open");
    }
}

// Logout User
function logoutUser() {
    const user = getCurrentUserSession();
    const name = user ? user.name : "User";
    
    setCurrentUserSession(null);
    updateAuthNavbarUI(null);

    showToast("Logged Out Successfully 👋", `Goodbye, ${name}. Hope to see you soon!`);
}

// ==========================================================================
// NAVBAR SEARCH & DIRECT ITEM NAVIGATION
// ==========================================================================

function handleSearchInput(e) {
    const query = e.target.value.trim().toLowerCase();
    const dropdown = document.getElementById("search-dropdown");
    if (!dropdown) return;

    if (!query) {
        dropdown.classList.remove("show");
        dropdown.innerHTML = "";
        return;
    }

    // Match query against dishesData (name, category, desc, slug)
    const matches = dishesData.filter(dish => {
        return dish.name.toLowerCase().includes(query) ||
               dish.category.toLowerCase().includes(query) ||
               dish.slug.toLowerCase().includes(query) ||
               dish.desc.toLowerCase().includes(query);
    });

    if (matches.length === 0) {
        dropdown.innerHTML = `
            <div class="search-no-results">
                <span>🔍 No dishes found for "<strong>${escapeHtml(query)}</strong>"</span>
            </div>
        `;
    } else {
        dropdown.innerHTML = matches.map(dish => `
            <div class="search-item-result" onclick="goToDish('${dish.slug}', ${dish.id})">
                <img src="${dish.image}" alt="${dish.name}" class="search-result-img">
                <div class="search-result-info">
                    <span class="search-result-title">${dish.name}</span>
                    <span class="search-result-cat">${dish.category}</span>
                </div>
                <span class="search-result-price">Rs. ${dish.sizes[0].price.toLocaleString()}</span>
            </div>
        `).join("");
    }

    dropdown.classList.add("show");
}

function handleSearchKeydown(e) {
    if (e.key === "Enter") {
        e.preventDefault();
        executeSearch();
    } else if (e.key === "Escape") {
        closeSearchDropdown();
    }
}

function executeSearch() {
    const input = document.getElementById("navbar-search-input");
    if (!input) return;
    const query = input.value.trim().toLowerCase();
    if (!query) return;

    // Find direct dish match in dishesData
    const foundDish = dishesData.find(dish => {
        return dish.name.toLowerCase().includes(query) ||
               dish.category.toLowerCase().includes(query) ||
               dish.slug.toLowerCase().includes(query) ||
               query.includes(dish.slug) ||
               query.includes(dish.category.toLowerCase());
    });

    if (foundDish) {
        goToDish(foundDish.slug, foundDish.id);
    } else {
        // Fallback category map
        const categoryMap = {
            "pizza": "dish-pizza",
            "burger": "dish-burgers",
            "burgers": "dish-burgers",
            "fries": "dish-fries",
            "shawarma": "dish-shawarma",
            "chicken": "dish-chicken",
            "dessert": "dish-desserts",
            "desserts": "dish-desserts",
            "cake": "dish-desserts"
        };
        
        const matchedKey = Object.keys(categoryMap).find(k => query.includes(k));
        if (matchedKey) {
            goToDish(categoryMap[matchedKey]);
        } else {
            showToast("Item Not Found 🔍", `Could not find "${query}". Try searching 'pizza', 'burger', 'fries', etc.`);
        }
    }
}

function goToDish(slug, dishId) {
    closeSearchDropdown();
    
    // Target element by dish ID: #dish-pizza, #dish-burgers, etc.
    const cleanSlug = slug.replace("dish-", "");
    let targetElem = document.getElementById(`dish-${cleanSlug}`) || document.getElementById(slug);
    
    if (!targetElem) {
        targetElem = document.getElementById("popular-dishes");
    }

    if (targetElem) {
        // Smooth scroll with sticky navbar height offset
        const navbar = document.querySelector(".header");
        const navOffset = navbar ? navbar.offsetHeight + 20 : 85;
        const elemPosition = targetElem.getBoundingClientRect().top + window.pageYOffset - navOffset;
        
        window.scrollTo({
            top: elemPosition,
            behavior: "smooth"
        });

        // Trigger glowing highlight pulse effect
        targetElem.classList.remove("search-highlight-pulse");
        void targetElem.offsetWidth; // trigger reflow
        targetElem.classList.add("search-highlight-pulse");

        setTimeout(() => {
            targetElem.classList.remove("search-highlight-pulse");
        }, 2600);

        const foundName = dishId ? dishesData.find(d => d.id === dishId)?.name : cleanSlug.toUpperCase();
        showToast("Direct Item Found! 🎯", `Navigated to ${foundName || 'selected item'}.`);
    }
}

function closeSearchDropdown() {
    const dropdown = document.getElementById("search-dropdown");
    if (dropdown) {
        dropdown.classList.remove("show");
    }
}

function escapeHtml(text) {
    return text.replace(/[&<>"']/g, function(m) {
        return {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        }[m];
    });
}

// ==========================================================================
// NAVBAR ACTIVE LINK SCROLL SPY
// ==========================================================================

function initNavScrollSpy() {
    const navLinks = document.querySelectorAll(".nav-links ul li a");
    const sections = [
        document.getElementById("hero-section"),
        document.getElementById("popular-dishes"),
        document.getElementById("about-section"),
        document.getElementById("why-choose"),
        document.getElementById("contact")
    ].filter(Boolean);

    window.addEventListener("scroll", () => {
        let currentSectionId = "";
        const scrollPosition = window.pageYOffset + 140;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute("id");
            }
        });

        if (currentSectionId) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                const href = link.getAttribute("href");
                if (href === `#${currentSectionId}`) {
                    link.classList.add("active");
                }
            });
        }
    });

    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            navLinks.forEach(l => l.classList.remove("active"));
            this.classList.add("active");
        });
    });
}

// ==========================================================================
// CONTACT & NEWSLETTER FORM HANDLERS
// ==========================================================================

function handleContactSubmit(event) {
    event.preventDefault();
    const nameInput = document.getElementById("contact-name");
    const emailInput = document.getElementById("contact-email");
    const phoneInput = document.getElementById("contact-phone");
    const subjectInput = document.getElementById("contact-subject");
    const messageInput = document.getElementById("contact-message");

    const name = nameInput ? nameInput.value.trim() : "Customer";

    // Show toast confirmation
    showToast("Message Sent! ✉️", `Thank you, ${name}! We have received your message and will respond shortly.`);

    // Reset form
    if (nameInput) nameInput.value = "";
    if (emailInput) emailInput.value = "";
    if (phoneInput) phoneInput.value = "";
    if (subjectInput) subjectInput.value = "";
    if (messageInput) messageInput.value = "";
}

function handleNewsletterSubmit(event) {
    event.preventDefault();
    const emailInput = document.getElementById("newsletter-email");
    const email = emailInput ? emailInput.value.trim() : "";

    showToast("Subscribed! 🎉", `Thank you for subscribing! Promo code 'FOODIE15' has been sent to ${email}.`);

    if (emailInput) emailInput.value = "";
}

// ==========================================================================
// MOBILE NAVIGATION MENU HANDLERS
// ==========================================================================

function toggleMobileNav() {
    const navLinks = document.querySelector(".nav-links");
    const menuBtnIcon = document.querySelector(".mobile-menu-btn i");
    if (navLinks) {
        navLinks.classList.toggle("mobile-active");
        if (menuBtnIcon) {
            if (navLinks.classList.contains("mobile-active")) {
                menuBtnIcon.classList.remove("fa-bars");
                menuBtnIcon.classList.add("fa-xmark");
            } else {
                menuBtnIcon.classList.remove("fa-xmark");
                menuBtnIcon.classList.add("fa-bars");
            }
        }
    }
}

function closeMobileNav() {
    const navLinks = document.querySelector(".nav-links");
    const menuBtnIcon = document.querySelector(".mobile-menu-btn i");
    if (navLinks && navLinks.classList.contains("mobile-active")) {
        navLinks.classList.remove("mobile-active");
        if (menuBtnIcon) {
            menuBtnIcon.classList.remove("fa-xmark");
            menuBtnIcon.classList.add("fa-bars");
        }
    }
}

function initMobileNavListeners() {
    // Close mobile nav when clicking any nav link
    const navLinks = document.querySelectorAll(".nav-links ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            closeMobileNav();
        });
    });

    // Close when clicking outside
    document.addEventListener("click", (e) => {
        const navLinks = document.querySelector(".nav-links");
        const menuBtn = document.querySelector(".mobile-menu-btn");
        if (navLinks && navLinks.classList.contains("mobile-active")) {
            if (!navLinks.contains(e.target) && !menuBtn?.contains(e.target)) {
                closeMobileNav();
            }
        }
    });
}

// ==========================================================================
// SCROLL REVEAL ANIMATIONS (Left, Right, Up, Scale)
// ==========================================================================

let scrollObserver = null;

function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal-left, .reveal-right, .reveal-up, .reveal-scale');
    
    if ('IntersectionObserver' in window) {
        if (!scrollObserver) {
            scrollObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                root: null,
                rootMargin: '0px 0px -40px 0px',
                threshold: 0.08
            });
        }

        revealElements.forEach(el => {
            if (!el.classList.contains('revealed')) {
                scrollObserver.observe(el);
            }
        });
    } else {
        // Fallback for older browsers
        revealElements.forEach(el => el.classList.add('revealed'));
    }
}

