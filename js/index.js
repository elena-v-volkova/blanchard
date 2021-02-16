document.addEventListener('DOMContentLoaded', function () {
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

    // map
    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init() {
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            center: [55.75979150133848, 37.61026443960955],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 14,
            controls: ['smallZoomControl'],
        });

        // Создание геообъекта с типом точка (метка).
        var myGeoObject = new ymaps.GeoObject({
            geometry: {
                type: "Point", // тип геометрии - точка
                coordinates: [55.75846306898368, 37.601079499999905] // координаты точки
            }
        });

        var myPlacemark = new ymaps.Placemark([55.75846306898368, 37.601079499999905], {}, {
            iconLayout: 'default#image',
            iconImageHref: '/img/mapsdot.svg',
            iconImageSize: [30, 42],
            iconImageOffset: [-3, -42]
        });

        // Размещение геообъекта на карте.
        // myMap.geoObjects.add(myGeoObject); 
        myMap.geoObjects.add(myPlacemark);
    }
    // Form
    new JustValidate('.form', {
        colorWrong: '#FF5C00',
        rules: {
            name: {
                required: true,
                minLength: 2,
                maxLength: 30,
            },
            tel: {
                required: true,
                function(name, value) {
                    const phone = selector.inputmask.unmaskedvalue()
                    console.log(phone)
                    return Number(phone) && phone.length === 10
                }
            },
        },
        messages: {
            name: {
                minLength: 'Как вас зовут?',
                required: 'Как вас зовут?',
            },
            tel: 'Укажите ваш телефон',
        },
    });
})