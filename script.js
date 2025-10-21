// Viewer Counter
let viewerCount = 1247;
const viewerElement = document.getElementById('viewer-count');

function updateViewerCount() {
    viewerCount = Math.max(1000, viewerCount + Math.floor(Math.random() * 3) - 1);
    viewerElement.textContent = viewerCount.toLocaleString();
}

setInterval(updateViewerCount, 5000);

// Stock Counter
let stockCount = 23;
const stockElement = document.getElementById('stock-count');

function updateStockCount() {
    if (stockCount > 5) {
        stockCount = Math.max(5, stockCount - Math.floor(Math.random() * 2));
        stockElement.textContent = stockCount;
        stockElement.classList.remove('pulse');
    } else {
        stockElement.classList.add('pulse');
    }
}

setInterval(updateStockCount, 10000);

// Countdown Timer
const countdownDate = new Date();
countdownDate.setDate(countdownDate.getDate() + 3);
countdownDate.setHours(0, 0, 0, 0);

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);

// Gallery Modal
const galleryItems = document.querySelectorAll('.gallery-item');
const modal = document.getElementById('gallery-modal');
const modalImage = document.getElementById('modal-image');
const closeModal = document.getElementById('close-modal');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const imgSrc = item.querySelector('img').src;
        modalImage.src = imgSrc;
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    });
});

closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
});

// Fake Order Notifications
const notifications = [
    { name: "Siti", region: "Jakarta", product: "Multifunction Storage Containers" },
    { name: "Rina", region: "Bandung", product: "Multifunction Storage Containers" },
    { name: "Anita", region: "Surabaya", product: "Multifunction Storage Containers" },
    { name: "Maya", region: "Yogyakarta", product: "Multifunction Storage Containers" },
    { name: "Dewi", region: "Medan", product: "Multifunction Storage Containers" },
    { name: "Linda", region: "Denpasar", product: "Multifunction Storage Containers" },
    { name: "Putri", region: "Makassar", product: "Multifunction Storage Containers" },
    { name: "Nurul", region: "Palembang", product: "Multifunction Storage Containers" }
];

const notification = document.getElementById('notification');
const notificationText = document.getElementById('notification-text');
const notificationAvatar = document.getElementById('notification-avatar');
const closeNotification = document.getElementById('close-notification');

function showNotification() {
    const randomNotification = notifications[Math.floor(Math.random() * notifications.length)];
    notificationText.textContent = `${randomNotification.name} dari ${randomNotification.region} baru saja memesan ${randomNotification.product}`;
    
    // Generate random avatar
    const avatarUrl = `https://ui-avatars.com/api/?name=${randomNotification.name}&background=random`;
    notificationAvatar.src = avatarUrl;
    
    notification.classList.remove('translate-x-full');
    notification.classList.add('slide-in');
    
    setTimeout(() => {
        notification.classList.remove('slide-in');
        notification.classList.add('slide-out');
        setTimeout(() => {
            notification.classList.add('translate-x-full');
            notification.classList.remove('slide-out');
        }, 300);
    }, 5000);
}

closeNotification.addEventListener('click', () => {
    notification.classList.remove('slide-in');
    notification.classList.add('slide-out');
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        notification.classList.remove('slide-out');
    }, 300);
});

// Show first notification after 3 seconds
setTimeout(showNotification, 3000);
// Then show notifications every 15-30 seconds
setInterval(showNotification, Math.floor(Math.random() * 15000) + 15000);

// CTA Button Animation
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', () => {
        // Scroll to order form
        document.querySelector('#order-form').scrollIntoView({ behavior: 'smooth' });
    });
}

// Initialize Feather Icons
if (typeof feather !== 'undefined') {
    feather.replace();
}
