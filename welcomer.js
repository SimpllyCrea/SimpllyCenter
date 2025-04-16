window.onload = function() {
    const temporaryElement = document.getElementById('temporaryElement');

    temporaryElement.style.display = 'flex';

    setTimeout(() => {
        temporaryElement.style.opacity = '0';
        setTimeout(() => {
            temporaryElement.style.display = 'none';
        }, 500);
    }, 2000);
};