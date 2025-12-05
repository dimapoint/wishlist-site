import requests
from bs4 import BeautifulSoup
import json
import time

# Tu lista de links (Agrupados para mantener el orden)
links_dict = {
    "DC Comics": [
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/crisis-en-tierras-infinitas-papel-obra",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/crisis-oscura-en-tierras-infinitas-vol03-tomo-final",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/poder-absoluto",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-poder-absoluto",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/absolute-flash-vol01",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/universo-batman",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-historias-de-fantasmas",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-de-scott-snyder-vol05-superpesado",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-estado-de-miedo",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-ano-dos",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-ano-tres",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-caballero-blanco-del-futuro",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-knightfall-la-caida-del-caballero-vol-01",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-inc",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-leyendas-del-caballero-oscuro-shaman",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-leyendas-del-caballero-oscuro-presa",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-leyendas-del-caballero-oscuro-gotico",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-el-regreso-del-caballero-oscuro-tercera-ed",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-y-los-outsiders",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-un-mal-dia-01-el-acertijo",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-un-mal-dia-02-dos-caras",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-un-mal-dia-06-bane",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-un-mal-dia-08-ra-s-al-ghul",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-la-guerra-de-gotham-camino-a-poder-absoluto",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-prisiones-oscuras",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-detective-comics-gotham-nocturna-acto-segundo",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-detective-comics-04-gotham-nocturna-interludio",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-una-muerte-en-la-familia-robin-vive",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-ciudad-moribunda",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-superman-los-mejores-del-mundo-eclipso-total",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/aquaman-ano-uno",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/wonder-woman-tierra-muerta",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/wonder-woman-de-tom-king-01-fuera-de-la-ley",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/titanes-la-reina-de-alas-negras-camino-a-poder-absoluto",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/titanes-mundo-bestia-camino-a-poder-absoluto",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/superman-la-casa-de-brainiac-con-comic-de-regalo",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/superman-legion-de-darkseid-camino-a-dc-ko",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/liga-de-la-justicia-ilimitada-01-en-el-infierno",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/liga-de-la-justicia-ilimitada-02-somos-ayer",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/liga-de-la-justicia-ilimitada-03-el-acto-omega",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/watchmen-2da-edicion-limitada",
    ],
    "Marvel Comics": [
        "https://www.lacasitadelcoleccionista.com.ar/comics/panini-marvel/x-men-05-amanecer-x-parte-1-con-resena-en-youtube",
        "https://www.lacasitadelcoleccionista.com.ar/comics/panini-marvel/spider-man-la-sombra-de-la-arana",
        "https://www.lacasitadelcoleccionista.com.ar/comics/panini-marvel/ultimate-spider-man-vol-02-the-paper",
        "https://www.lacasitadelcoleccionista.com.ar/comics/panini-marvel/daredevil-04-el-fin-del-infierno",
        "https://www.lacasitadelcoleccionista.com.ar/comics/panini-marvel/daredevil-el-hombre-sin-miedo-must-havetapa-dura",
        "https://www.lacasitadelcoleccionista.com.ar/comics/panini-marvel/ultimate-invasion",
        "https://www.lacasitadelcoleccionista.com.ar/comics/panini-marvel/avengers-01-la-ciudad-imposible-parte-01-nueva-serie",
        "https://www.lacasitadelcoleccionista.com.ar/comics/panini-marvel/the-ultimates-vol01-cambiando-al-mundo",
    ],
    "Indie / Otros": [
        "https://www.lacasitadelcoleccionista.com.ar/comics/planeta/hay-algo-matando-ninos-01",
        "https://www.lacasitadelcoleccionista.com.ar/comics/planeta/hay-algo-matando-ninos-02",
        "https://www.lacasitadelcoleccionista.com.ar/comics/europeo-importado/ecc/green-arrow-el-arco-del-cazador-mike-grellon-demand",
    ]
}

final_data = []

print("🚀 Iniciando extracción de imágenes Open Graph...")

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
}

for category, links in links_dict.items():
    section_obj = {
        "category": category,
        "styleClass": "btn-dc" if "DC" in category else ("btn-marvel" if "Marvel" in category else "btn-indie"),
        "items": []
    }

    for url in links:
        try:
            print(f"Scraping: {url.split('/')[-1]}...")
            response = requests.get(url, headers=headers, timeout=10)

            if response.status_code == 200:
                soup = BeautifulSoup(response.content, 'html.parser')

                # 1. Título: Intentar sacar del OG title o del H1
                og_title = soup.find("meta", property="og:title")
                title = og_title["content"] if og_title else "Título Desconocido"

                # Limpiamos un poco el título (quitamos branding común si existe)
                title = title.replace(" - La Casita del Coleccionista", "").strip()

                # 2. Imagen: Sacar del OG Image
                og_image = soup.find("meta", property="og:image")
                image_url = og_image["content"] if og_image else None

                # Si viene con protocolo http lo pasamos a https
                if image_url and image_url.startswith("http://"):
                    image_url = image_url.replace("http://", "https://")

                # Tags simples basados en keywords
                tag = "Cómic"
                lower_title = title.lower()
                if "batman" in lower_title:
                    tag = "Batman"
                elif "x-men" in lower_title:
                    tag = "Mutantes"
                elif "spider" in lower_title:
                    tag = "Spidey"
                elif "crisis" in lower_title or "poder absoluto" in lower_title:
                    tag = "Evento"

                section_obj["items"].append({
                    "title": title,
                    "url": url,
                    "image": image_url,
                    "tag": tag
                })
            else:
                print(f"❌ Error {response.status_code}")

        except Exception as e:
            print(f"⚠️ Error procesando {url}: {e}")

        # Pequeña pausa para ser gentiles con el servidor
        # time.sleep(0.5)

    final_data.append(section_obj)

# Guardar como archivo JS
js_content = f"const comicsData = {json.dumps(final_data, indent=4)};"
with open("data.js", "w", encoding="utf-8") as f:
    f.write(js_content)

print("✅ Listo! Archivo 'data.js' generado con éxito.")