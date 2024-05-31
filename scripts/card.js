export class Card {
    element = document.createElement('div')
    constructor(data, container, cart){
        this.title= data.title
        this.price = data.price
        this.description = data.description
        this.category = data.category
        this.image = data.images ? data.images : null
        this.container = container
        this.cart = cart
        this.id = data.id
    }
    
    render(){
        this.element.classList.add('card')
        this.element.innerHTML = `
        <h1>${this.title}</h1>
        <h2>${this.price}</h2>
        <p>${this.description}</p>
        <p>${this.category}</p>
        <img src='${this.image[0]}'></img>
        <button class='addToCart'> Купить </button>
        `
        this.container.append(this.element)
        this.btnBuy = this.element.querySelector('.addToCart')
        this.addlistener()
    }

    addToCart(){
        this.cart.addToCart(this)
    }

    addlistener(){
        this.btnBuy.addEventListener('click', this.addToCart.bind(this)) // bind - принудительное присвоение контекста в функции(методе)
    }
    
}