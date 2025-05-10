# Guía de Despliegue en GitHub Pages

## Configuración Realizada

Se han realizado las siguientes configuraciones para asegurar que la aplicación funcione correctamente en GitHub Pages:

1. **Base URL en vite.config.ts**: Configurada como `/myl-soluciones-portal-digital/`
2. **Rutas relativas en index.html**: Se modificó la ruta del script principal a `./src/main.tsx`
3. **Archivo .nojekyll**: Creado para evitar el procesamiento Jekyll en GitHub Pages
4. **Archivo 404.html**: Implementado para manejar rutas en recarga de página
5. **BrowserRouter con basename**: Configurado para usar la ruta base correcta
6. **Script de despliegue personalizado**: Creado para automatizar el proceso

## Pasos para Desplegar

1. Asegúrate de tener instalado el paquete gh-pages:
   ```
   npm install --save-dev gh-pages
   ```

2. Ejecuta el comando de despliegue:
   ```
   npm run deploy
   ```

3. Verifica que el sitio esté disponible en: 
   `https://[tu-usuario].github.io/myl-soluciones-portal-digital/`

## Solución de Problemas

Si el sitio no se muestra correctamente después del despliegue:

1. Verifica que la rama `gh-pages` se haya creado en tu repositorio
2. Asegúrate de que GitHub Pages esté configurado para usar la rama `gh-pages` en la configuración del repositorio
3. Espera unos minutos para que GitHub Pages procese los cambios
4. Borra la caché del navegador o prueba en modo incógnito

## Configuración de Dominio Personalizado

Si deseas usar un dominio personalizado:

1. Edita el archivo `public/CNAME` y descomenta la línea con tu dominio
2. Configura los registros DNS según las instrucciones de GitHub
3. En la configuración de GitHub Pages de tu repositorio, añade tu dominio personalizado