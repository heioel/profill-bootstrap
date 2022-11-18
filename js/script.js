AOS.init();

$(window).on('load', function () {
    $('html').scrollTop('0');
});

const navbar = document.querySelector('.navbar');
$(window).on('scroll', function (e) {
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

    let wScroll = $(this).scrollTop();
    $('.bg-home img').css({
        'transform': 'translate(0px,' + wScroll / 4.5 + '%)'
    });
    $('.bg-home h1').css({
        'transform': 'translate(0px,' + wScroll / 3 + '%)'
    });
    $('.bg-home p').css({
        'transform': 'translate(0px,' + wScroll / 1.5 + '%)'
    });
});