let loginForm = document.querySelector('.login-form-container');
document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active')
};


document.querySelector('#close-login-btn').onclick = () =>{
    loginForm.classList.remove('active')
};


var swiper = new Swiper(".featured-slider", {
    spaceBetween: 10,
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        dsiableOnInteration: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0:{
            slidesPerView: 2,
        },
        450: {
            slidesPerView: 3,
        },
        768:{
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 5,
        },
    },
})