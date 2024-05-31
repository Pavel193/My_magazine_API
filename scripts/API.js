export class Api {
    constructor(){
        this.url = 'https://dummyjson.com/'
      
    }

    async callbackFetch(responce){
        return await responce.json()
    }

    createOrder(obj){
        return fetch(this.url+ 'carts/add', {
            method: 'POST',
            headers: this.headers , 
            body: JSON.stringify(obj)
        }).then(this.callbackFetch)
    }

    loginUser(body){
        return fetch(this.url + 'auth/login', {
            method: 'POST',
            headers,
            body : JSON.stringify({...body, expressInMins: 30})
        }).then(this.callbackFetch)
    }
    authUser(){
        return fetch(this.url + 'auth/me', {
            headers: {
                'Authorization' : `Bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        })
    }
}

const headers = {
    'Content-Type': 'application/json',
}