(function () {
    const root = document.documentElement;
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');

    function applyTheme(theme) {
        const next = theme === 'dark' ? 'dark' : 'light';
        root.setAttribute('data-theme', next);
        if (themeIcon) {
            themeIcon.textContent = next === 'dark' ? '☀︎' : '☾';
        }
        if (themeToggle) {
            themeToggle.setAttribute('aria-label', next === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
            themeToggle.setAttribute('title', next === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
        }
    }

    let savedTheme = null;
    try {
        savedTheme = localStorage.getItem('theme');
    } catch (e) {}

    applyTheme(savedTheme || 'light');

    themeToggle?.addEventListener('click', () => {
        const current = root.getAttribute('data-theme') || 'light';
        const next = current === 'dark' ? 'light' : 'dark';
        try {
            localStorage.setItem('theme', next);
        } catch (e) {}
        applyTheme(next);
    });
})();
