function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    
    function toggleTheme() {
        const isDark = document.body.classList.toggle('dark-theme');
        themeToggle.textContent = isDark ? '☀️ Светлая' : '🌓 Тёмная';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }
    
    function loadTheme() {
        if (localStorage.getItem('theme') === 'dark') {
            document.body.classList.add('dark-theme');
            themeToggle.textContent = '☀️ Светлая';
        }
    }
    
    themeToggle.addEventListener('click', toggleTheme);
    loadTheme();
}

document.addEventListener('DOMContentLoaded', initTheme);