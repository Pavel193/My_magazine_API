import { Card } from "./card.js";
export class CartElement extends Card{
    constructor(...args){
        super(...args)
        this.count = 1
    }
    render(){
        this.element.classList.add('cart__element')
        this.element.innerHTML = `
            <button class = "closeBtn"> X </button>
            <h1>${this.title}</h1>
            <h2 class ='priceElementCart'>${this.price}</h2>
            <div class ="countContainer">
            <button class = "btnUp"> ${'<'} </button>
            <span class="count">${this.count}</span>
            <button class = "btnDown">${'>'}</button>
            </div>
        `
        this.container.append(this.element)
        this.countElement = this.element.querySelector('.count')
        this.deleteBtn = this.element.querySelector('.closeBtn') // Gоиск в элементе
        this.btnUp = this.element.querySelector('.btnUp')
        this.btnDown = this.element.querySelector('.btnDown')
        this.fullPriceText = this.element.querySelector('.priceElementCart')
        this.addlistener()
    }
    deleteCard(){
        this.element.remove()
        this.cart.deleteToCart(this)
    }

    upCount(){
        this.count++
        this.eventCount()
    }

    downCount(){
       if (this.count > 1 ){
        this.count--
        this.eventCount()
    }
}

    eventCount(){
        this.countElement.textContent = this.count
        this.fullPriceText.textContent = this.count * this.price  
        this.cart.getFullPrice()
    }
    
    addlistener(){
        this.deleteBtn.addEventListener('click', this.deleteCard.bind(this) )
        this.btnDown.addEventListener('click', this.upCount.bind(this))
        this.btnUp.addEventListener('click', this.downCount.bind(this))
    }

}









// closeCard.addEventListener('click')