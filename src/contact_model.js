document.addEventListener('DOMContentLoaded', function() {
    // Создаем модальное окно
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
                    <label for="phone">Телефон:</label>
                    <input type="tel" id="phone" name="phone">
                </div>
                <div class="form-group">
                    <label for="message">Сообщение:</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit" class="submit-btn">Отправить</button>
            </form>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Элементы
    const contactButton = document.getElementById('contactButton');
    const closeBtn = modal.querySelector('.close');
    const contactForm = modal.getElementById('contactForm');
    
    // Функции
    function openModal() {
        modal.style.display = 'block';
    }
    
    function closeModal() {
        modal.style.display = 'none';
    }
    
    // Обработчики
    contactButton.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) closeModal();
    });
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Сообщение отправлено!');
        closeModal();
    });
});