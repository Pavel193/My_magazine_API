

export class Modal{
    constructor(selectorOverlay){
        this.containerOverlay = document.querySelector(selectorOverlay)
        // this.exit = document.querySelector('.header__logOut')
        this.addListener()
    }
        
    open(){
        this.containerOverlay.classList.remove('hidden')
    }
    close(){
        this.containerOverlay.classList.add('hidden')
        // this.exit.classList.remove('none')
    }

    addListener(){
        this.containerOverlay.addEventListener('click', (e) => {
            if(e.target.classList.contains('overlay')){
                this.close()
            }    
        })

    }

}

