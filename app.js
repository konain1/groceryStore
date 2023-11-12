
const products = [
    {
        id:1,
        title:'Nokia',
        price:499,
        poster:"https://images.unsplash.com/photo-1487260211189-670c54da558d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdoaXRlfGVufDB8fDB8fHww",
        desc:'It same work as factory function work but without defining extra object Here is the code read first explanation after it.',

    },
    {
        id:2,
        title:'iphone',
        price:699,
        poster:"https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHdoaXRlfGVufDB8fDB8fHww",
        desc:'It same work as factory function work but without defining extra object Here is the code read first explanation after it.',

    },
    {
        id:3,
        title:'samsung',
        price:299,
        poster:"https://images.unsplash.com/photo-1498335746477-0c73d7353a07?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHdoaXRlfGVufDB8fDB8fHww",
        desc:'It same work as factory function work but without defining extra object Here is the code read first explanation after it.',

    },
]
const search_form = document.querySelector('.search-form');
const search_btn = document.querySelector('.search');
const shopping_cart = document.querySelector('.shopping-cart');
const cart = document.querySelector('.cart');
const user = document.querySelector('.user');
const loginbox = document.querySelector('.loginBox');
const navbar = document.querySelector('nav');
const burger = document.querySelector('.burger');
const product_Cards = document.querySelector('.products-cards')

// all item are stored here after selecting
let mapCart = new Map(); 



search_btn.addEventListener('click', () => {
    shopping_cart.classList.remove('active');
    navbar.classList.remove('active');
    loginbox.classList.remove('active');

    search_form.classList.toggle('active');
});

cart.addEventListener('click', () => {
    search_form.classList.remove('active');
    navbar.classList.remove('active');
    loginbox.classList.remove('active');

    shopping_cart.classList.toggle('active');
});

user.addEventListener('click', () => {
    search_form.classList.remove('active');
    shopping_cart.classList.remove('active');
    navbar.classList.remove('active');

    loginbox.classList.toggle('active');
});

burger.addEventListener('click', () => {
    loginbox.classList.remove('active');
    search_form.classList.remove('active');
    shopping_cart.classList.remove('active');

    navbar.classList.toggle('active');
});



function cards(){

    for(let i = 0;i<products.length;i++){
        product_Cards.innerHTML += `<div class="card" data-id="${products[i].id}" >
        <div class="cardposter">
        <img src="${products[i].poster}" alt="">
        </div>
        <card class="title"><span>${products[i].title}</span></card>
        <div class="cardDesc">
        <p>${products[i].desc}</p>
        </div>
        <button onClick="boughtIt(${products[i].id})" class="shopNow-btn"><span class="cardPrice">$ ${products[i].price}</span></button>

        </div>`
    }
    

}

function boughtIt(pid){

    products.map((item)=>{
        if(pid ===item.id){

            if(!mapCart.has(pid)){
                mapCart.set(pid,item)
            }else{
                mapCart.delete(pid)
            }
            
        }
    })
    
shoppingCart()
}

function trashFn(tid) {
    console.log('triggered');

    products.map((item) => {
        if (tid === item.id) {
            if (mapCart.has(tid)) {
                mapCart.delete(tid);
                shoppingCart(); // Update the shopping cart after deleting an item
            }
        }
    });
}



function shoppingCart(){

   
   
    let shopingCost =0
    shopping_cart.innerHTML = ''
    for (let [key, value] of mapCart) {
        shopingCost = shopingCost + value.price;
        shopping_cart.innerHTML += `
    <div class="shopping-items">
    <i class="fa fa-trash trash-btn" onClick="trashFn(${value.id})" data-trashId="${value.id}"></i>
    <img
      src="${value.poster}"
      alt=""
    />
    <div class="cart-content">
      <h3>${value.title}</h3>
      <span class="price">$ ${value.price}-</span>
      <span class="qauntity">Qty : 1</span>
    </div>
  </div>

    `;

    
    const trash = document.querySelector('.trash-btn')

    
   
     trash.addEventListener('click',trashFn)
    


    }


    shopping_cart.innerHTML += `

    <div class="total">
          <span>total :$ ${shopingCost}</span>
        </div>
        <div class="checkout">
          <a href=""> checkout</a>
        </div>
    `
        
    
   
}





cards();

