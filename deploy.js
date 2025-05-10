#!/usr/bin/env node
// Script de despliegue para GitHub Pages
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtener el directorio actual para ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Construir la aplicación
console.log('Construyendo la aplicación...');
execSync('npm run build', { stdio: 'inherit' });

// Verificar si la carpeta docs existe, y crearla si no
const docsPath = path.join(__dirname, 'docs');
if (!fs.existsSync(docsPath)) {
  console.log('La carpeta docs no existe. Creándola...');
  fs.mkdirSync(docsPath, { recursive: true });
}

// Asegurarse de que el archivo .nojekyll esté en la carpeta docs
const nojekyllPath = path.join(docsPath, '.nojekyll');
if (!fs.existsSync(nojekyllPath)) {

  console.log('Creando archivo .nojekyll en docs...');
  fs.writeFileSync(nojekyllPath, '');
}

// Desplegar a GitHub Pages
console.log('Desplegando a GitHub Pages...');
execSync('npx gh-pages -d docs -r https://github.com/samdakk/myl-soluciones-portal-digital.git', { stdio: 'inherit' });

console.log('¡Despliegue completado con éxito!');