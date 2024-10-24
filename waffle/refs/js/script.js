function startProfile() {

    const audio = document.getElementById('backgroundAudio');
    audio.play();

    document.getElementById('overlay').style.display = 'none';
    document.getElementById('profile').style.display = 'flex';


    const typingTextElement = document.getElementById('typingText');
    const profileNameElement = document.querySelector('.profile-name');
    const originalProfileName = "Waffle";
    const textToType = ["intruder.lol", "chatgpt warriror", "corny fr fr"];
    let textIndex = 0;
    let charIndex = 0;

    function typeText() {
        if (charIndex < textToType[textIndex].length) {
            typingTextElement.textContent += textToType[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 100);
        } else {
            setTimeout(eraseText, 1000);
        }
    }

    function eraseText() {
        if (charIndex > 0) {
            typingTextElement.textContent = textToType[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(eraseText, 50);
        } else {

            profileNameElement.textContent = originalProfileName;
            profileNameElement.classList.remove('tilt-text');
            setTimeout(() => {
                profileNameElement.classList.add('tilt-text');
                textIndex = (textIndex + 1) % textToType.length;
                setTimeout(typeText, 500);
            }, 500);
        }
    }


    typeText();
}