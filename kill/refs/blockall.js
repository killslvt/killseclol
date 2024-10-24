document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('selectstart', function (event) {
        event.preventDefault();
    });

    document.addEventListener('dragstart', function (event) {
        event.preventDefault();
    });

    document.addEventListener('contextmenu', function (event) {
        event.preventDefault();
    });

    document.addEventListener('keydown', function (event) {
        if (event.ctrlKey && event.shiftKey && event.key === 'I') {
            event.preventDefault();
        }
    });
});