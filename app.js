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

    // Utilidades para descuento de "La Casita del Coleccionista"
    const isCasita = (url) => typeof url === 'string' && url.includes('lacasitadelcoleccionista.com.ar');
    const parsePrice = (str) => {
        if (!str) return null;
        const digits = String(str).replace(/[^\d]/g, '');
        const value = parseInt(digits, 10);
        return Number.isNaN(value) ? null : value;
    };
    const formatPrice = (n) => {
        if (n == null) return '';
        try {
            return `$ ${n.toLocaleString('es-AR')}`;
        } catch (e) {
            return `$ ${n}`;
        }
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

        // Calcular descuento del 10% para items de La Casita del Coleccionista
        let priceText = '';
        if (item.price) {
            if (isCasita(item.url)) {
                const base = parsePrice(item.price);
                const discounted = base != null ? Math.round(base * 0.9) : null;
                // Mostrar precio viejo tachado + precio con 10% de descuento
                priceText = discounted != null
                    ? `<span class="old-price" style="text-decoration: line-through; opacity: 0.75; margin-right: 6px;">${item.price}</span><span class="new-price">${formatPrice(discounted)}</span>`
                    : item.price;
            } else {
                priceText = item.price;
            }
        }
        const priceDisplay = priceText ? `<div class="price-badge">${priceText}</div>` : '';

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
                    Ver
                </a>
            </div>
        `;
        grid.appendChild(card);
    });

    container.appendChild(grid);
});