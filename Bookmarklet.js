javascript:(function() {
    const bubbles = document.createElement('div');
    bubbles.style.position = 'fixed';
    bubbles.style.top = '0';
    bubbles.style.left = '0';
    bubbles.style.width = '100%';
    bubbles.style.height = '100%';
    bubbles.style.pointerEvents = 'none';
    document.body.appendChild(bubbles);

    setInterval(() => {
        const bubble = document.createElement('div');
        bubble.style.width = '20px';
        bubble.style.height = '20px';
        bubble.style.background = 'rgba(255, 0, 0, 0.7)';
        bubble.style.borderRadius = '50%';
        bubble.style.position = 'absolute';
        bubble.style.top = Math.random() * 100 + 'vh';
        bubble.style.left = Math.random() * 100 + 'vw';
        bubble.style.transition = 'all 5s ease-out';

        bubbles.appendChild(bubble);

        setTimeout(() => {
            bubble.style.transform = 'translate(-50%, -50%) scale(2)';
            bubble.style.opacity = '0';
        }, 10);

        setTimeout(() => {
            bubbles.removeChild(bubble);
        }, 5100);
    }, 1000);
})();
