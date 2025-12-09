document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('gallery-container');

    // 1. Verificación
    if (typeof comicsData === 'undefined') {
        container.innerHTML = `<h2 style="text-align:center; color:red">⚠️ Ejecuta python scraper.py</h2>`;
        return;
    }

    container.innerHTML = '';

    // 2. Placeholder (Imagen por defecto si falla)
    const getPlaceholder = (text) => {
        const cleanText = text.replace(/[:\-\.]/g, '').split(' ').slice(0, 3).join('+');
        return `https://placehold.co/400x600/1e1e1e/FFFFFF?text=${cleanText}`;
    };

    // 3. Crear UNA sola grilla para todo
    const grid = document.createElement('div');
    grid.className = 'gallery-grid';

    // 4. Recorrer la lista plana
    comicsData.forEach(item => {
        const card = document.createElement('article');
        card.className = 'comic-card';

        // Lógica de imagen y precio
        const imgSrc = item.image && item.image.length > 0 ? item.image : getPlaceholder(item.title);
        const priceDisplay = item.price ? `<div class="price-badge">${item.price}</div>` : '';

        // Renderizado (Sin tags, solo foto, precio, título y botón)
        card.innerHTML = `
            <div class="card-image-container">
                <img 
                    src="${imgSrc}" 
                    alt="${item.title}" 
                    class="card-image" 
                    loading="lazy"
                    onerror="this.onerror=null; this.src='${getPlaceholder(item.title)}';"
                >
                ${priceDisplay}
            </div>
            <div class="card-content">
                <h3 class="comic-title">${item.title}</h3>
                <a href="${item.url}" target="_blank" class="btn-link">
                    Ver Regalo
                </a>
            </div>
        `;
        grid.appendChild(card);
    });

    container.appendChild(grid);
});