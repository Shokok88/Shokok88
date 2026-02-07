// Инициализация галерей при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    const galleries = document.querySelectorAll('.product-gallery');
    
    galleries.forEach(gallery => {
        const images = gallery.querySelectorAll('.gallery-images img');
        const dots = gallery.querySelectorAll('.dot');
        const prevBtn = gallery.querySelector('.gallery-prev');
        const nextBtn = gallery.querySelector('.gallery-next');
        let currentIndex = 0;
        
        // Функция показа изображения
        function showImage(index) {
            images.forEach(img => img.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            images[index].classList.add('active');
            dots[index].classList.add('active');
        }
        
        // Следующее фото
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        });
        
        // Предыдущее фото
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        });
        
        // Клик по точкам
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentIndex = index;
                showImage(currentIndex);
            });
        });
        
        // Свайп на мобильных
        let touchStartX = 0;
        let touchEndX = 0;
        
        gallery.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        gallery.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });
        
        function handleSwipe() {
            if (touchEndX < touchStartX - 50) {
                // Свайп влево - следующее фото
                currentIndex = (currentIndex + 1) % images.length;
                showImage(currentIndex);
            }
            if (touchEndX > touchStartX + 50) {
                // Свайп вправо - предыдущее фото
                currentIndex = (currentIndex - 1 + images.length) % images.length;
                showImage(currentIndex);
            }
        }
    });
});

// Кнопки "Подробнее"
document.addEventListener('DOMContentLoaded', function() {
    const detailButtons = document.querySelectorAll('.btn-details');
    
    detailButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productInfo = this.closest('.product-info');
            const details = productInfo.querySelector('.product-details');
            
            // Переключаем класс show
            details.classList.toggle('show');
            
            // Меняем текст и стиль кнопки
            if (details.classList.contains('show')) {
                this.textContent = 'Скрыть ▲';
                this.classList.add('active');
            } else {
                this.textContent = 'Подробнее ▼';
                this.classList.remove('active');
            }
        });
    });
});
