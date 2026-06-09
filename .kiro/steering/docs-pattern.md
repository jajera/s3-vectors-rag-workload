# Documentation Page Pattern

## Frontmatter

Every `.mdx` file starts with:

```yaml
---
title: Page Title
description: One-sentence summary for SEO and sidebar hover.
---
```

Draft pages add `draft: true` — visible in dev but excluded from builds.

## Page structure

1. Brief intro paragraph (2-3 sentences, what and why)
2. Content sections with `##` headings
3. Code blocks with language tags and filenames where relevant
4. Asides for warnings, tips, notes
5. Next-steps or related pages at the bottom

## MDX rules

- Import components at the top, after frontmatter
- Use HTML `<table>` not markdown tables (MDX breaks pipe tables with imports)
- Use `<code>text</code>` in HTML elements, not backticks
- Blank line after every closing tag before next content
- One blank line between imports and content

## Tooltip usage

Import: `import Tooltip from '@/components/Tooltip.astro';`

Use on first occurrence of a glossary term per page section:

```mdx
<Tooltip term="s3-vectors" label="S3 Vectors" />
```

## Code blocks

- Always specify language: ```hcl, ```python, ```bash, ```json
- Use `title="filename.tf"` for file-specific blocks
- Keep blocks under 30 lines; split into multiple blocks with explanations between

## Asides

```mdx
import { Aside } from '@astrojs/starlight/components';

<Aside type="note">Informational content.</Aside>
<Aside type="tip">Helpful suggestion.</Aside>
<Aside type="caution">Watch out for this.</Aside>
<Aside type="danger">Critical warning.</Aside>
```
