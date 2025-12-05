document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('gallery-container');

    // 1. Verificación
    if (typeof comicsData === 'undefined') {
        container.innerHTML = `<h2 style="text-align:center; color:red">⚠️ Ejecuta python scraper.py</h2>`;
        return;
    }

    container.innerHTML = '';

    // 2. Placeholder
    const getPlaceholder = (text) => {
        const cleanText = text.replace(/[:\-\.]/g, '').split(' ').slice(0, 3).join('+');
        return `https://placehold.co/400x600/1e1e1e/FFFFFF?text=${cleanText}`;
    };

    // 3. Crear UNA sola grilla para todo
    const grid = document.createElement('div');
    grid.className = 'gallery-grid';

    // 4. Recorrer la lista plana de cómics
    comicsData.forEach(comic => {
        const card = document.createElement('article');
        card.className = 'comic-card';

        const imgSrc = comic.image && comic.image.length > 0 ? comic.image : getPlaceholder(comic.title);
        const priceDisplay = comic.price ? `<div class="price-badge">${comic.price}</div>` : '';

        card.innerHTML = `
            <div class="card-image-container">
                <img 
                    src="${imgSrc}" 
                    alt="${comic.title}" 
                    class="card-image" 
                    loading="lazy"
                    onerror="this.onerror=null; this.src='${getPlaceholder(comic.title)}';"
                >
                ${priceDisplay}
            </div>
            <div class="card-content">
                <h3 class="comic-title">${comic.title}</h3>
                <a href="${comic.url}" target="_blank" class="btn-link">
                    Ver en Tienda
                </a>
            </div>
        `;
        grid.appendChild(card);
    });

    container.appendChild(grid);
});