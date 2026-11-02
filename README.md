# Dr. Aníbal Sansó

Sitio web desarrollado con React, TypeScript y Vite.

## Desarrollo local

```bash
npm ci
npm run dev
```

## Publicación en GitHub Pages

El workflow de GitHub Actions en `.github/workflows/deploy.yml` compila y publica el sitio automáticamente al hacer push a `main`. También se puede iniciar manualmente desde la pestaña **Actions**.

Para habilitar la publicación:

1. En GitHub, abre **Settings → Pages** del repositorio.
2. En **Build and deployment**, selecciona **GitHub Actions** como fuente.
3. Espera a que termine el workflow **Deploy to GitHub Pages** en la pestaña **Actions**.

El sitio estará disponible en `https://yairgaston.github.io/DrAnibalSanso/`.

## Compilación local

```bash
npm run build
npm run preview
```
