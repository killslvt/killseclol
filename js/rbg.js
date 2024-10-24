$(document).ready(function () {
    document.addEventListener("contextmenu", (event) => {
        event.preventDefault();
    });

    $('img').attr('draggable', false);

    // Array of background images
    const backgroundImages = [
        '../img/bg_66.gif',
        '../img/bg_dark_anim_0_08.gif',
        '../img/bg205.gif',
    ];

    // Get a random index from the array
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);

    // Set the background image
    $('body').css('background', 'url(' + backgroundImages[randomIndex] + ') center');
});