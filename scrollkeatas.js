const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.classList.add('show');
        scrollToTopBtn.classList.remove('hide');
    } else {
        scrollToTopBtn.classList.remove('show');
        scrollToTopBtn.classList.add('hide');
    }
};

scrollToTopBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" 
    });
};