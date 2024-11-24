document.addEventListener("DOMContentLoaded", function() {
    const titleElement = document.getElementById('animated-title');
    const cursorElement = document.getElementById('cursor');
    const texts = ["Invite Only Biolink", ".gg/info", "killsec"];
    const typingSpeed = 150;
    const backspaceSpeed = 100;
    const delayBeforeBackspace = 1000;
    const delayBeforeRestart = 1000;

    let textIndex = 0; 
    let charIndex = 0; 
    let isTyping = true;
    let typingStarted = false;

    function type() {
        if (isTyping) {
            if (charIndex < texts[textIndex].length) {
                titleElement.textContent += texts[textIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, typingSpeed);
            } else {
                isTyping = false;
                setTimeout(type, delayBeforeBackspace);
            }
        } else {
            if (charIndex > 0) {
                titleElement.textContent = titleElement.textContent.slice(0, -1);
                charIndex--;
                setTimeout(type, backspaceSpeed);
            } else {
                isTyping = true;
                textIndex = (textIndex + 1) % texts.length; 
                setTimeout(type, delayBeforeRestart);
            }
        }
    }

    function startTypewriter() {
        if (!typingStarted) {
            typingStarted = true;
            type();
            cursorElement.style.display = 'inline';
        }
    }

    // Add event listener to start typewriter on overlay click
    document.querySelector(".overlay").addEventListener("click", startTypewriter);

    // Hide cursor initially until typing starts
    cursorElement.style.display = 'none';
});
