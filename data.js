const comicsData = [{
	"title": "Crimen y castigo (Vintage)",
	"url": "https://www.penguinlibros.com/ar/grandes-clasicos/384902-libro-crimen-y-castigo-vintage-9789873952890",
	"image": "https://www.penguinlibros.com/ar/6221162-thickbox_default/crimen-y-castigo-vintage.webp",
	"price": "$ 21.499"
},
	{
		"title": "1984 (Vintage)",
		"url": "https://www.penguinlibros.com/ar/ciencia-ficcion/384898-libro-1984-vintange-9789873952852",
		"image": "https://www.penguinlibros.com/ar/5973322-thickbox_default/1984-vintange.webp",
		"price": "$ 16.999"
	},
	{
		"title": "Un mundo feliz (Vintage)",
		"url": "https://www.penguinlibros.com/ar/grandes-clasicos/393891-libro-un-mundo-feliz-vintage-9789873952913",
		"image": "https://www.penguinlibros.com/ar/6383259-thickbox_default/un-mundo-feliz-vintage.webp",
		"price": "$ 16.999"
	},
	{
		"title": "Meditaciones",
		"url": "https://www.penguinlibros.com/ar/filosofia/352604-libro-meditaciones-9789877371291",
		"image": "https://www.penguinlibros.com/ar/4409158-thickbox_default/meditaciones.webp",
		"price": "$ 29.999"
	},
	{
		"title": "CRISIS EN TIERRAS INFINITAS (PAPEL OBRA)",
		"url": "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/crisis-en-tierras-infinitas-papel-obra",
		"image": "https://d22fxaf9t8d39k.cloudfront.net/630ca31df8829d4a84c7289dde4bc77b143d3e6639028d4f4ef6665a3b342fbf29948.jpg",
		"price": "$ 29.000"
	},
	{
		"title": "ABSOLUTE FLASH VOL.01",
		"url": "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/absolute-flash-vol01",
		"image": "https://d22fxaf9t8d39k.cloudfront.net/05f50283a646fdfe49eea4dceb6c4c6b8c1a4fe63d5236b181f84590b8f5bfe929948.jpg",
		"price": "$ 20.000"
	},
	{
		"title": "UNIVERSO BATMAN",
		"url": "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/universo-batman",
		"image": "https://d22fxaf9t8d39k.cloudfront.net/46472ee25e8bdacf4d84e6194c253e256a892c1bb26c569bbffbc969982bf9ea29948.jpeg",
		"price": "$ 20.000"
	},
	{
		"title": "BATMAN: HISTORIAS DE FANTASMAS",
		"url": "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-historias-de-fantasmas",
		"image": "https://d22fxaf9t8d39k.cloudfront.net/fcdd390190c1350696acd1ff57ff12106228fd043b80d31ebd42c10f2be2cd7429948.jpeg",
		"price": "$ 29.000"
	},
	{
		"title": "BATMAN DE SCOTT SNYDER VOL.05: SUPERPESADO",
		"url": "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-de-scott-snyder-vol05-superpesado",
		"image": "https://d22fxaf9t8d39k.cloudfront.net/89ce10297b0b33f759a4ed465afc8f3a41f018d41344a3726db9d664441b0ba029948.jpeg",
		"price": "$ 29.000"
	},
	{
		"title": "BATMAN: ESTADO DE MIEDO",
		"url": "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-estado-de-miedo",
		"image": "https://d22fxaf9t8d39k.cloudfront.net/9120ab0a4892f32e371d1957ed15f58f46608fc53600df0762dabf994012e60029948.jpeg",
		"price": "$ 24.000"
	},
	{
		"title": "BATMAN: A\u00d1O DOS",
		"url": "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-ano-dos",
		"image": "https://d22fxaf9t8d39k.cloudfront.net/22df96c0405c0c5a85df989618ca323370a70d1b653fe45daf1b720e23a50ae529948.jpeg",
		"price": "$ 21.000"
	},
	{
		"title": "CRISIS OSCURA EN TIERRAS INFINITAS VOL.03 (tomo final)",
		"url": "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/crisis-oscura-en-tierras-infinitas-vol03-tomo-final",
		"image": "https://d22fxaf9t8d39k.cloudfront.net/8966615d7a7738689e90c8041e259157c251321a225e8eb7407084724a1b187429948.jpg",
		"price": "$ 26.000"
	},
	{
		"title": "BATMAN: CABALLERO BLANCO DEL FUTURO",
		"url": "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-caballero-blanco-del-futuro",
		"image": "https://d22fxaf9t8d39k.cloudfront.net/05d28ebb0575e2f8e68024722fcd6762e90423faf9fcc0475e7b66b5c5dfe84529948.jpg",
		"price": "$ 24.000"
	},
	{
		"title": "BATMAN KNIGHTFALL: LA CA\u00cdDA DEL CABALLERO VOL. 01",
		"url": "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-knightfall-la-caida-del-caballero-vol-01",
		"image": "https://d22fxaf9t8d39k.cloudfront.net/60dcb4ff2b5127d4c7e993932daf8f93ad4b6045d0c0be13126038165c845c1629948.jpg",
		"price": "$ 29.000"
	},
	{
		"title": "BATMAN INC.",
		"url": "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-inc",
		"image": "https://d22fxaf9t8d39k.cloudfront.net/b4f996d5c5dfd1f382ea742ead650e2c2daa5391010d08c375800276f22e125b29948.jpg",
		"price": "$ 26.000"
	},
	{
		"title": "BATMAN - LEYENDAS DEL CABALLERO OSCURO: SHAMAN",
		"url": "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-leyendas-del-caballero-oscuro-shaman",
		"image": "https://d22fxaf9t8d39k.cloudfront.net/72d0ef48aebc2fe5a0b4f548e6bec9ac4f00711ee87ca6986ca2c114a8bb732929948.jpg",
		"price": "$ 20.000"
	},
	{
		"title": "BATMAN - LEYENDAS DEL CABALLERO OSCURO: PRESA",
		"url": "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-leyendas-del-caballero-oscuro-presa",
		"image": "https://d22fxaf9t8d39k.cloudfront.net/627f9a3a5ad4fae2c98d2097d46b0765599861b7dfc0ad05340a28a87aa7ee4429948.jpg",
		"price": "$ 15.000"
	},
	{
		"title": "AQUAMAN: A\u00d1O UNO",
		"url": "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/aquaman-ano-uno",
		"image": "https://d22fxaf9t8d39k.cloudfront.net/db6e8fc456cbbeabd387ad4f626a7659111fba77d84cbbe625b12198e5bfa26d29948.jpg",
		"price": "$ 22.000"
	},
	{
		"title": "BATMAN: A\u00d1O TRES",
		"url": "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-ano-tres",
		"image": "https://d22fxaf9t8d39k.cloudfront.net/8c9dfde41411be914276714d771fb505b08e87e954bd798d49a6ea67b5579db829948.jpg",
		"price": "$ 15.000"
	},
	{
		"title": "BATMAN: EL REGRESO DEL CABALLERO OSCURO (TERCERA ED.)",
		"url": "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-el-regreso-del-caballero-oscuro-tercera-ed",
		"image": "https://d22fxaf9t8d39k.cloudfront.net/f3b9d9dbbedd24c97234d9bcac21cb40f0f7e4a2a38033ffdd466d5e7d45eb8429948.jpg",
		"price": "$ 24.000"
	},
	{
		"title": "BATMAN - LEYENDAS DEL CABALLERO OSCURO: G\u00d3TICO",
		"url": "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-leyendas-del-caballero-oscuro-gotico",
		"image": "https://d22fxaf9t8d39k.cloudfront.net/182952c60e2001eb516341beb0c725875e4f8891ab3f39250bd4ba0755fd79cd29948.jpg",
		"price": "$ 18.000"
	},
	{
		"title": "BATMAN Y LOS OUTSIDERS",
		"url": "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-y-los-outsiders",
		"image": "https://d22fxaf9t8d39k.cloudfront.net/d1232bb737d988a35d068f110a733f814b93a8e003585c8e310b331e66cdd54629948.jpg",
		"price": "$ 24.000"
	},
	{
		"title": "BATMAN: UN MAL D\u00cdA 01: EL ACERTIJO",
		"url": "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-un-mal-dia-01-el-acertijo",
		"image": "https://d22fxaf9t8d39k.cloudfront.net/03edc0585655ced423ec201331665c130314424371ae6faed740d67ced7ca3c929948.jpg",
		"price": "$ 14.000"
	},
	{
		"title": "BATMAN: UN MAL D\u00cdA 02: DOS CARAS",
		"url": "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-un-mal-dia-02-dos-caras",
		"image": "https://d22fxaf9t8d39k.cloudfront.net/2b1c32239e81348c57cfc30c6eeb462d44d500d3ef1c43cfd392b1054c891b6829948.jpg",
		"price": "$ 14.000"
	},
	{
		"title": "WONDER WOMAN: TIERRA MUERTA",
		"url": "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/wonder-woman-tierra-muerta",
		"image": "https://d22fxaf9t8d39k.cloudfront.net/4f19f677f3594694c6a323e31340741be65099126b0cc59e94f264aae831d3f129948.jpg",
		"price": "$ 20.000"
	},
	{
		"title": "BATMAN: UN MAL D\u00cdA 06: BANE",
		"url": "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-un-mal-dia-06-bane",
		"image": "https://d22fxaf9t8d39k.cloudfront.net/f2a37547ee70a5195d68c5fc41f43f169cde05b06190b91963c20d6ccfa83b4929948.jpg",
		"price": "$ 14.000"
	},
	{
		"title": "BATMAN: LA GUERRA DE GOTHAM (CAMINO A PODER ABSOLUTO)",
		"url": "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-la-guerra-de-gotham-camino-a-poder-absoluto",
		"image": "https://d22fxaf9t8d39k.cloudfront.net/1cedee85ffbe068646ddc379e60fb4b100174f19ebf13ce245745feecb32fed729948.jpg",
		"price": "$ 28.000"
	},
	{
		"title": "TITANES: LA REINA DE ALAS NEGRAS (CAMINO A PODER ABSOLUTO)",
		"url": "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/titanes-la-reina-de-alas-negras-camino-a-poder-absoluto",
		"image": "https://d22fxaf9t8d39k.cloudfront.net/b13b7726e1932ad97359468efa4cfbcd8762795d23062ad6291be0958845cba129948.jpg",
		"price": "$ 21.000"
	},
	{
		"title": "BATMAN: UN MAL D\u00cdA 08: RA S AL GHUL",
		"url": "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-un-mal-dia-08-ra-s-al-ghul",
		"image": "https://d22fxaf9t8d39k.cloudfront.net/8087c9fc45a3a0fc2756e3f105390ab27f7730112b6d4948048f036bdf91d91f29948.jpg",
		"price": "$ 14.000"
	},
	{
		"title": "BATMAN: PRISIONES OSCURAS",
		"url": "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-prisiones-oscuras",
		"image": "https://d22fxaf9t8d39k.cloudfront.net/14b33532178d46561a89cb5a41f4c4e67140ff34faf122f88d88c69fbc41826929948.jpg",
		"price": "$ 23.000"
	},
	{
		"title": "SUPERMAN: LA CASA DE BRAINIAC (con comic de regalo)",
		"url": "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/superman-la-casa-de-brainiac-con-comic-de-regalo",
		"image": "https://d22fxaf9t8d39k.cloudfront.net/286ee298b49e1a4af6f18016f9ff984e681e4ffed9597e5b28c17260a626d39629948.jpg",
		"price": "$ 24.000"
	},
	{
		"title": "BATMAN: DETECTIVE COMICS GOTHAM NOCTURNA: ACTO SEGUNDO",
		"url": "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-detective-comics-gotham-nocturna-acto-segundo",
		"image": "https://d22fxaf9t8d39k.cloudfront.net/ecd69f60a04c7f0659540ac436fa1798db73036527d4eb98d1c03b7bc702162329948.jpg",
		"price": "$ 22.000"
	},
	{
		"title": "PODER ABSOLUTO",
		"url": "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/poder-absoluto",
		"image": "https://d22fxaf9t8d39k.cloudfront.net/cfd379d03c95858df5dd7c4e1ea2cdd460ccf3f6f9acd1b32e49a189d61f960629948.jpg",
		"price": "$ 24.000"
	},
	{
		"title": "BATMAN: PODER ABSOLUTO",
		"url": "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-poder-absoluto",
		"image": "https://d22fxaf9t8d39k.cloudfront.net/68b66c1f260cdaea092c709b0c0983fb44eb58560ff63a016bd273b2963f000d29948.jpg",
		"price": "$ 26.000"
	},
	{
		"title": "LIGA DE LA JUSTICIA ILIMITADA 01: EN EL INFIERNO",
		"url": "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/liga-de-la-justicia-ilimitada-01-en-el-infierno",
		"image": "https://d22fxaf9t8d39k.cloudfront.net/73ef04fa33048121e8ff8cfaf138398260bc3e516f9102e85aeb4caa417b962929948.jpg",
		"price": "$ 18.000"
	},
	{
		"title": "THE ULTIMATES VOL.01: CAMBIANDO AL MUNDO",
		"url": "https://www.lacasitadelcoleccionista.com.ar/comics/panini-marvel/the-ultimates-vol01-cambiando-al-mundo",
		"image": "https://d22fxaf9t8d39k.cloudfront.net/73c9f296dfa16ab099365bd8ff7fd7568dc21dc7aa12defb228b8779a28f4d4729948.jpg",
		"price": "$ 16.500"
	},
	{
		"title": "WONDER WOMAN DE TOM KING 01: FUERA DE LA LEY",
		"url": "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/wonder-woman-de-tom-king-01-fuera-de-la-ley",
		"image": "https://d22fxaf9t8d39k.cloudfront.net/0793f580fd4a424cc36c13d726f40a68e08377b68cd618b7320551567ad6e98d29948.jpg",
		"price": "$ 21.000"
	},
	{
		"title": "BATMAN: DETECTIVE COMICS 04: GOTHAM NOCTURNA: INTERLUDIO",
		"url": "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-detective-comics-04-gotham-nocturna-interludio",
		"image": "https://d22fxaf9t8d39k.cloudfront.net/c4e59a2f47b2a0fd7d235306062b256df0415114615d57a8a1547d1de0a37e5d29948.jpg",
		"price": "$ 22.000"
	},
	{
		"title": "TITANES: MUNDO BESTIA (CAMINO A PODER ABSOLUTO)",
		"url": "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/titanes-mundo-bestia-camino-a-poder-absoluto",
		"image": "https://d22fxaf9t8d39k.cloudfront.net/bfa61f5936846e9515473add47f5c44526a934d36d08d838b913999fc6d0e48b29948.jpg",
		"price": "$ 25.000"
	},
	{
		"title": "BATMAN: UNA MUERTE EN LA FAMILIA: ROBIN VIVE!",
		"url": "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-una-muerte-en-la-familia-robin-vive",
		"image": "https://d22fxaf9t8d39k.cloudfront.net/df41d43d02fcd3aef932112ffb796c7e456b9aac311acfbea7dae04cb57fa40129948.jpg",
		"price": "$ 28.000"
	},
	{
		"title": "ULTIMATE SPIDER-MAN VOL 02: THE PAPER",
		"url": "https://www.lacasitadelcoleccionista.com.ar/comics/panini-marvel/ultimate-spider-man-vol-02-the-paper",
		"image": "https://d22fxaf9t8d39k.cloudfront.net/e94f10d6a9f8728ddb59c82778d7aceb8699590f5cbc0e94cb9c27a2ce0c130729948.jpg",
		"price": "$ 15.000"
	},
	{
		"title": "BATMAN: CIUDAD MORIBUNDA",
		"url": "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-ciudad-moribunda",
		"image": "https://d22fxaf9t8d39k.cloudfront.net/b59f43e01f7d5aad4fd97ba71107c2fb8cddf48f34d89102630e1d8d339ab58629948.jpg",
		"price": "$ 24.000"
	},
	{
		"title": "WATCHMEN (2DA EDICI\u00d3N LIMITADA)",
		"url": "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/watchmen-2da-edicion-limitada",
		"image": "https://d22fxaf9t8d39k.cloudfront.net/a6987d4473504b3a3fbff54561641df493a612e32d0dd86fbf348d9cbb4e58d029948.jpg",
		"price": "$ 55.000"
	},
	{
		"title": "BATMAN / SUPERMAN: LOS MEJORES DEL MUNDO 07: ECLIPSO TOTAL",
		"url": "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/batman-superman-los-mejores-del-mundo-07-eclipso-total",
		"image": "https://d22fxaf9t8d39k.cloudfront.net/9814832e554ad63153e55c0412e2a3af738c82126dc6196ff12a85c765e0c57229948.jpg",
		"price": "$ 22.000"
	},
	{
		"title": "LIGA DE LA JUSTICIA ILIMITADA 02: SOMOS AYER",
		"url": "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/liga-de-la-justicia-ilimitada-02-somos-ayer",
		"image": "https://d22fxaf9t8d39k.cloudfront.net/7a430a95500b4e094524ef82570e6d85e4a911f6683cbc9a269b33e11fe6b8f229948.jpg",
		"price": "$ 20.000"
	},
	{
		"title": "SUPERMAN: LEGI\u00d3N DE DARKSEID (CAMINO A DC K.O.)",
		"url": "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/superman-legion-de-darkseid-camino-a-dc-ko",
		"image": "https://d22fxaf9t8d39k.cloudfront.net/c990a96b7698bb0a2d4ab3173f666ccef7a1d1a3ffad3e6f1e62f3b00e237dd629948.jpg",
		"price": "$ 16.000"
	},
	{
		"title": "LIGA DE LA JUSTICIA ILIMITADA 03: EL ACTO OMEGA",
		"url": "https://www.lacasitadelcoleccionista.com.ar/comics/ovni-press-dc/liga-de-la-justicia-ilimitada-03-el-acto-omega",
		"image": "https://d22fxaf9t8d39k.cloudfront.net/e46ad3791b4d285a3b1c5c2a4ce260ea6f664ec0737023615af144f6a775ca1229948.jpg",
		"price": "$ 18.000"
	},
	{
		"title": "X-MEN 05: AMANECER X - Parte 1 (con rese\u00f1a en YOUTUBE)",
		"url": "https://www.lacasitadelcoleccionista.com.ar/comics/panini-marvel/x-men-05-amanecer-x-parte-1-con-resena-en-youtube",
		"image": "https://d22fxaf9t8d39k.cloudfront.net/b88f5c5f68d0e1313a9368224e7a764453ebb4a0f1477b45735fa746166cc54729948.jpeg",
		"price": "$ 13.500"
	},
	{
		"title": "SPIDER-MAN: LA SOMBRA DE LA ARA\u00d1A",
		"url": "https://www.lacasitadelcoleccionista.com.ar/comics/panini-marvel/spider-man-la-sombra-de-la-arana",
		"image": "https://d22fxaf9t8d39k.cloudfront.net/2fac5506426ab231471aaccb2ba25126aed3d1e9109508a48997fb60a51e463929948.jpeg",
		"price": "$ 15.000"
	},
	{
		"title": "DAREDEVIL 04: EL FIN DEL INFIERNO",
		"url": "https://www.lacasitadelcoleccionista.com.ar/comics/panini-marvel/daredevil-04-el-fin-del-infierno",
		"image": "https://d22fxaf9t8d39k.cloudfront.net/e50349ab9cc9ec1d83feb6c37f69f334bd387af42167d7c019bae54a70f944a329948.jpeg",
		"price": "$ 12.000"
	},
	{
		"title": "DAREDEVIL: EL HOMBRE SIN MIEDO (MUST HAVE)(TAPA DURA)",
		"url": "https://www.lacasitadelcoleccionista.com.ar/comics/panini-marvel/daredevil-el-hombre-sin-miedo-must-havetapa-dura",
		"image": "https://d22fxaf9t8d39k.cloudfront.net/72a5db12d9a6ede89268eaa103a321b73a536c7e971b001b415efdfe4a15540429948.jpg",
		"price": "$ 30.000"
	},
	{
		"title": "ULTIMATE INVASION",
		"url": "https://www.lacasitadelcoleccionista.com.ar/comics/panini-marvel/ultimate-invasion",
		"image": "https://d22fxaf9t8d39k.cloudfront.net/6906bfd7461487f2c91ce6b383ce635a5266a91901844af64e0b4a2a69da3b9d29948.jpg",
		"price": "$ 27.000"
	},
	{
		"title": "AVENGERS 01: LA CIUDAD IMPOSIBLE - PARTE 01 (NUEVA SERIE)",
		"url": "https://www.lacasitadelcoleccionista.com.ar/comics/panini-marvel/avengers-01-la-ciudad-imposible-parte-01-nueva-serie",
		"image": "https://d22fxaf9t8d39k.cloudfront.net/891fd3fc6b36967eea87c8f941e06003414d41f57439bbeea3789dc5601a97a229948.jpg",
		"price": "$ 13.500"
	},
	{
		"title": "HAY ALGO MATANDO NI\u00d1OS 01",
		"url": "https://www.lacasitadelcoleccionista.com.ar/comics/planeta/hay-algo-matando-ninos-01",
		"image": "https://d22fxaf9t8d39k.cloudfront.net/6dd4a9e64b2fde15aad3dfedcb8f5b9a246c8902eb1e1bcfd1852519fce6da5529948.jpeg",
		"price": "$ 13.900"
	},
	{
		"title": "HAY ALGO MATANDO NI\u00d1OS 02",
		"url": "https://www.lacasitadelcoleccionista.com.ar/comics/planeta/hay-algo-matando-ninos-02",
		"image": "https://d22fxaf9t8d39k.cloudfront.net/ece512a9ba578ee56e5837b0faced002c4b60ed1bcfafa4e7c9a5019d181911029948.jpeg",
		"price": "$ 13.900"
	},
	{
		"title": "GREEN ARROW: EL ARCO DEL CAZADOR (Mike Grell)(On demand)",
		"url": "https://www.lacasitadelcoleccionista.com.ar/comics/europeo-importado/ecc/green-arrow-el-arco-del-cazador-mike-grellon-demand",
		"image": "https://d22fxaf9t8d39k.cloudfront.net/4f76642bbaa782a7783eca131d2cdce69a5902b5f00ba75dd25eaee6a3b0530529948.jpg",
		"price": "$ 12.000"
	}

];