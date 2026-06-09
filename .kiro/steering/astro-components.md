# Astro Starlight Components

## Available components

### From `@astrojs/starlight/components`

- `Card` — content card with icon and title
- `CardGrid` — grid layout for cards (NEVER use `stagger` prop)
- `Aside` — callout box (note, tip, caution, danger)
- `Tabs` / `TabItem` — tabbed content sections
- `Steps` — ordered step list with visual numbering
- `LinkCard` — card that links to another page
- `Icon` — inline icon

### Custom (`@/components/`)

- `Tooltip` — glossary-powered hover tooltip

## Usage rules

1. `<CardGrid>` — never add `stagger` prop (creates broken offset layout)
2. `<Aside>` — always leave blank line after `</Aside>`
3. `<Tabs>` — each `<TabItem>` needs a `label` prop
4. `Tooltip` — import from `@/components/Tooltip.astro`, use term key from glossary

## Import pattern

```mdx
---
title: My Page
---

import { Card, CardGrid, Aside } from '@astrojs/starlight/components';
import Tooltip from '@/components/Tooltip.astro';
```
