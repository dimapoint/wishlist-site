import json
import re

import requests
from bs4 import BeautifulSoup

# --- TUS LINKS (Cómics y Libros) ---
links_dict = {"Cómics (La Casita)": [
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
    "https://www.lacasitadelcoleccionista.com.ar/comics/panini-marvel/the-ultimates-vol01-cambiando-al-mundo",
    "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/wonder-woman-de-tom-king-01-fuera-de-la-ley",
    "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-detective-comics-04-gotham-nocturna-interludio",
    "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/titanes-mundo-bestia-camino-a-poder-absoluto",
    "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-una-muerte-en-la-familia-robin-vive",
    "https://www.lacasitadelcoleccionista.com.ar/comics/panini-marvel/ultimate-spider-man-vol-02-the-paper",
    "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-ciudad-moribunda",
    "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/watchmen-2da-edicion-limitada",
    "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-superman-los-mejores-del-mundo-07-eclipso-total",
    "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/liga-de-la-justicia-ilimitada-02-somos-ayer",
    "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/superman-legion-de-darkseid-camino-a-dc-ko",
    "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/liga-de-la-justicia-ilimitada-03-el-acto-omega",
    "https://www.lacasitadelcoleccionista.com.ar/comics/panini-marvel/x-men-05-amanecer-x-parte-1-con-resena-en-youtube",
    "https://www.lacasitadelcoleccionista.com.ar/comics/panini-marvel/spider-man-la-sombra-de-la-arana",
    "https://www.lacasitadelcoleccionista.com.ar/comics/panini-marvel/daredevil-04-el-fin-del-infierno",
    "https://www.lacasitadelcoleccionista.com.ar/comics/panini-marvel/daredevil-el-hombre-sin-miedo-must-havetapa-dura",
    "https://www.lacasitadelcoleccionista.com.ar/comics/panini-marvel/ultimate-invasion",
    "https://www.lacasitadelcoleccionista.com.ar/comics/panini-marvel/avengers-01-la-ciudad-imposible-parte-01-nueva-serie",
    "https://www.lacasitadelcoleccionista.com.ar/comics/planeta/hay-algo-matando-ninos-01",
    "https://www.lacasitadelcoleccionista.com.ar/comics/planeta/hay-algo-matando-ninos-02",
    "https://www.lacasitadelcoleccionista.com.ar/comics/europeo-importado/ecc/green-arrow-el-arco-del-cazador-mike-grellon-demand"],
    "Libros (Penguin)": [
        "https://www.penguinlibros.com/ar/filosofia/352604-libro-meditaciones-9789877371291"]}

final_list = []
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'}

print("🕷️ Iniciando Scraper Multi-Sitio...")
print("-----------------------------------")


def clean_price(raw_price):
    """Convierte cualquier formato de precio a '$ 25.000'"""
    try:
        # Si ya es un número, formatear directo
        if isinstance(raw_price, (float, int)):
            return f"$ {raw_price:,.0f}".replace(",", ".")

        # Si es string, limpiar
        if isinstance(raw_price, str):
            nums = re.sub(r'[^\d,.]', '', raw_price)  # Quitar letras y simbolos
            if not nums: return raw_price

            # Normalizar separadores decimales/miles
            if "," in nums and "." in nums:
                nums = nums.split(",")[0].replace(".", "")
            elif "." in nums:
                nums = nums.split(".")[0]

            val = float(nums)
            return f"$ {val:,.0f}".replace(",", ".")
    except:
        return raw_price
    return raw_price


# --- BUCLE PRINCIPAL ---
for category, links in links_dict.items():
    for url in links:
        try:
            response = requests.get(url, headers=headers, timeout=15)

            if response.status_code == 200:
                soup = BeautifulSoup(response.content, 'html.parser')

                title = "Sin Título"
                image = ""
                price = "Consultar"

                # >>> SITIO A: LA CASITA DEL COLECCIONISTA <<<
                if "lacasitadelcoleccionista" in url:
                    # Titulo
                    og_title = soup.find("meta", property="og:title")
                    if og_title: title = og_title["content"].replace(" - La Casita del Coleccionista", "").strip()

                    # Imagen
                    og_image = soup.find("meta", property="og:image")
                    if og_image: image = og_image["content"]

                    # Precio
                    og_price = soup.find("meta", property="og:price:amount")
                    if og_price: price = clean_price(float(og_price["content"]))

                # >>> SITIO B: PENGUIN LIBROS <<<
                elif "penguinlibros" in url:
                    # Titulo
                    h1 = soup.find("h1", class_="product-detail-name")
                    if h1:
                        title = h1.get_text(strip=True)
                    else:
                        og_title = soup.find("meta", property="og:title")
                        if og_title: title = og_title["content"].split("|")[0].strip()

                    # Imagen (Buscando data-image-large-src en item de imagen)
                    img_tag = soup.find("img", {"itemprop": "image"})
                    if img_tag:
                        # Prioridad: data-image-large-src > src
                        image = img_tag.get("data-image-large-src") or img_tag.get("src")

                    if not image:  # Fallback a Open Graph
                        og_image = soup.find("meta", property="og:image")
                        if og_image: image = og_image["content"]

                    # Precio (Buscando el atributo content="16999" en cualquier tag con itemprop="price")
                    price_tag = soup.find(attrs={"itemprop": "price"})
                    if price_tag:
                        if price_tag.has_attr("content"):
                            price = clean_price(price_tag["content"])
                        else:
                            price = clean_price(price_tag.get_text(strip=True))
                    else:
                        # Fallback visual
                        price_span = soup.find("span", class_="current-price-value") or soup.find("span",
                                                                                                  class_="product-price")
                        if price_span:
                            price = clean_price(price_span.get_text(strip=True))

                # --- VALIDACIONES FINALES ---
                if image and image.startswith("http://"): image = image.replace("http://", "https://")

                print(f"✅ {price} | {title[:40]}...")

                final_list.append({"title": title, "url": url, "image": image, "price": price})

            else:
                print(f"❌ Error {response.status_code}: {url}")

        except Exception as e:
            print(f"⚠️ Excepción en {url}: {e}")

# Guardar en archivo data.js
with open("data.js", "w", encoding="utf-8") as f:
    f.write(f"const comicsData = {json.dumps(final_list, indent=4)};")

print("-----------------------------------")
print("🎁 Wishlist generada correctamente.")
