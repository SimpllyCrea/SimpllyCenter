function detectUserLanguage() {
    const userLang = navigator.language || navigator.userLanguage;
    return userLang.split('-')[0];
}

function showTranslatePopup() {
    const popup = document.getElementById('translate-popup');
    popup.classList.add('show');
}

document.addEventListener('DOMContentLoaded', () => {
    const userLang = detectUserLanguage();
    showTranslatePopup();

    document.getElementById('translate-yes').onclick = function() {
        window.location.href = `https://translate.google.com/translate?hl=${userLang}&sl=auto&u=${window.location.href}`; // Arahkan ke Google Translate
    };

    document.getElementById('translate-no').onclick = function() {
        const popup = document.getElementById('translate-popup');
        popup.classList.remove('show');
    };
});
