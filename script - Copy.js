// Ripple button effect
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function (e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation style
const style = document.createElement('style');
style.textContent = `
@keyframes ripple {
    to {
        transform: scale(2);
        opacity: 0;
    }
}
`;
document.head.appendChild(style);

// Photo entrance animation
const photoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const img = entry.target.querySelector('img');
        if (entry.isIntersecting && img) {
            img.style.animation = 'photoEnter 0.8s ease-out forwards';
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.photo-card').forEach(card => {
    photoObserver.observe(card);
});