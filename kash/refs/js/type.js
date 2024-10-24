document.addEventListener('DOMContentLoaded', function () {
    const typing = document.getElementById('typing');
    const texts = ["error", "laughing at you skids", "you done yet?"];
    let textIndex = 0;
    let charIndex = 0;
    let isTypingForward = true;

    function type() {
        if (isTypingForward) {
            // Typing forward
            if (charIndex < texts[textIndex].length) {
                typing.textContent = texts[textIndex].slice(0, charIndex + 1);
                charIndex++;
            } else {
                isTypingForward = false; // Switch to backspacing
            }
        } else {
            // Backspacing
            if (charIndex > 0) {
                typing.textContent = texts[textIndex].slice(0, charIndex - 1);
                charIndex--;
            } else {
                isTypingForward = true; // Switch back to typing forward
                textIndex = (textIndex + 1) % texts.length; // Move to the next word
            }
        }
    }

    setInterval(type, 500);
});
