// blockall.js
document.addEventListener('DOMContentLoaded', function () {
    // Disable text selection
    document.addEventListener('selectstart', function (event) {
        event.preventDefault();
    });

    // Disable image dragging
    document.addEventListener('dragstart', function (event) {
        event.preventDefault();
    });

    // Disable right-click context menu
    document.addEventListener('contextmenu', function (event) {
        event.preventDefault();
    });

    // Disable Ctrl+Shift+I
    document.addEventListener('keydown', function (event) {
        if (event.ctrlKey && event.shiftKey && event.key === 'I') {
            event.preventDefault();
        }
    });
});