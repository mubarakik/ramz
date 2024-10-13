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

const body = document.body;
let lastScroll = 0;

window.addEventListener('scroll',()=>{
  const currentScroll = window.pageYOffset;
  
  if(currentScroll <=0){
    body.classList.remove("scroll-up")
  }
  
  if(currentScroll > lastScroll && !body.classList.contains("scroll-down")){
    body.classList.remove("scroll-up")
    body.classList.add("scroll-down")
  }
  
  if(currentScroll < lastScroll && body.classList.contains("scroll-down")){
    body.classList.add("scroll-up")
    body.classList.remove("scroll-down")
  }
  
  
  lastScroll = currentScroll;
});