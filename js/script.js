document.addEventListener('DOMContentLoaded', function () {
    const overlay = document.getElementById('overlay');
    const content = document.querySelector('.content');
    const typing = document.getElementById('typing');
    const texts = ["killsec.lol", "private biolink", "▾Kill▾"];
    let textIndex = 0;
    let charIndex = 0;

    overlay.style.opacity = 1;

    overlay.addEventListener('click', function () {
        overlay.style.transition = 'opacity 1s ease-in-out';
        content.style.transition = 'opacity 1s ease-in-out';

        overlay.style.opacity = 0;
        content.style.opacity = 1;

        setTimeout(() => {
            overlay.style.display = 'none';
        }, 1000);
    });

    function updateClock() {
        const now = new Date();
        const options = {
            hour12: true,
            hour: 'numeric',
            minute: '2-digit',
            second: '2-digit'
        };
        const formattedTime = now.toLocaleTimeString('en-US', options);
        document.getElementById('clock').textContent = formattedTime;
    }

    function type() {
        if (charIndex < texts[textIndex].length) {
            typing.textContent = texts[textIndex].slice(0, charIndex + 1);
            charIndex++;
        } else {
            charIndex = 0;
            textIndex = (textIndex + 1) % texts.length;
        }
    }

    setInterval(updateClock, 1000);
    setInterval(type, 115);
});
