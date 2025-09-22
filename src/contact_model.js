document.addEventListener('DOMContentLoaded', function() {
    const contactButton = document.getElementById('contactButton');
    const contactForm = document.getElementById('contactForm');
    const contactDialogForm = document.getElementById('contactDialogForm');
    const closeBtn = contactForm.querySelector('.close');

    console.log('Элементы загружены:', {
        contactButton: !!contactButton,
        contactForm: !!contactForm,
        contactDialogForm: !!contactDialogForm
    });

    // Открытие модального окна
    if (contactButton) {
        contactButton.addEventListener('click', function() {
            console.log('Открываем диалог');
            contactForm.showModal();
        });
    }

    // Закрытие по кнопке ×
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            contactForm.close();
        });
    }

    // Закрытие по клику вне диалога (в backdrop)
    contactForm.addEventListener('click', function(event) {
        const rect = contactForm.getBoundingClientRect();
        const isInDialog = (
            rect.top <= event.clientY && 
            event.clientY <= rect.top + rect.height &&
            rect.left <= event.clientX && 
            event.clientX <= rect.left + rect.width
        );
        
        if (!isInDialog) {
            contactForm.close();
        }
    });

    // Обработка отправки формы
    if (contactDialogForm) {
        contactDialogForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(contactDialogForm);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                message: formData.get('message')
            };
            
            console.log('Данные формы:', data);
            alert('Спасибо! Ваше сообщение отправлено.');
            
            contactDialogForm.reset();
            contactForm.close();
        });
    }

    // Валидация телефона
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function() {
            this.value = this.value.replace(/\D/g, '');
        });
    }
});