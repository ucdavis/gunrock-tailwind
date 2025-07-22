const plugin = require("tailwindcss/plugin");
const daisyui = require("daisyui");
const colors = require("./colors");
const daisyuiTheme = require("./daisyui-theme");

module.exports = {
  content: [],
  theme: {
    extend: {
      colors,
      fontFamily: {
        sans: ["proxima-nova-r", "Arial", "sans-serif"],
        "sans-bold": ["proxima-nova-b", "Arial", "sans-serif"],
        "sans-italic": ["proxima-nova-i", "Arial", "sans-serif"],
        ryman: ["ryman", "Georgia", "serif"],
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
  plugins: [
    plugin(({ addBase }) => {
      addBase({
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
      });
    }),
    daisyui,
  ],
  daisyui: {
    themes: [daisyuiTheme],
  },
};
