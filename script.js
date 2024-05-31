import { Card } from "./scripts/card.js"
import { Cart } from "./scripts/Cart.js"
import { CartElement } from "./scripts/CartElement.js"
import { Modal } from "./scripts/modal.js"
import { Form } from "./scripts/form.js"
import { Validation } from "./scripts/Validation.js"
import { Api } from "./scripts/API.js"
import { user } from "./scripts/user.js"

const container = document.querySelector('.container')
const containerCart = document.querySelector('.container-cart')
const formClient = document.querySelector('.form')
const cartBlock = document.querySelector('.cart')
const btnOpenCart = document.querySelector('.header__cart')
const btnLogin = document.querySelector('.header__login')
const userAvatar = document.querySelector('.user__logo img')
const exit = document.querySelector('.header__logOut')


const modal = new Modal('.overlay')
const formAuth = new Form(formClient)
const validation = new Validation('.form_input', '.Sign_In')
const cart = new Cart(containerCart, CartElement, modal, formAuth)
const api = new Api()

user.auth(api, userAvatar, btnLogin)

function initialCard(){
    const url = 'https://dummyjson.com/products/'
    fetch(url)
    .then((respoce)=> respoce.json())
    .then((data)=> data.products.forEach((item) =>  {
        const card = new Card(item, container, cart)
        card.render()
    })).catch(err => console.log(err))
}

formAuth.formElement.addEventListener('submit', async (e) => {
    e.preventDefault()
    const body = formAuth.submitForm(e)
    try{
        const data = await api.loginUser(body)
        localStorage.setItem('token', JSON.stringify(data.token))
        user.auth(api, userAvatar, btnLogin, exit)
        modal.close()
        validation.submit.disabled = true
        formAuth.formElement.reset()
    } catch(err) { throw new Error(err) }
})


btnOpenCart.addEventListener('click', () => cartBlock.classList.toggle('cart-hidden'))
btnLogin.addEventListener ('click', () => modal.open())
exit.addEventListener ('click', ()=> user.logOut(userAvatar, btnLogin))

initialCard()