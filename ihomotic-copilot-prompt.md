# 🤖 GitHub Copilot — Prompt: IHomotic Website

## Contexto general

Crea un sitio web corporativo completo, production-ready y listo para trabajo colaborativo en equipo para **IHomotic**, empresa de domótica con el tagline **"Sustainable & Efficient"**.

El sitio debe ser **bilingüe (es/en)**, responsive con enfoque **mobile-first**, con estructura de código limpia, semántica, accesible y escalable.

> **Nota sobre el contenido:** Todo el contenido será **placeholder**. Usa lorem ipsum para textos largos y datos mock representativos del rubro domótica para títulos, servicios, testimonios y posts de blog. No inventar datos reales de la empresa.

---

## Stack técnico — usar estas versiones exactas

| Tecnología | Versión | Propósito |
|---|---|---|
| Next.js | 16.1 | Framework principal, SSR/SSG, routing |
| React | 19.2 | UI library |
| TypeScript | 5.x simple | Tipado básico de props y datos |
| Tailwind CSS | 4.2 | Estilos — único método permitido |
| next-intl | 4.8.3 | Internacionalización es/en |
| react-hook-form | latest | Manejo de formularios |
| zod | latest | Validación de formularios |
| lucide-react | latest | Iconos |
| Resend | latest | Envío de emails desde API Route |
| clsx + tailwind-merge | latest | Clases condicionales con `cn()` |

---

## Reglas estrictas de estilos — CRÍTICO, no ignorar

- ❌ **CERO** `style={{}}` inline en ningún componente
- ❌ **CERO** etiquetas `<style>` en ningún archivo JSX/TSX
- ❌ **CERO** archivos `.css` por componente
- ✅ **TODO** el manejo visual exclusivamente con clases de Tailwind CSS v4
- ✅ Colores, fuentes y spacing custom definidos en `globals.css` usando `@theme` (sintaxis Tailwind v4 — ya **NO** se usa `tailwind.config.ts`)
- ✅ `globals.css` solo para: directiva `@import "tailwindcss"`, bloque `@theme` con tokens, y variables CSS globales mínimas

---

## Identidad visual

Definir en `globals.css` usando la sintaxis `@theme` de Tailwind v4:

```css
@import "tailwindcss";

@theme {
  /* Colores IHomotic — extraídos del logo oficial */
  --color-brand-green:  #3CB54A;  /* verde principal */
  --color-brand-orange: #F7941D;  /* acento */
  --color-brand-navy:   #1B2A4A;  /* textos y fondos oscuros */
  --color-brand-light:  #F4FAF5;  /* fondo claro */

  /* Tipografía */
  --font-heading: 'Syne', sans-serif;
  --font-body:    'DM Sans', sans-serif;
}
```

**Fuentes:** importar con `next/font/google`:
- Títulos: `Syne` (weights: 600, 700, 800)
- Cuerpo: `DM Sans` (weights: 300, 400, 500)

---

## Estructura de archivos — respetar exactamente

```
ihomotic/
├── public/
│   ├── images/
│   │   └── placeholder/           ← imágenes placeholder por sección
│   ├── favicon.ico
│   ├── robots.txt                 ← configurado correctamente para SEO
│   └── llms.txt                   ← GEO: describe IHomotic para LLMs
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── layout.tsx         ← metadata global + providers + fuentes
│   │   │   ├── page.tsx           ← Home
│   │   │   ├── about/
│   │   │   │   └── page.tsx
│   │   │   ├── services/
│   │   │   │   └── page.tsx
│   │   │   ├── projects/
│   │   │   │   └── page.tsx
│   │   │   ├── faq/
│   │   │   │   └── page.tsx
│   │   │   ├── blog/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx
│   │   │   └── contact/
│   │   │       └── page.tsx
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts       ← endpoint formulario + Resend + rate limiting
│   │   └── sitemap.ts             ← sitemap dinámico autogenerado
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx         ← TopBar + Nav + dropdown + LanguageSwitcher + mobile menu
│   │   │   ├── TopBar.tsx         ← barra superior oscura con datos de contacto
│   │   │   └── Footer.tsx         ← logo + links + redes + copyright dinámico
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── BlogPreview.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Faq.tsx
│   │   │   └── CtaBanner.tsx      ← banner CTA reutilizable entre páginas
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── SectionTitle.tsx
│   │       ├── Badge.tsx
│   │       └── LanguageSwitcher.tsx
│   ├── data/                      ← contenido mock separado del código
│   │   ├── services.ts
│   │   ├── projects.ts
│   │   ├── testimonials.ts
│   │   ├── faq.ts
│   │   └── blog-posts.ts
│   ├── i18n/
│   │   ├── locales/
│   │   │   ├── es.json            ← TODOS los textos del sitio en español
│   │   │   └── en.json            ← TODOS los textos del sitio en inglés
│   │   └── config.ts
│   ├── lib/
│   │   ├── utils.ts               ← función cn() con clsx + tailwind-merge
│   │   ├── metadata.ts            ← helpers para generateMetadata por página
│   │   └── resend.ts              ← cliente de email
│   ├── hooks/
│   │   ├── useScrolled.ts         ← scroll para header sticky
│   │   └── useMobileMenu.ts       ← estado del menú móvil
│   ├── types/
│   │   └── index.ts               ← tipos globales: Post, Service, Testimonial, Project, FaqItem
│   └── constants/
│       ├── routes.ts              ← rutas centralizadas como constantes
│       └── site.ts                ← nombre empresa, email, teléfono, redes sociales
├── .env.local                     ← variables privadas (no commitear)
├── .env.example                   ← plantilla con todas las variables necesarias
├── .eslintrc.json
├── .prettierrc
├── .gitignore
├── next.config.ts
├── tsconfig.json                  ← con path aliases configurados
├── README.md
└── CONTRIBUTING.md
```

