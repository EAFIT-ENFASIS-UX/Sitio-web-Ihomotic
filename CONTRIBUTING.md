# Guía de Contribución — IHomotic

Gracias por contribuir al proyecto IHomotic. Esta guía explica los procesos para mantener consistencia y calidad en el código.

## Cómo agregar una nueva página

1. Crear carpeta en `src/app/[locale]/nombre-pagina/`
2. Crear `page.tsx` con `generateMetadata()` y componente default
3. Agregar las traducciones en `src/i18n/locales/es.json` y `en.json`
4. Agregar la ruta en `src/constants/routes.ts`
5. Agregar el link en `Header.tsx` y/o `Footer.tsx` si corresponde

## Cómo agregar un nuevo componente UI

1. Crear archivo en `src/components/ui/NombreComponente.tsx`
2. Definir las props con `type` (no usar `any`)
3. Usar `cn()` de `@/lib/utils` para clases condicionales
4. Solo usar clases de Tailwind CSS — sin estilos inline ni `<style>`
5. Exportar como named export

## Cómo agregar una nueva sección

1. Crear archivo en `src/components/sections/NombreSeccion.tsx`
2. Usar `useTranslations()` para obtener textos
3. Si necesita datos, crearlos en `src/data/` y tiparlos en `src/types/index.ts`
4. Importar y usar la sección en la página correspondiente

## Cómo agregar o editar traducciones

1. Abrir `src/i18n/locales/es.json` y `en.json`
2. Agregar las nuevas claves en la sección correspondiente
3. Mantener la misma estructura en ambos archivos
4. Usar las traducciones con `useTranslations('namespace')` o `getTranslations()`

## Cómo actualizar datos mock

1. Abrir el archivo correspondiente en `src/data/`
2. Los datos usan claves de traducción como `services.items.nuevo.title`
3. Agregar las traducciones correspondientes en los JSON de i18n
4. Asegurarse de que el tipo está definido en `src/types/index.ts`

## Flujo de Pull Request

1. Crear rama desde `develop`: `feature/nombre` o `fix/nombre`
2. Hacer commits siguiendo la convención: `feat(scope): descripción`
3. Abrir PR hacia `develop`
4. Esperar revisión de al menos un miembro del equipo
5. Resolver comentarios y aprobar
6. Merge a `develop` (squash merge recomendado)

## Reglas importantes

- **Cero** estilos inline (`style={{}}`)
- **Cero** `any` en TypeScript
- **Cero** archivos CSS por componente
- Todo el estilo con Tailwind CSS v4
- Cada componente en su propio archivo
- Imports con aliases `@/`
