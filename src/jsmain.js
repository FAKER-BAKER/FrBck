// Функция для применения темы
function applyTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
    } else {
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
    }
    localStorage.setItem('theme', theme);
}

// Функция инициализации темы
function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    
    if (!themeToggle) {
        console.log('Кнопка смены темы не найдена');
        return;
    }

    // Загружаем сохраненную тему или устанавливаем светлую по умолчанию
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    // Обработчик клика по кнопке
    themeToggle.addEventListener('click', function() {
        const isDark = document.body.classList.contains('dark-theme');
        const newTheme = isDark ? 'light' : 'dark';
        applyTheme(newTheme);
    });
}

// Инициализируем тему после загрузки DOM
document.addEventListener('DOMContentLoaded', initTheme);