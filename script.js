// Ініціалізація іконок Lucide
lucide.createIcons();

// Обробка друку
document.getElementById('printBtn').addEventListener('click', () => {
    window.print();
});