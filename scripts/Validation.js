export class Validation {
    constructor(input, submit) {
        this.inputs = document.querySelectorAll(input);
        this.submit = document.querySelector(submit);
        this.errors = document.querySelectorAll('.error_inp');
        this.inputs.forEach((input) => input.addEventListener('input', this.validate.bind(this)));
    }

    validate(event) {
        const input = event.target;
       const errMsg = input.nextElementSibling
       if(input.validity.patternMismatch) {
        errMsg.textContent = input.getAttribute('data-error-pattern')
       } else if ( input.validity.valueMissing){
        errMsg.textContent = 'Поле не должно быть пустым'
       }else if ( input.validity.tooLong || input.validity.tooShort){
        errMsg.textContent = input.getAttribute('data-error-length')
       }else 
        errMsg.textContent =''
       this.submit.disabled = !Array.from(this.inputs).every((input) => input.validity.valid)
    }
}


