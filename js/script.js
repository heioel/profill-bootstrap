AOS.init();

const navbar = document.querySelector('.navbar');
window.onscroll = () => {
    if (window.scrollY > 100) {
        navbar.classList.add('active');
        $('nav a').css({
            'color': '#ffffff'
        });
    } else {
        navbar.classList.remove('active');
        $('nav a').css({
            'color': '#000000'
        });
    }
};