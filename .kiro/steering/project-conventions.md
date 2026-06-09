# Project Conventions

## Commit messages

Use conventional commits: `feat:`, `fix:`, `docs:`, `chore:`

Examples:
- `docs: add s3 vectors concepts page`
- `feat: add tooltip component`
- `chore: update dependencies`

## Draft workflow

1. Create page with `draft: true` in frontmatter
2. Do NOT add slug to sidebar in `astro.config.mjs`
3. Verify in `npm run dev`
4. To publish: remove `draft: true`, add slug to sidebar

## Site config

- Base path: `/s3-vectors-rag-workload`
- Site: `https://jajera.github.io`
- All internal links must include base path

## New page checklist

1. Create `.mdx` file in correct directory
2. Add frontmatter (title, description)
3. Import needed components
4. Write content following docs-pattern.md
5. Add any new terms to glossary
6. Add slug to sidebar in astro.config.mjs (unless draft)
7. Test with `npm run dev`

## File naming

- All content files: kebab-case `.mdx` (e.g., `vector-operations.mdx`)
- Directories: kebab-case
- Components: PascalCase `.astro`
- Data files: camelCase `.ts`

## Images

- Place in `public/` directory
- Reference as `/s3-vectors-rag-workload/image-name.png`
- Use descriptive alt text
- Prefer diagrams over screenshots where possible
