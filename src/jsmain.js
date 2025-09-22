function initTheme() {
    const themeToggle = document.getElementById('themeToggle');

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

    loadTheme();

    themeToggle.addEventListener('click', toggleTheme);
}

document.addEventListener('DOMContentLoaded', initTheme);


function applyTheme(theme) {
    document.body.className = theme + '-theme';
    localStorage.setItem('theme', theme);
}

document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        applyTheme(newTheme);
    });
});