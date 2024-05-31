export class Form{
    
    constructor(form){
        this.formElement = form
    }
    submitForm(e){
        const form = e.target
        const obj = {}
        const elements = [...form.elements].filter(item=> item.tagName !== 'BUTTON')
     
        elements.forEach((input) => obj[input.name] = input.value)
        return obj
    }
    
}

