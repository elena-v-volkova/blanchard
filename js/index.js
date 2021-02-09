var links = document.querySelectorAll('.menu_bottom-nav__link');
links.forEach(function (link) {
    link.addEventListener('click', function () {
        activeEl = document.querySelector('.dropdown_is-active')
        currentEl = document.querySelector('.dropdown__' + link.id)
        if (activeEl && activeEl != currentEl) {
            activeEl.classList.remove('dropdown_is-active')
            currentEl.classList.add('dropdown_is-active')
        } else {
            currentEl.classList.toggle('dropdown_is-active')
        }
    });
});


var scrolls = document.querySelectorAll('.custom-scroll')
scrolls.forEach(function (scroll) {
    new SimpleBar(scroll, {
        scrollbarMinSize: 30,
        scrollbarMaxSize: 30,
    });
})



var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    spaceBetween: 50,
    slidesPerView: 3,
    slidesPerGroup: 3,
    slidesPerColumn: 2,
    loop: false,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        clickable: 'true',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    a11y: {
        enabled: true,
    }
});

const element = document.querySelector('#selectCustom');
const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: '',
});