---

## Path aliases — configurar en tsconfig.json

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*":            ["./src/*"],
      "@/components/*": ["./src/components/*"],
      "@/lib/*":        ["./src/lib/*"],
      "@/hooks/*":      ["./src/hooks/*"],
      "@/types/*":      ["./src/types/*"],
      "@/data/*":       ["./src/data/*"],
      "@/constants/*":  ["./src/constants/*"],
      "@/i18n/*":       ["./src/i18n/*"]
    }
  }
}
```

---

## Secciones y páginas requeridas

### Header (global)
- **TopBar:** fondo `brand-navy`, dirección, teléfono e email placeholder con íconos de lucide-react
- **Nav principal:** logo a la izquierda, links a la derecha: Home, About, Services (dropdown con 3 sub-servicios de domótica), Projects, FAQ, Blog, Contact
- **LanguageSwitcher:** toggle ES | EN integrado en el nav
- **Mobile:** hamburger menu con animación slide-in usando CSS transitions de Tailwind. Área de toque mínima 44x44px
- **Comportamiento:** sticky al hacer scroll, sombra suave al activarse usando `useScrolled`
- **Accesibilidad:** `aria-expanded`, `aria-label`, `aria-controls`, navegación completa por teclado

### Home (`/`)
Landing page que combina previews de todas las secciones en este orden:
1. Hero
2. Services preview (3 cards)
3. About resumido con stats
4. Testimonials
5. Blog preview (3 posts)
6. CtaBanner final

### Hero
- Imagen de fondo full-width con overlay oscuro usando `next/image`
- Badge superior con ícono lucide-react
- Título H1 en fuente `Syne`, bold, grande
- Subtítulo en `DM Sans`
- Dos CTAs: primario (fondo `brand-green`) y secundario (outline `brand-green`)
- Scroll indicator animado con clases CSS de Tailwind
- Tipografía fluida: `text-4xl md:text-6xl lg:text-7xl`

### Services (`/services`)
- Grid 3 columnas desktop, 2 tablet, 1 móvil
- 6 servicios mock: Automatización del Hogar, Iluminación Inteligente, Seguridad y CCTV, Ahorro Energético, Control por Voz, Integración IoT
- Cada card: ícono lucide-react, título, descripción placeholder, link "Ver más"
- Datos en `src/data/services.ts`

### About (`/about`)
- Layout 2 columnas: texto izquierda, imagen derecha (apilado en móvil)
- Stats animados al entrar en viewport: proyectos, clientes satisfechos, años de experiencia, ciudades
- Lista de valores con ícono `Check` de lucide-react en `brand-green`
- Sección del equipo con avatares placeholder (iniciales en círculo con fondo `brand-light`)

### Projects (`/projects`)
- Grid de proyectos: imagen, nombre, tipo de instalación, descripción breve
- Filtro visual por categoría (solo UI, sin lógica de backend)
- Datos en `src/data/projects.ts`:
```ts
type Project = {
  id: string
  title: string
  category: string
  description: string
  image: string
  location: string
}
```

### FAQ (`/faq`)
- Accordion accesible con `aria-expanded` y `aria-controls`
- **IMPORTANTE para GEO:** redactar preguntas y respuestas en formato conversacional natural para que LLMs las citen directamente
- Mínimo 8 preguntas mock relevantes a domótica
- Datos en `src/data/faq.ts`:
```ts
type FaqItem = {
  question: string
  answer: string
}
```

### Blog (`/blog` y `/blog/[slug]`)
- **Listado:** grid 3 columnas con imagen, categoría, título, extracto, fecha y link
- **Detalle:** imagen hero, título, fecha, contenido lorem ipsum, sección "Posts relacionados"
- Datos en `src/data/blog-posts.ts`:
```ts
type Post = {
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  date: string
  image: string
  author: string
}
```

### Contact (`/contact`)
- Campos: nombre, email, teléfono, asunto, mensaje
- Validación con `react-hook-form` + `zod`
- Mensajes de error en el idioma activo (desde archivos JSON de i18n)
- Al enviar: llama a `/api/contact` que usa Resend
- Panel lateral con dirección, teléfono, email e íconos lucide-react
- Estados en el botón: loading, éxito y error

### Footer (global)
- Logo + descripción breve placeholder
- Links en 3 columnas: Servicios, Empresa, Legal
- Íconos de redes sociales con lucide-react (LinkedIn, Instagram, Facebook, Twitter/X)
- Copyright dinámico: `© {new Date().getFullYear()} IHomotic`

---

## SEO — implementar en todas las páginas

### Metadata dinámica
Usar `generateMetadata()` en cada `page.tsx`:
```ts
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: 'Título de la página | IHomotic',
    description: 'Descripción placeholder de la página',
    openGraph: {
      title: '...',
      description: '...',
      images: ['/images/placeholder/og-image.jpg'],
    },
    twitter: { card: 'summary_large_image' },
    alternates: {
      canonical: 'https://ihomotic.com/[ruta]',
      languages: {
        'es': 'https://ihomotic.com/es/[ruta]',
        'en': 'https://ihomotic.com/en/[ruta]',
      }
    }
  }
}
```

### JSON-LD Schema
Agregar en el layout raíz Schema.org tipo `LocalBusiness` + `Service`:
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "IHomotic",
  "description": "Sustainable & Efficient home automation solutions",
  "url": "https://ihomotic.com",
  "serviceType": "Home Automation"
}
```

### Otros elementos SEO
- `sitemap.ts` dinámico que incluya todas las rutas y slugs del blog
- `robots.txt` que permita indexación completa y apunte al sitemap
- Un solo `H1` por página, jerarquía correcta de headings
- `alt` descriptivo en todas las imágenes con `next/image`

### GEO — Generative Engine Optimization
Crear `public/llms.txt`:
```
# IHomotic

IHomotic is a home automation company specializing in sustainable and efficient smart home solutions.

## Services
- Home Automation
- Smart Lighting
- Security & CCTV
- Energy Saving
- Voice Control
- IoT Integration

## Contact
[placeholder contact info]
```

---

## Internacionalización (i18n)

Usar `next-intl` 4.8.3 con App Router. Generar `es.json` y `en.json` **completos** con todas las cadenas organizadas por sección:

```json
{
  "nav": {
    "home": "Inicio",
    "about": "Nosotros",
    "services": "Servicios",
    "projects": "Proyectos",
    "faq": "Preguntas frecuentes",
    "blog": "Blog",
    "contact": "Contacto"
  },
  "hero": {
    "badge": "Soluciones de domótica",
    "title": "Advancing practice to performance",
    "subtitle": "Lorem ipsum dolor sit amet...",
    "cta_primary": "Ver servicios",
    "cta_secondary": "Contáctanos"
  },
  "services": { "...": "..." },
  "about": { "...": "..." },
  "projects": { "...": "..." },
  "faq": { "...": "..." },
  "blog": { "...": "..." },
  "contact": { "...": "..." },
  "footer": { "...": "..." },
  "common": {
    "read_more": "Leer más",
    "view_all": "Ver todos",
    "send": "Enviar",
    "loading": "Enviando...",
    "success": "Mensaje enviado correctamente",
    "error": "Hubo un error, intenta de nuevo"
  }
}
```

---

## Accesibilidad — WCAG AA

- Skip-to-content link visible al recibir foco: `<a href="#main-content">`
- Roles ARIA en menú móvil, accordion FAQ y formulario de contacto
- `aria-label` en todos los botones que solo contienen íconos
- Contraste mínimo AA entre textos y fondos de la paleta IHomotic
- Área de toque mínima 44x44px en todos los elementos interactivos en móvil
- Navegación completa por teclado en todos los componentes interactivos
- `focus-visible` con outline visible — no eliminar sin reemplazar

---

## Performance

- Todas las imágenes con `next/image` — WebP automático, lazy loading, `sizes` correcto por breakpoint
- Fuentes con `next/font/google` y `display: 'swap'`
- Componentes pesados con `dynamic()` de Next.js
- Tipografía fluida con clases responsivas de Tailwind (`text-4xl md:text-6xl lg:text-7xl`)

---

## Formulario de contacto — API Route

`src/app/api/contact/route.ts` debe:
1. Recibir datos del formulario via POST
2. Validar con zod server-side
3. Rate limiting básico por IP
4. Enviar email con Resend
5. Retornar respuesta JSON con estado

Variables de entorno en `.env.example`:
```
RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_EMAIL_TO=placeholder@ihomotic.com
NEXT_PUBLIC_SITE_URL=https://ihomotic.com
```

---

## TypeScript — reglas simples

- Tipar todas las props con `type` o `interface`
- **No usar `any`** bajo ninguna circunstancia
- No usar genéricos complejos ni tipos condicionales
- Todos los tipos globales en `src/types/index.ts`
- Nivel de complejidad esperado:

```ts
// ✅ Correcto
type Service = {
  id: string
  icon: string
  title: string
  description: string
}

type ButtonProps = {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  disabled?: boolean
}
```

---

## Calidad de código

- Componentes pequeños con responsabilidad única
- Los componentes no hardcodean contenido — lo reciben como props o lo importan de `src/data/`
- Usar `cn()` de `src/lib/utils.ts` para todas las clases condicionales de Tailwind
- JSDoc en componentes que reciben múltiples props
- Convenciones de nombres: PascalCase para componentes, camelCase con `use` para hooks, UPPER_SNAKE_CASE para constantes
- Imports ordenados: primero librerías externas, luego imports internos con aliases `@/`

---

## Configuración de colaboración

### .prettierrc
```json
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100
}
```

### .eslintrc.json
- `eslint-config-next` como base
- `no-unused-vars` → error
- `no-console` → warning
- `@typescript-eslint/no-explicit-any` → error

### .gitignore
```
node_modules/
.next/
out/
dist/
.env*.local
.DS_Store
*.log
.vscode/
.idea/
```

### README.md — debe incluir
1. Descripción del proyecto y stack
2. Requisitos: Node 20+, npm o pnpm
3. Comandos disponibles:
   - `npm install` — instalar dependencias
   - `npm run dev` — servidor de desarrollo
   - `npm run build` — build de producción
   - `npm run lint` — revisar errores de ESLint
   - `npm run format` — formatear con Prettier
4. Configuración de variables de entorno (referencia a `.env.example`)
5. Estructura de carpetas explicada
6. Convención de ramas de Git:
   - `main` → producción
   - `develop` → staging
   - `feature/nombre-feature` → nuevas funcionalidades
   - `fix/nombre-bug` → correcciones de bugs
7. Convención de commits:
   - `feat(scope): descripción`
   - `fix(scope): descripción`
   - `style(scope): descripción`
   - `chore(scope): descripción`
   - `docs(scope): descripción`

### CONTRIBUTING.md — debe incluir
1. Cómo agregar una nueva página
2. Cómo agregar un nuevo componente UI
3. Cómo agregar una nueva sección a una página existente
4. Cómo agregar o editar traducciones en los archivos JSON
5. Cómo actualizar los datos mock en `src/data/`
6. Flujo de Pull Request: rama → PR a `develop` → revisión → merge

---

## Entregable final

Genera **todos y cada uno de los archivos** listados en la estructura con código funcional y completo:

- ✅ El proyecto ejecuta con `npm install && npm run dev` sin errores
- ✅ Sin `// TODO` ni funciones vacías
- ✅ Sin `any` en TypeScript
- ✅ Sin estilos inline ni etiquetas `<style>`
- ✅ Todas las páginas con su `generateMetadata()` correspondiente
- ✅ `es.json` y `en.json` completos con todas las cadenas de texto
- ✅ `.env.example` documenta todas las variables necesarias
- ✅ Cada componente en su propio archivo con props tipadas
