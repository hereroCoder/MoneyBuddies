//toggle menu
function openMenu(){
 document.querySelector('nav').style.right = '0';
 document.querySelector('nav').style.boxShadow= "0 0 0 100vw rgba(0,0,0,0.8)";
}

function closeMenu(){
 document.querySelector('nav').style.right = '-200%';
};

let registerBtn = document.querySelector('.account-form .register-btn');
let loginBtn = document.querySelector('.account-form .login-btn');

if (registerBtn){
  registerBtn.onclick = ()=>{
  registerBtn.classList.add('active')
  loginBtn.classList.remove('active')
  document.querySelector('.register-form').style.display ='block'
  document.querySelector('.login-form').style.display ='none'
}

}

if (loginBtn){

  loginBtn.onclick = ()=>{
  registerBtn.classList.remove('active')
  loginBtn.classList.add('active')
  document.querySelector('.register-form').style.display ='none';
  document.querySelector('.login-form').style.display ='block';
}
}



function closeAccountForm(){
  document.querySelector('.account-form').style.right = '-200%'
}

function openAccountForm(){
  document.querySelector('.account-form').style.right = '0';
}


 
// swiper
 const swiper = new Swiper(".hero-slider", {
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



function  moreinfo(){
  alert('Additional information page not available at the moment. Contact customer service for enquiries');
};

//faq

accordions = document.querySelectorAll('.faq .accordion-container .accordion');
if (accordions){
  accordions.forEach(accordion=>{
  accordion.onclick= ()=>{
  accordion.classList.toggle('active');
  }
});

}



//borrow
if(document.querySelectorAll('.request-btn')){
  document.querySelectorAll('.request-btn').forEach(Btn=>{
  Btn.onclick=()=>{
    alert('Request successfully sent to your friend');
    Btn.disabled=true;
    Btn.innerHTML = 'requested';

  }
});

}



//friends
loadBtn = document.querySelector('.load-btn .btn');

if(loadBtn){
  loadBtn.onclick = ()=>{
  document.querySelectorAll('.friends .box-container .hide').forEach(
    show=>{
      show.style.display='block';
    }
  )
  loadBtn.style.display="none";
};

}
