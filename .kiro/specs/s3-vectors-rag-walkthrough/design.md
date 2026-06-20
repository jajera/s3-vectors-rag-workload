# Design Document

## Overview

This design describes an Astro Starlight documentation site that teaches Amazon S3 Vectors by example. The site documents the terraform-aws-s3-vectors-rag-demo project — a cloud-native AWS announcements briefing app using S3 Vectors, Bedrock, Lambda, API Gateway, Cognito, and Amplify.

The site follows the same pattern as aws-gcp-interconnect-walkthrough: Astro Starlight with starlight-theme-vintage, Tooltip component for glossary terms, GitHub Pages deployment, and progressive content structure from concepts to hands-on deployment.

### Key Design Decisions

1. **Astro Starlight** — Same documentation framework as sibling repos for consistency
2. **starlight-theme-vintage** — Visual consistency across jajera walkthrough sites
3. **Progressive structure** — Concepts first (S3 Vectors), then pipeline, then deployment
4. **Draft workflow** — New pages start as drafts; publish by removing draft:true and adding to sidebar
5. **HTML tables in MDX** — Markdown tables break when components are imported; always use HTML
6. **Tooltip for glossary** — First occurrence of technical terms per section gets a hover definition
7. **Content from source repo** — All code examples and architectures come from terraform-aws-s3-vectors-rag-demo

## Architecture

### Site Structure

```
s3-vectors-rag-workload/
├── astro.config.mjs           # Starlight config, sidebar, base path
├── package.json               # Astro + Starlight + theme + icons
├── tsconfig.json              # TypeScript with @/ path alias
├── .nvmrc                     # Node 22
├── .github/workflows/deploy.yml  # GitHub Pages CI
├── src/
│   ├── content.config.ts      # Astro content collection
│   ├── content/docs/          # All MDX pages
│   │   ├── index.mdx          # Splash page
│   │   ├── overview.mdx       # Architecture + S3 Vectors intro
│   │   ├── prerequisites/     # Tools + Bedrock access
│   │   ├── s3-vectors/        # Concepts, Terraform, operations, IAM
│   │   ├── rag-pipeline/      # Ingest, query, embeddings, scoring
│   │   ├── deployment/        # Apply, Cognito, web UI
│   │   ├── teardown.mdx       # Destroy
│   │   ├── troubleshooting/   # Errors, common issues
│   │   └── reference.mdx      # Links, outputs
│   ├── components/
│   │   └── Tooltip.astro      # Glossary hover tooltip
│   ├── data/
│   │   └── glossary.ts        # Term definitions
│   └── styles/
│       └── splash-overrides.css
├── public/                    # Static assets (images, favicon)
├── AGENTS.md                  # AI agent context
└── .kiro/
    ├── steering/              # 5 steering files for conventions
    └── specs/                 # This spec
```

### Navigation / Sidebar

```
Introduction (index.mdx - splash)
Overview (overview.mdx)
Prerequisites/
  ├── index.mdx (tools, accounts)
  └── bedrock-access.mdx (model enablement)
S3 Vectors/
  ├── index.mdx (concepts)
  ├── terraform-resources.mdx
  ├── vector-operations.mdx
  └── iam-permissions.mdx
RAG Pipeline/
  ├── index.mdx (overview)
  ├── ingest.mdx
  ├── query.mdx
  ├── embeddings.mdx
  └── scoring.mdx
Deployment/
  ├── index.mdx (what happens)
  ├── terraform-apply.mdx
  ├── cognito-users.mdx
  └── web-ui.mdx
Teardown (teardown.mdx)
Troubleshooting/
  ├── index.mdx (quick checks)
  ├── bedrock-errors.mdx
  └── common-issues.mdx
Reference (reference.mdx)
```

## Components

### Tooltip.astro

Popover-based tooltip that shows glossary definitions on click/hover. Uses CSS anchor positioning with JS fallback for cross-browser support.

Props: `term` (glossary key), `label` (display text, optional)

### Glossary (src/data/glossary.ts)

Record<string, string> mapping term keys to one-sentence definitions. Currently 25 terms covering S3 Vectors, Bedrock, RAG, and infrastructure concepts.

## Content Sources

All technical content comes from terraform-aws-s3-vectors-rag-demo:

| Content                | Source file                       |
| ---------------------- | --------------------------------- |
| S3 Vectors Terraform   | s3_vectors.tf                     |
| IAM policies           | lambda_ingest.tf, lambda_query.tf |
| Vector operations code | rag/ingest.py, rag/query.py       |
| Embedding logic        | rag/ingest.py, rag/fetch.py       |
| Scoring formula        | rag/query.py                      |
| Architecture diagram   | README.md                         |
| Deployment steps       | README.md                         |
| Cognito setup          | cognito.tf, README.md             |

## Publishing Status

### Published (in sidebar, no draft:true)

- index.mdx (splash)
- overview.mdx
- prerequisites/index.mdx
- prerequisites/bedrock-access.mdx
- s3-vectors/index.mdx
- s3-vectors/terraform-resources.mdx
- s3-vectors/vector-operations.mdx
- s3-vectors/iam-permissions.mdx

### Draft (draft:true, NOT in sidebar)

- rag-pipeline/\* (5 pages)
- deployment/\* (4 pages)
- teardown.mdx
- troubleshooting/\* (3 pages)
- reference.mdx

## Deployment

GitHub Actions workflow on push to main:

1. Checkout
2. withastro/action@v6 — install, build, upload
3. actions/deploy-pages@v5 — deploy to GitHub Pages

Site URL: https://jajera.github.io/s3-vectors-rag-workload/
