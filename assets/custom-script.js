document.addEventListener('DOMContentLoaded', function() {
   const sliderInit = () => {
    if (document.querySelector('.swiper-container') === null) return

        const swiper = new Swiper('.swiper-container', {
            loop: true,
            pagination: {
            el: '.swiper-pagination',
            clickable: true,
            },
            navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            },
            on: { 
                slideChange: function() {
                let slideCurrentIndex = this.realIndex; 
                slideCurrentIndex++
                const counter = this.el.querySelector('.count_first');
                counter.textContent = slideCurrentIndex;
            }}
        });
   }





   sliderInit();
});