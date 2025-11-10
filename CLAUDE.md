# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Wootsbot** is a personal portfolio and blog site built with Next.js 16. It features a markdown-based content system using MDX for blog posts with syntax highlighting and automatic SEO optimization.

**Tech Stack:**
- Next.js 16 (App Router)
- React 19
- TypeScript (strict mode)
- Tailwind CSS 4
- Velite (static content generation)
- Biome (linting & formatting)
- Shiki (syntax highlighting)
- Sharp (image compression)
- Blurhash (placeholder generation)

## Development Commands

```bash
# Start development server (with hot reload)
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Lint code with Biome
pnpm lint

# Fix linting issues
pnpm lint:fix

# Format code with Biome (line width: 120, trailing commas for JS)
pnpm format

# Compress staged images before commit
pnpm compress

# Process photos: compress, rename, and generate blurhash
pnpm photos
```

## Project Architecture

### Directory Structure

```
src/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with metadata & fonts
│   ├── page.mdx             # Home page
│   ├── posts/               # Blog section
│   │   ├── layout.tsx       # Blog post wrapper
│   │   └── [...slug]/page.tsx   # Dynamic post routes
│   ├── use/page.mdx         # Uses/Setup page
│   ├── robots.ts            # robots.txt generation
│   ├── sitemap.ts           # Sitemap generation
│   └── global.css           # Root styles
├── components/              # Reusable components
│   ├── home/               # Home page components
│   ├── markdown/           # MDX rendering components
│   │   ├── mdx.tsx         # MDX component wrapper
│   │   ├── layout/page-header.tsx
│   │   └── title.tsx
│   ├── photos/             # Photo gallery components
│   │   ├── photo-gallery-all.tsx  # Server component
│   │   └── photo-grid.tsx         # Client component with view toggle
│   └── ...
├── content/
│   └── posts/              # Blog post .mdx files
├── lib/
│   ├── utils.ts            # Utility functions (cn, clsx)
│   ├── photos.server.ts    # Photo loading (Server Component)
│   └── photos.ts           # Photo exports
└── ...

public/
└── photos/                  # Photo files and metadata
    ├── p-YYYY-MM-DD-HH-MM-SS-NNN-N.jpg
    └── p-YYYY-MM-DD-HH-MM-SS-NNN-N.json  # { blurhash, text?, lang? }

scripts/
├── photos-manage.ts        # Photo processing script
├── img-compress.ts         # Image compression utility
└── img-compress-staged.ts  # Compress staged images

mdx-components.tsx          # MDX component overrides (headings, code, tables, etc.)
velite.config.js            # Content collection schema & MDX pipeline
```

### Core Concepts

#### 1. **Content Management (Velite)**
Blog posts are managed through Velite, which generates static content at build time:
- Posts defined in `src/content/posts/*.mdx`
- Schema in `velite.config.js` validates: title, description, publishedAt, tags, etc.
- Automatic slug generation from file path: `posts/my-post.mdx` → `/posts/my-post`
- Table of contents (toc) auto-generated from headings
- Output generated to `.velite/` (imported via `#/velite` alias)

#### 2. **MDX Pipeline**
Velite processes MDX with the following pipeline:
- **Shiki**: Syntax highlighting (theme: vitesse-dark)
- **Transformers**: Code notation support (diff, focus, highlight, wordHighlight)
- **Rehype Slug**: Auto-generates IDs for headings
- **Rehype Autolink Headings**: Adds anchor links to headings

#### 3. **Component Overrides**
MDX rendering is customized via `mdx-components.tsx` which exports `useMDXComponents()`. This provides styled versions of HTML elements:
- `h1-h6`: Heading styles with scroll margin
- `code`: Inline code with zinc styling
- `pre`: Code block container with language label
- `table/tr/th/td`: Styled tables with borders
- `a`: Links with underline hover effects
- `Image`: Next.js Image component for optimization

#### 4. **Path Aliases**
Configured in `tsconfig.json` for cleaner imports:
```typescript
#/*              → src/*
#/velite         → .velite (generated content)
#/mdxComponents  → mdx-components.tsx
```

### Routing & Pages

- **Home** (`/`): `src/app/page.mdx`
- **Blog Posts** (`/posts/[slug]`): Dynamic route via `src/app/posts/[...slug]/page.tsx`
- **Uses** (`/use`): `src/app/use/page.mdx`
- **Redirects**:
  - `/blog` → `/posts` (permanent)
  - `/blog/:path*` → `/posts/:path*` (permanent)
  - `/uses` → `/use` (permanent)
  - `/guestbook` → `/` (permanent)

### Styling & Theming

