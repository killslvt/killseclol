function loadContent() {
    const overlay = document.getElementById('overlay');
    const video = document.getElementById('video');

    overlay.style.transition = 'opacity 1s ease-in-out';
    overlay.style.opacity = 0;

    setTimeout(() => {
        overlay.style.display = 'none';

        if (video && typeof video.play === 'function') {
            video.play().catch(error => {
                console.error('Error playing video:', error);
            });
        }
    }, 1000);
}
