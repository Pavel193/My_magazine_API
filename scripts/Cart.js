export class Cart {
    fullPriceElement = document.querySelector('.fullPrice-element')
    constructor (cart, classCartElement){
        this.totalBuyBtn = document.querySelector('.buy')
        this.container = cart
        this.cartElements = []
        this.classCartElement = classCartElement
    }


    addToCart(card){
        const elementCard = this.cartElements.find(item => item.id === card.id)
        if(elementCard){
            elementCard.upCount()
        } else {
            const cartElement = new this.classCartElement(card, this.container, this)
            cartElement.render()
            this.cartElements.push(cartElement)
        }
        this.getFullPrice()
    }

    deleteToCart(card){
        this.cartElements = this.cartElements.filter(item => item.id !== card.id)
        this.getFullPrice()
    }

    getFullPrice(){
        this.fullPrice = this.cartElements.reduce((sumPrice , obj) => sumPrice + obj.price * obj.count, 0).toFixed(2) 
        this.fullPriceElement.textContent = this.fullPrice
        this.totalBuyBtn.disabled = this.cartElements.length === 0;
    }

}