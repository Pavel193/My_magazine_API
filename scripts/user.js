class User{
    hiddenExit = document.querySelector('.header__logOut.hidden')
    isAuth = false
    async auth(api, userAvatar, btnLogin, exit){
        try{
            const responce = await api.authUser.bind(api)()
            if(responce.ok){
                const data = await responce.json()
                this.isAuth = true
                this.firstName = data.firstName
                this.lastName = data.lastName
                this.image = data.image
                this.id = data.id
                this.render()
                userAvatar.src = user.image
                btnLogin.style.display = 'none'
                this.hiddenExit.classList.toggle('hidden')

            }
        } catch {this.isAuth = false}
    }

    logOut(userAvatar, btnLogin){
        Object.keys(this).forEach((key) => {
            if(key === 'isAuth'){
                this[key] = false
            } else this[key] = ''
        })
        userAvatar.src = '../img/logo_profile.png'
        btnLogin.style.display = 'block'
        localStorage.setItem('token', '')
    }

    render(){

    }



}

export const user = new User()