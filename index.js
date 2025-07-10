const plugin = require("tailwindcss/plugin");

module.exports = plugin(
  function ({ addBase }) {
    addBase({
      // Font-face declarations
      "@font-face": [
        {
          fontFamily: "proxima-nova-r",
          src: 'url("https://ucdcdn.azureedge.net/public/media/fonts/proximanova-regular-webfont.woff") format("woff")',
          fontWeight: "normal",
          fontStyle: "normal",
          fontDisplay: "fallback",
        },
        {
          fontFamily: "proxima-nova-i",
          src: 'url("https://ucdcdn.azureedge.net/public/media/fonts/proximanova-regularit-webfont.woff") format("woff")',
          fontWeight: "normal",
          fontStyle: "normal",
          fontDisplay: "fallback",
        },
        {
          fontFamily: "proxima-nova-b",
          src: 'url("https://ucdcdn.azureedge.net/public/media/fonts/proximanova-bold-webfont.woff") format("woff")',
          fontWeight: "normal",
          fontStyle: "normal",
          fontDisplay: "fallback",
        },
        {
          fontFamily: "ryman",
          src: 'url("https://ucdcdn.azureedge.net/public/media/fonts/ryman-eco-webfont.woff") format("woff")',
          fontWeight: "normal",
          fontStyle: "normal",
          fontDisplay: "fallback",
        },
      ],
      // Element styling
      // "h1, h2, h3, h4, h5, h6": { "@apply font-sans": {} },
      // h1: { "@apply text-5xl font-bold": {} },
      // h2: { "@apply text-4xl font-semibold": {} },
      // h3: { "@apply text-3xl font-semibold": {} },
      // h4: { "@apply text-2xl font-medium": {} },
      // h5: { "@apply text-xl font-medium": {} },
      // h6: { "@apply text-lg font-normal": {} },
      // p: { lineHeight: "1.6" },
    });
  },
  {
    theme: {
      extend: {
        fontFamily: {
          sans: ["proxima-nova-r", "Arial", "sans-serif"],
          "sans-bold": ["proxima-nova-b", "Arial", "sans-serif"],
          "sans-italic": ["proxima-nova-i", "Arial", "sans-serif"],
          ryman: ["ryman", "Georgia", "serif"],
        },
        colors: {
          "primary-font": "rgb(31 31 31 / <alpha-value>)",
          "secondary-font": "rgb(31 31 31 / <alpha-value>)",
          "tertiary-font": "rgb(31 31 31 / <alpha-value>)",
          "primary-white": "rgb(254 254 254 / <alpha-value>)",
          "secondary-white": "rgb(254 254 254 / <alpha-value>)",
          ucd: {
            recpool: "rgb(111 207 235 / <alpha-value>)",
            tahoe: "rgb(0 178 227 / <alpha-value>)",
            gunrock: "rgb(0 71 186 / <alpha-value>)",
            bodega: "rgb(0 58 93 / <alpha-value>)",
            rain: "rgb(3 249 230 / <alpha-value>)",
            arboretum: "rgb(0 196 179 / <alpha-value>)",
            putahcreek: "rgb(0 142 170 / <alpha-value>)",
            delta: "rgb(0 82 76 / <alpha-value>)",
            farmersmarket: "rgb(170 218 145 / <alpha-value>)",
            sage: "rgb(108 202 152 / <alpha-value>)",
            quad: "rgb(61 174 43 / <alpha-value>)",
            redwood: "rgb(38 96 65 / <alpha-value>)",
            goldenstate: "rgb(255 255 59 / <alpha-value>)",
            sunflower: "rgb(255 220 0 / <alpha-value>)",
            poppy: "rgb(241 138 0 / <alpha-value>)",
            california: "rgb(138 83 47 / <alpha-value>)",
            rose: "rgb(255 129 137 / <alpha-value>)",
            strawberry: "rgb(249 53 73 / <alpha-value>)",
            doubledecker: "rgb(193 2 48 / <alpha-value>)",
            merlot: "rgb(121 36 47 / <alpha-value>)",
            thiebauldicing: "rgb(240 149 205 / <alpha-value>)",
            redbud: "rgb(198 0 126 / <alpha-value>)",
            pinot: "rgb(118 35 108 / <alpha-value>)",
            cabernet: "rgb(72 18 104 / <alpha-value>)",
          },
        },
        borderColor: {
          DEFAULT: "#C8C7CC",
          border: "#C8C7CC",
        },
        boxShadow: {
          subtle:
            "0 0 0 1px rgba(49, 49, 93, 0.03), 0 2px 5px 0 rgba(49, 49, 93, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.08)",
        },
      },
    },
  }
);
