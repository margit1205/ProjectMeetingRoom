let searchBtn=document.querySelector('#search-btn');
let searchBar=document.querySelector('.search-bar-container');
let menu=document.querySelector('#menu-bar');
let navbar=document.querySelector('.navbar');
let imgBtn=document.querySelectorAll('.img-btn');




//scrolling event
window.onscroll=()=>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

menu.addEventListener('click',()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

});
searchBtn.addEventListener('click',()=>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');

});


//loginpage

const homeLogin=document.querySelector('#login-btn');
const iconClose=document.querySelector('.icon-close');
const wrapper=document.querySelector('.wrapper');
const loginLink=document.querySelector('.login-link');
const registerLink=document.querySelector('.register-link');

registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});



loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});


homeLogin.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
})



//slide image



imgBtn.forEach(btn => {

    btn.addEventListener('click',()=>{
      document.querySelector('.controls .active').classList.remove('active');
      btn.classList.add('active');
      let src=btn.getAttribute('data-src');
      document.querySelector('#image-slider').src=src;
    })
    
});


