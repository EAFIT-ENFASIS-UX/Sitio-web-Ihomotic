# IHomotic — Sustainable & Efficient

Sitio web corporativo de **IHomotic**, empresa de domótica. Construido con Next.js 16, React 19, TypeScript, Tailwind CSS v4 y next-intl para internacionalización bilingüe (es/en).

## Stack técnico

- **Next.js 16** — Framework principal (SSR/SSG, App Router)
- **React 19** — UI library
- **TypeScript 5** — Tipado estático
- **Tailwind CSS 4** — Estilos utilitarios
- **next-intl 4.8** — Internacionalización es/en
- **react-hook-form + zod** — Formularios y validación
- **lucide-react** — Iconos
- **Resend** — Envío de emails

## Requisitos

- Node.js 20+
- npm o pnpm

## Comandos disponibles

```bash
npm install          # Instalar dependencias
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run lint         # Revisar errores de ESLint
npx prettier --write . # Formatear con Prettier
```

## Variables de entorno

Copia `.env.example` a `.env.local` y completa las variables:

```
RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_EMAIL_TO=placeholder@ihomotic.com
NEXT_PUBLIC_SITE_URL=https://ihomotic.com
```

## Estructura de carpetas

```
ihomotic/
├── public/              # Archivos estáticos (robots.txt, llms.txt, imágenes)
├── src/
│   ├── app/             # App Router (layouts, páginas, API routes, sitemap)
│   │   ├── [locale]/    # Rutas i18n (es/en)
│   │   └── api/         # Endpoints (contacto)
│   ├── components/      # Componentes React
│   │   ├── layout/      # Header, TopBar, Footer
│   │   ├── sections/    # Hero, Services, About, etc.
│   │   └── ui/          # Button, Card, Badge, etc.
│   ├── constants/       # Constantes (routes, site)
│   ├── data/            # Datos mock (services, projects, blog, etc.)
│   ├── hooks/           # Hooks personalizados
│   ├── i18n/            # Configuración i18n y archivos JSON
│   ├── lib/             # Utilidades (cn, metadata, resend)
│   └── types/           # Tipos TypeScript globales
└── Archivos raíz        # Config (tsconfig, next.config, .eslintrc, etc.)
```

## Convención de ramas

| Rama | Propósito |
|---|---|
| `main` | Producción |
| `develop` | Staging |
| `feature/nombre-feature` | Nuevas funcionalidades |
| `fix/nombre-bug` | Correcciones de bugs |

## Convención de commits

```
feat(scope): descripción      # Nueva funcionalidad
fix(scope): descripción       # Corrección de bug
style(scope): descripción     # Cambios de estilos
chore(scope): descripción     # Tareas de mantenimiento
docs(scope): descripción      # Documentación
```

## Licencia

Proyecto privado de IHomotic.
