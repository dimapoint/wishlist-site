document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('gallery-container');

    // 1. Verificación de seguridad: ¿Existe data.js?
    if (typeof comicsData === 'undefined') {
        container.innerHTML = `
            <div style="text-align:center; padding: 40px;">
                <h2 style="color: #ff4444;">⚠️ Archivo de datos no encontrado</h2>
                <p>Por favor, ejecutá el script <code>scraper.py</code> para generar <code>data.js</code> con las imágenes reales.</p>
            </div>
        `;
        return;
    }

    // Limpiamos el loader
    container.innerHTML = '';

    // 2. Función auxiliar para placeholders si falla la imagen real
    const getPlaceholder = (text, bgColor = '1e1e1e') => {
        const cleanText = text.replace(/[:\-\.]/g, '').split(' ').slice(0, 3).join('+');
        return `https://placehold.co/400x600/${bgColor}/FFFFFF?text=${cleanText}`;
    };

    // 3. Renderizado
    comicsData.forEach(section => {
        // Crear sección (Header)
        const sectionEl = document.createElement('section');
        sectionEl.className = 'category-section';

        const titleClass = section.category.includes('DC') ? 'dc-title' :
            section.category.includes('Marvel') ? 'marvel-title' : 'indie-title';

        const h2 = document.createElement('h2');
        h2.className = `category-title ${titleClass}`;
        h2.textContent = section.category;
        sectionEl.appendChild(h2);

        // Crear Grilla
        const grid = document.createElement('div');
        grid.className = 'gallery-grid';

        // Crear Cards
        section.items.forEach(comic => {
            const card = document.createElement('article');
            card.className = 'comic-card';

            // Lógica de Imagen: Usa la del scraper o un placeholder
            const imgSrc = comic.image && comic.image.length > 0 ? comic.image : getPlaceholder(comic.title);

            card.innerHTML = `
                <div class="card-image-container">
                    <img 
                        src="${imgSrc}" 
                        alt="${comic.title}" 
                        class="card-image" 
                        loading="lazy"
                        onerror="this.onerror=null; this.src='${getPlaceholder(comic.title)}';"
                    >
                </div>
                <div class="card-content">
                    <span class="comic-tag">${comic.tag || 'Cómic'}</span>
                    <h3 class="comic-title">${comic.title}</h3>
                    <a href="${comic.url}" target="_blank" class="btn-link ${section.styleClass}">
                        Ver en Tienda
                    </a>
                </div>
            `;
            grid.appendChild(card);
        });

        sectionEl.appendChild(grid);
        container.appendChild(sectionEl);
    });
});