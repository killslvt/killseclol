document.addEventListener('DOMContentLoaded', function () {
    const typing = document.getElementById('typing');
    const texts = ["I N F O", "XVIII", "ETERNAL"];
    let textIndex = 0;
    let charIndex = 0;
    let isTypingForward = true;

    function type() {
        if (isTypingForward) {
            if (charIndex < texts[textIndex].length) {
                typing.textContent = texts[textIndex].slice(0, charIndex + 1);
                charIndex++;
            } else {
                isTypingForward = false;
            }
        } else {
            if (charIndex > 0) {
                typing.textContent = texts[textIndex].slice(0, charIndex - 1);
                charIndex--;
            } else {
                isTypingForward = true;
                textIndex = (textIndex + 1) % texts.length;
            }
        }
    }

    setInterval(type, 500);
});
