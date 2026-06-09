# Markdown Tables in MDX — CRITICAL

## Rule: NEVER use markdown table syntax in .mdx files

MDX parsing breaks pipe-based (`|`) tables when custom components are imported on the same page. This is a known Starlight/MDX limitation.

## Always use HTML tables

```html
<table>
  <thead>
    <tr>
      <th>Column 1</th>
      <th>Column 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Value 1</td>
      <td>Value 2</td>
    </tr>
  </tbody>
</table>
```

## Rules for HTML tables in MDX

1. Use `<code>text</code>` for inline code (never backticks inside HTML)
2. Leave a blank line before `<table>` and after `</table>`
3. No markdown formatting inside `<td>` — use HTML equivalents (`<strong>`, `<em>`, `<code>`)
4. Keep tables simple — if complex, break into multiple tables with headings between
