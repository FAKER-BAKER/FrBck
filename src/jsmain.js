function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    
    // Загружаем тему сразу при инициализации
    function loadTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-theme');
            themeToggle.textContent = '☀️ Светлая';
        } else {
            document.body.classList.remove('dark-theme');
            themeToggle.textContent = '🌓 Тёмная';
        }
    }
    
    function toggleTheme() {
        const isDark = document.body.classList.toggle('dark-theme');
        themeToggle.textContent = isDark ? '☀️ Светлая' : '🌓 Тёмная';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }
    
    // Загружаем тему сразу
    loadTheme();
    
    // Вешаем обработчик на кнопку
    themeToggle.addEventListener('click', toggleTheme);
}

// Запускаем при полной загрузке DOM
document.addEventListener('DOMContentLoaded', initTheme);

// Также применяем тему сразу (на случай медленной загрузки DOM)
initTheme();