- **Tailwind CSS 4**: Primary styling with PostCSS integration
- **Dark Mode**: Enabled via `dark:` prefix (e.g., `dark:bg-[#050505]`)
- **CSS Variables**: For fonts and custom properties
- **Fonts**: Inter (body) and JetBrains Mono (code) from Google Fonts

Root layout (`src/app/layout.tsx`) sets:
- Base colors: white/light gray for light mode, dark for dark mode
- Font variables: `--font-inter`, `--font-jetBrains-mono`
- Max width container: `max-w-xl`
- Global margin/padding defaults

### Code Quality & Linting

**Biome Configuration** (`biome.jsonc`):
- Line width: 120
- Trailing commas: All (except JSON)
- Strict React rules: Exhaustive dependencies, hook usage
- Complexity rules: No nested ternaries, no forEach, optional chaining required
- Performance: No `delete` operator
- Imports organized automatically
- Tailwind CSS parsing enabled for class validation

Key rules to know:
- `useImportType`: Import types must use `import type { ... }`
- `noConsole`: Only allow console.assert/error/info/warn
- `noForEach`: Use `.map()` or `.filter()` instead
- `useOptionalChain`: Prefer `?.` over nested conditionals
- `noUnusedImports`/`noUnusedVariables`: Strict cleanup

## Key Implementation Details

### Adding a New Blog Post

1. Create file: `src/content/posts/your-post-slug.mdx`
2. Add frontmatter (validated by Velite schema):
   ```mdx
   ---
   title: "Your Post Title"
   description: "Short summary"
   publishedAt: "2024-01-15"
   published: true
   tags: ["tag1", "tag2"]
   ---
   
   Your content here...
   ```
3. Build or dev server processes it automatically
4. Post appears at `/posts/your-post-slug`

### Modifying MDX Component Styling

Edit `mdx-components.tsx` to change how any HTML element renders in blog posts. The `cn()` utility (clsx wrapper) is used for conditional class merging.

### SEO & Metadata

- Root metadata in `src/app/layout.tsx`
- OpenGraph, Twitter Card, and verification meta tags configured
- Sitemap generation: `src/app/sitemap.ts`
- Robots.txt generation: `src/app/robots.ts`

### Photo Gallery System

Photos are stored in `public/photos/` with a structured naming convention and metadata:

**Photo Storage:**
- Images: `p-YYYY-MM-DD-HH-MM-SS-NNN-N.{jpg,png}` (named by capture date)
- Metadata: `p-YYYY-MM-DD-HH-MM-SS-NNN-N.json` (optional, contains blurhash, text, lang)

**Photo Workflow:**
1. Place raw images in `public/photos/`
2. Run `pnpm photos` to:
   - Compress images (max 1440px, quality 80)
   - Rename by EXIF date or file date
   - Generate blurhash (32x32 placeholder)
3. Optionally add `.json` files with metadata (text description, language)

**Photo Loading (`src/lib/photos.server.ts`):**
- Server Component that loads images and metadata at build time
- Uses `fast-glob` to find all images and JSON files
- Exports array of `Photo` objects with: `name`, `url`, `blurhash`, `text`, `lang`

**Photo Display Components:**
- `PhotoGalleryAll` (Server): Loads photos and renders grid
- `PhotoGrid` (Client): Displays photos with toggle between cover/contain view
  - Uses `@unpic/placeholder` to show blurhash gradient while loading
  - Responsive grid: 1 col (mobile) → 2 cols (tablet) → 3 cols (desktop) → 4 cols (wide)
  - Lazy loading enabled

**Example usage:**
```tsx
import { PhotoGalleryAll } from "#/components/photos/photo-gallery-all";

export default function Page() {
  return <PhotoGalleryAll />;
}
```

### Environment

- **Node.js**: ≥22
- **Package Manager**: pnpm ≥10
- **React Compiler**: Enabled (`reactCompiler: true`) for automatic optimization

## Common Development Tasks

### Running the Dev Server
```bash
pnpm dev
# Velite watches content files and rebuilds `.velite/` on changes
# Next.js hot reload applies changes instantly
```

### Fixing Lint Errors
```bash
pnpm lint:fix
# Handles most issues automatically; check output for manual fixes needed
```

### Building for Deployment
```bash
pnpm build
# Velite generates content at build time
# Next.js builds pages and optimizes bundles
```

### Testing a Blog Post Build
Edit a `.mdx` file in `src/content/posts/`, save, and the dev server will rebuild the content in `.velite/` automatically. No restart needed.

## Notes

- All page files use `.mdx` extension for App Router (configured via `pageExtensions`)
- The React Compiler is enabled for automatic memoization and performance optimization
- Content is fully static (generated at build time), enabling optimal caching
- Dark mode preference is detected via system settings or Tailwind's dark mode class
