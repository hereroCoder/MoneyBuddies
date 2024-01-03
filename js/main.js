
function showMenu(){
 document.querySelector('nav').style.right = '0';
 document.querySelector('nav').style.boxShadow= "0 0 0 100vw rgba(0,0,0,0.8)";
}

function hideMenu(){
 document.querySelector('nav').style.right = '-200%';
};

let registerBtn = document.querySelector('.account-form .register-btn');
let loginBtn = document.querySelector('.account-form .login-btn');

//i love this
registerBtn.onclick = ()=>{
  registerBtn.classList.add('active')
  loginBtn.classList.remove('active')
  document.querySelector('.register-form').style.display ='block'
  document.querySelector('.login-form').style.display ='none'
}

loginBtn.onclick = ()=>{
  registerBtn.classList.remove('active')
  loginBtn.classList.add('active')
  document.querySelector('.register-form').style.display ='none'
  document.querySelector('.login-form').style.display ='block'
}

function closeAccountForm(){
  document.querySelector('.account-form').style.right = '-200%'
}

function openAccountForm(){
  document.querySelector('.account-form').style.right = '0';
  document.querySelector('.account-form').style.boxShadow= "0 0 0 100vw rgba(0,0,0,0.8)";
}

//swiper
 const swiper = new Swiper(".hero-slider", {
      // Optional parameters
      direction: "horizontal",
      loop: true,
      grabCursor:true,

      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
        clickable:true,
      },
    });


    const swiper2 = new Swiper(".promotion-slider", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    grabCursor:true,
    spaceBetween:20,
    breakpoints: {
        0: {
          slidesPerView: 1,
  
        },
        768: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
        
      },

      navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
},


  });
 