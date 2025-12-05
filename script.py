import requests
from bs4 import BeautifulSoup
import json
import random

# --- TUS LINKS (Mantenemos el diccionario solo para tu orden visual) ---
links_dict = {
    "DC": [
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/crisis-en-tierras-infinitas-papel-obra",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/absolute-flash-vol01",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/universo-batman",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-historias-de-fantasmas",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-de-scott-snyder-vol05-superpesado",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-estado-de-miedo",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-ano-dos",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/crisis-oscura-en-tierras-infinitas-vol03-tomo-final",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-caballero-blanco-del-futuro",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-knightfall-la-caida-del-caballero-vol-01",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-inc",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-leyendas-del-caballero-oscuro-shaman",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-leyendas-del-caballero-oscuro-presa",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/aquaman-ano-uno",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-ano-tres",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-el-regreso-del-caballero-oscuro-tercera-ed",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-leyendas-del-caballero-oscuro-gotico",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-y-los-outsiders",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-un-mal-dia-01-el-acertijo",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-un-mal-dia-02-dos-caras",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/wonder-woman-tierra-muerta",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-un-mal-dia-06-bane",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-la-guerra-de-gotham-camino-a-poder-absoluto",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/titanes-la-reina-de-alas-negras-camino-a-poder-absoluto",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-un-mal-dia-08-ra-s-al-ghul",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-prisiones-oscuras",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/superman-la-casa-de-brainiac-con-comic-de-regalo",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-detective-comics-gotham-nocturna-acto-segundo",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/poder-absoluto",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-poder-absoluto",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/liga-de-la-justicia-ilimitada-01-en-el-infierno",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/wonder-woman-de-tom-king-01-fuera-de-la-ley",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-detective-comics-04-gotham-nocturna-interludio",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/titanes-mundo-bestia-camino-a-poder-absoluto",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-una-muerte-en-la-familia-robin-vive",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-ciudad-moribunda",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/watchmen-2da-edicion-limitada",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-superman-los-mejores-del-mundo-eclipso-total",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/liga-de-la-justicia-ilimitada-02-somos-ayer",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/superman-legion-de-darkseid-camino-a-dc-ko",
        "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/liga-de-la-justicia-ilimitada-03-el-acto-omega"
    ],
    "Marvel": [
        "https://www.lacasitadelcoleccionista.com.ar/comics/panini-marvel/x-men-05-amanecer-x-parte-1-con-resena-en-youtube",
        "https://www.lacasitadelcoleccionista.com.ar/comics/panini-marvel/spider-man-la-sombra-de-la-arana",
        "https://www.lacasitadelcoleccionista.com.ar/comics/panini-marvel/daredevil-04-el-fin-del-infierno",
        "https://www.lacasitadelcoleccionista.com.ar/comics/panini-marvel/daredevil-el-hombre-sin-miedo-must-havetapa-dura",
        "https://www.lacasitadelcoleccionista.com.ar/comics/panini-marvel/ultimate-invasion",
        "https://www.lacasitadelcoleccionista.com.ar/comics/panini-marvel/avengers-01-la-ciudad-imposible-parte-01-nueva-serie",
        "https://www.lacasitadelcoleccionista.com.ar/comics/panini-marvel/the-ultimates-vol01-cambiando-al-mundo",
        "https://www.lacasitadelcoleccionista.com.ar/comics/panini-marvel/ultimate-spider-man-vol-02-the-paper"
    ],
    "Indie": [
        "https://www.lacasitadelcoleccionista.com.ar/comics/planeta/hay-algo-matando-ninos-01",
        "https://www.lacasitadelcoleccionista.com.ar/comics/planeta/hay-algo-matando-ninos-02",
        "https://www.lacasitadelcoleccionista.com.ar/comics/europeo-importado/ecc/green-arrow-el-arco-del-cazador-mike-grellon-demand"
    ]
}

# Lista plana donde guardaremos todo
all_comics = []

print("🚀 Iniciando scraper unificado...")
print("------------------------------------------------")

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
}

# Aplanamos el bucle: recorremos dict pero guardamos en una sola lista
for category, links in links_dict.items():
    for url in links:
        try:
            response = requests.get(url, headers=headers, timeout=15)
            
            if response.status_code == 200:
                soup = BeautifulSoup(response.content, 'html.parser')
                
                # Título
                og_title = soup.find("meta", property="og:title")
                title = og_title["content"].replace(" - La Casita del Coleccionista", "").strip() if og_title else "Sin Título"

                # Imagen
                og_image = soup.find("meta", property="og:image")
                image_url = og_image["content"] if og_image else ""
                if image_url.startswith("http://"): image_url = image_url.replace("http://", "https://")

                # Precio
                og_price = soup.find("meta", property="og:price:amount")
                price_formatted = "Consultar"

                if og_price and og_price.get("content"):
                    try:
                        amount = float(og_price["content"])
                        price_formatted = f"$ {amount:,.0f}".replace(",", ".")
                    except:
                        price_formatted = "$ " + og_price["content"]
                
                print(f"✅ {price_formatted} | {title[:40]}...")

                # Guardamos sin Tags y sin Categoría
                all_comics.append({
                    "title": title,
                    "url": url,
                    "image": image_url,
                    "price": price_formatted
                })
            else:
                print(f"❌ Error {response.status_code}")
                
        except Exception as e:
            print(f"⚠️ Error: {e}")

# Guardar
js_content = f"const comicsData = {json.dumps(all_comics, indent=4)};"
with open("data.js", "w", encoding="utf-8") as f:
    f.write(js_content)

print("------------------------------------------------")
print("✅ LISTO! Archivo 'data.js' actualizado (Unificado).")