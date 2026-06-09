# Glossary Conventions

## File location

`src/data/glossary.ts` — exported as `Record<string, string>`

## Rules

1. Keys are lowercase, hyphen-separated (e.g., `s3-vectors`, `vector-index`)
2. Definitions are one sentence, plain language, ending with period
3. Keep alphabetical order
4. Include the AWS service full name and what it does in context of this project
5. Reference Terraform resource names where relevant

## Usage in pages

```mdx
import Tooltip from '@/components/Tooltip.astro';

<Tooltip term="s3-vectors" label="S3 Vectors" />
```

Use on first occurrence per section. Don't tooltip every mention.
