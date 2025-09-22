class ContactModel {
    constructor() {
        this.dialog = document.getElementById('contactDialog');
        this.contactButton = document.getElementById('contactButton');
        this.closeButton = document.getElementById('closeDialog');
        this.cancelButton = document.getElementById('cancelButton');
        this.form = document.getElementById('contactForm');
        
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.addPhoneMask();
    }
    
    bindEvents() {
        this.contactButton.addEventListener('click', () => this.open());
        this.closeButton.addEventListener('click', () => this.close());
        this.cancelButton.addEventListener('click', () => this.close());
        
        this.dialog.addEventListener('click', (event) => {
            if (event.target === this.dialog) this.close();
        });
        
        this.form.addEventListener('submit', (event) => this.handleSubmit(event));
    }
    
    open() {
        this.dialog.showModal();
    }
    
    close() {
        this.dialog.close();
        this.form.reset();
    }
    
    handleSubmit(event) {
        event.preventDefault();
        
        if (this.validateForm()) {
            const formData = new FormData(this.form);
            const data = Object.fromEntries(formData);
            
            console.log('Данные формы:', data);
            alert('Сообщение отправлено! Мы свяжемся с вами, спасибо за обращение.');
            this.close();
        }
    }
    
    validateForm() {
        const inputs = this.form.querySelectorAll('input[required], textarea[required]');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                input.style.borderColor = 'red';
                isValid = false;
            } else {
                input.style.borderColor = '';
            }
        });
        
        return isValid;
    }
    
    addPhoneMask() {
        const phoneInput = document.getElementById('phone');
        if (phoneInput) {
            phoneInput.addEventListener('input', function(e) {
                const x = e.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
                e.target.value = !x[2] ? x[1] : '+' + x[1] + ' (' + x[2] + (x[3] ? ') ' + x[3] : '') + (x[4] ? '-' + x[4] : '') + (x[5] ? '-' + x[5] : '');
            });
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ContactModal();
});