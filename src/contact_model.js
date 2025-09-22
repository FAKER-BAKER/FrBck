// Элементы модального окна
const contactButton = document.getElementById('contactButton');
const modal = document.createElement('div');
modal.className = 'modal';
modal.innerHTML = `
    <div class="modal-content">
        <span class="close">&times;</span>
        <h2>Написать нам</h2>
        <form class="contact-form" id="contactForm">
            <div class="form-group">
                <label for="name">Ваше имя:</label>
                <input type="text" id="name" name="name" required>
            </div>
            <div class="form-group">
                <label for="email">Ваш email:</label>
                <input type="email" id="email" name="email" required>
            </div>
            <div class="form-group">
                <label for="phone">Телефон (необязательно):</label>
                <input type="tel" id="phone" name="phone">
            </div>
            <div class="form-group">
                <label for="message">Сообщение:</label>
                <textarea id="message" name="message" required placeholder="Расскажите, чем мы можем вам помочь..."></textarea>
            </div>
            <button type="submit" class="submit-btn">Отправить сообщение</button>
        </form>
    </div>
`;

// Добавляем модальное окно в body
document.body.appendChild(modal);

const closeBtn = modal.querySelector('.close');
const contactForm = modal.getElementById('contactForm');

// Функции для работы с модальным окном
function openModal() {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Блокируем прокрутку страницы
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Восстанавливаем прокрутку
}

// Обработчики событий
contactButton.addEventListener('click', openModal);

closeBtn.addEventListener('click', closeModal);

// Закрытие при клике вне модального окна
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Закрытие по клавише Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
});

// Обработка отправки формы
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Собираем данные формы
    const formData = new FormData(contactForm);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        message: formData.get('message')
    };
    
    // Здесь можно добавить отправку данных на сервер
    console.log('Данные формы:', data);
    
    // Показываем сообщение об успехе
    alert('Спасибо! Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.');
    
    // Очищаем форму и закрываем модальное окно
    contactForm.reset();
    closeModal();
});

// Валидация телефона (опционально)
const phoneInput = modal.getElementById('phone');
phoneInput.addEventListener('input', function(e) {
    // Удаляем все нецифровые символы
    this.value = this.value.replace(/\D/g, '');
});