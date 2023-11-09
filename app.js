
const search_form = document.querySelector('.search-form');
const search_btn = document.querySelector('.search');
const shopping_cart = document.querySelector('.shopping-cart')
const cart = document.querySelector('.cart')
const user = document.querySelector('.user')
const loginbox =document.querySelector('.loginBox')
const navbar = document.querySelector('nav')
const burger = document.querySelector('.burger')





search_btn.addEventListener('click',()=>{
    shopping_cart.classList.remove('active')
    navbar.classList.remove('active')
    loginbox.classList.remove('active')

    search_form.classList.toggle('active');
})
cart.addEventListener('click',()=>{
    search_form.classList.remove('active')
    navbar.classList.remove('active')
    loginbox.classList.remove('active')

    shopping_cart.classList.toggle('active')

})

user.addEventListener('click',()=>{
    
   
    search_form.classList.remove('active')
    shopping_cart.classList.remove('active')
    navbar.classList.remove('active')
    loginbox.classList.remove('active')


    loginbox.classList.toggle('active')
})

burger.addEventListener('click',()=>{
    loginbox.classList.remove('active')
    search_form.classList.remove('active')
    shopping_cart.classList.remove('active')



    navbar.classList.toggle('active')

})