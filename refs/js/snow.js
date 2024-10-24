// snow.js
document.addEventListener('DOMContentLoaded', function () {
    const numSnowflakes = 100;

    for (let i = 0; i < numSnowflakes; i++) {
        createSnowflake();
    }

    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';

        const initialX = Math.random() * window.innerWidth;
        const initialY = Math.random() * window.innerHeight;
        const animationDuration = Math.random() * 5 + 5 + 's';

        snowflake.style.left = initialX + 'px';
        snowflake.style.top = initialY + 'px';
        snowflake.style.animationDuration = animationDuration;

        document.body.appendChild(snowflake);
    }
});