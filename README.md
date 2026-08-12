# UC Davis CAES Tailwind + DaisyUI Branding

This is NPM gunrock tailwind for application development at CAES CRU

## Features

- **Tailwind colors and fonts**, including the complete Proxima Nova family
- **DaisyUI theme Gunrock**

To use, add

```
@import "@ucdavis/gunrock-tailwind/imports.css";
```

In global.css underneath Tailwind and Daisy

To customize you can add tailwind and daisy themes like such:

```
@theme {
  --color-cru-border: oklch(0.283 0.0091 285.81);
}
@plugin "daisyui/theme" {
  name: "gunrock";
  --color-base-100: var(--color-dark-bg-100);
}
```
Add 
```
data-theme="gunrock"
```
To the <body> tag in the layout

## Fonts

The package supplies Proxima Nova from the UC Davis CDN in WOFF2 format. It
includes Thin (100), Light (300), Regular (400), Medium (500), Semibold (600),
Bold (700), and ExtraBold (800), each with a matching italic face.

### Recommended usage

Use Tailwind's font family, weight, and style utilities together. `font-sans`
uses Proxima Nova and automatically selects the corresponding font file.

```
<p class="font-sans">Regular body text</p>
<h2 class="font-sans font-semibold">Semibold heading</h2>
<p class="font-sans italic">Regular italic text</p>
<strong class="font-sans font-bold italic">Bold italic text</strong>
<h1 class="font-display">Ryman display type</h1>
```

`font-normal`, `font-medium`, `font-semibold`, `font-bold`, and
`font-extrabold` select weights 400, 500, 600, 700, and 800 respectively.

### Existing applications

Existing applications do not need to change. The original family names remain
available and map to their existing faces:

| Existing family | Face |
| --- | --- |
| `proxima-nova-r` | Proxima Nova Regular (400) |
| `proxima-nova-i` | Proxima Nova Regular Italic (400) |
| `proxima-nova-b` | Proxima Nova Bold (700) |
| `ryman` | Ryman Eco |

New application code should prefer `font-sans` and standard Tailwind weight and
style utilities. The legacy family names will remain supported until a future
major package release.
