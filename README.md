# ProdIntel web

Sitio estático público de ProdIntel.

## SEO / Google Search Console

El dominio `prodintel.cl` ya está verificado en Google Search Console.

1. Entra a la propiedad existente de `prodintel.cl`.
2. Ve a **Sitemaps**.
3. Envía [https://prodintel.cl/sitemap.xml](https://prodintel.cl/sitemap.xml).
4. Utiliza **Inspección de URL** para solicitar la indexación de las páginas nuevas.
5. Revisa posteriormente:
   - páginas indexadas
   - errores de indexación
   - Core Web Vitals
   - consultas
   - impresiones
   - clics
   - posición media

## Google Analytics 4 (opcional)

Define `window.PRODINTEL_GA_ID` en `index.html` con el identificador real `G-...`. `ga.js` solo carga Analytics cuando el valor existe y tiene un formato válido. Para un despliegue con pipeline, reemplaza ese valor desde una variable de entorno durante el build.
