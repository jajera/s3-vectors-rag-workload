# Agent Context

Astro Starlight documentation site for Amazon S3 Vectors RAG, organized as concept explanations and hands-on walkthroughs based on [terraform-aws-s3-vectors-rag-demo](https://github.com/jajera/terraform-aws-s3-vectors-rag-demo).

## What this repo is

`s3-vectors-rag-workload` contains educational walkthroughs documenting what Amazon S3 Vectors is, how it works, and demonstrates it through a real-world RAG (Retrieval-Augmented Generation) application that briefs users on AWS announcements.

Content is sourced from: `~/workspace/jajera/terraform-aws-s3-vectors-rag-demo`

## Tech stack

- Astro + `@astrojs/starlight` + `starlight-theme-vintage`
- `unplugin-icons` for brand icons (mdi, simple-icons)
- Node 22 (`.nvmrc`)
- GitHub Actions: deploy to GitHub Pages on push to `main`

## Site config

- `site: 'https://jajera.github.io'`
- `base: '/s3-vectors-rag-workload'`
- All internal links must include the base path, e.g. `/s3-vectors-rag-workload/s3-vectors/`

## Site structure

```
src/content/docs/
  index.mdx                    # Splash / Introduction
  overview.mdx                 # Architecture and what S3 Vectors is
  prerequisites/               # Tools, accounts, Bedrock access
  s3-vectors/                  # S3 Vectors concepts, Terraform, API operations
  rag-pipeline/                # Ingest, query, embedding, scoring
  deployment/                  # terraform apply, Cognito, web UI
  teardown.mdx                 # Destroy
  troubleshooting/             # Common errors, Bedrock throttling
  reference.mdx                # Repo layout, variables, outputs, links
src/components/                # Reusable Astro components (Tooltip)
src/data/                      # Glossary terms
src/styles/                    # Theme overrides
```

## Draft/publish workflow

1. New pages are created with `draft: true` in frontmatter.
2. Draft pages are visible in `npm run dev` but excluded from `npm run build`.
3. Do not add a draft page's slug to `astro.config.mjs` sidebar — it will break the build.
4. To publish: remove `draft: true`, then add the slug to the sidebar in `astro.config.mjs`.

## Conventions

Follow `.kiro/steering/` for detailed guidance:

- `docs-pattern.md` — page structure, frontmatter, MDX rules, Tooltip usage
- `astro-components.md` — which component to use when, CardGrid pitfalls, Aside placement
- `glossary.md` — alphabetical order, definition style, usage in pages
- `markdown-tables.md` — **CRITICAL: use HTML tables in MDX, never markdown tables**
- `project-conventions.md` — commit messages, draft workflow, site config, OG tags, new page checklist

## Critical MDX rules (read first)

1. **Tables**: Never use markdown table syntax in `.mdx` files. Use HTML `<table>` elements. MDX breaks pipe-based tables when custom components are imported.
2. **CardGrid**: Do not use `<CardGrid stagger>` — it creates skewed/offset cards. Use `<CardGrid>` without props.
3. **Inline code in HTML**: Use `<code>text</code>`, not backticks, inside HTML table cells or elements.
4. **Blank lines**: Always leave a blank line after closing tags (`</Aside>`, `</table>`) before the next content block.
5. **Tooltip**: Import from `@/components/Tooltip.astro`. Use on first occurrence of a term per section.

## Sibling repos

- [aws-gcp-interconnect-walkthrough](https://github.com/jajera/aws-gcp-interconnect-walkthrough) — pattern reference for Astro Starlight structure, components, and CI
- [terraform-aws-s3-vectors-rag-demo](https://github.com/jajera/terraform-aws-s3-vectors-rag-demo) — source implementation this walkthrough documents
