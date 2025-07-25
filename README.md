# UC Davis CAES Tailwind + DaisyUI Branding

This is NPM gunrock tailwind for application development at CAES CRU

## Features

- **Tailwind colors and fonts**
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
