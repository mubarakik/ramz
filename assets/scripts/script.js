document.addEventListener('DOMContentLoaded', function() {
    new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + '</span>';
            },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            renderBullet: function (className, disabled) {
                return '<button class="' + className + '">' + (className === 'swiper-button-prev' ? '←' : '→') + '</button>';
            },
        },
        breakpoints: {
            480:{
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            }
        }
    });
});