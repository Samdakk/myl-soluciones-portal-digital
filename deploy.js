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

// Asegurarse de que el archivo .nojekyll esté en la carpeta dist
const nojekyllPath = path.join(__dirname, 'dist', '.nojekyll');
if (!fs.existsSync(nojekyllPath)) {
  console.log('Creando archivo .nojekyll en dist...');
  fs.writeFileSync(nojekyllPath, '');
}

// Desplegar a GitHub Pages
console.log('Desplegando a GitHub Pages...');
execSync('npx gh-pages -d dist', { stdio: 'inherit' });

console.log('¡Despliegue completado con éxito!');