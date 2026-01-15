document.addEventListener('DOMContentLoaded', () => {
    const filters = document.querySelectorAll('.filter-btn');
    const categories = document.querySelectorAll('.menu-category');

    filters.forEach(btn => {
        btn.addEventListener('click', () => {
            // Cambiar clase activa en botones
            filters.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const target = btn.getAttribute('data-target');

            categories.forEach(cat => {
                if (target === 'todos') {
                    cat.style.display = 'block';
                    cat.style.opacity = '1';
                } else {
                    if (cat.getAttribute('id') === target) {
                        cat.style.display = 'block';
                        cat.style.opacity = '1';
                    } else {
                        cat.style.display = 'none';
                        cat.style.opacity = '0';
                    }
                }
            });
        });
    });
});