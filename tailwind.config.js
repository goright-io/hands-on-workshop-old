var flattenColorPalette = require("tailwindcss/lib/util/flattenColorPalette")
  .default;

module.exports = {
  purge: {
    content: ["./components/**/*.js", "./pages/**/*.js"],
    options: {
      safelist: ["bg-v-dark-blue", "prose"],
    },
  },
  theme: {
    extend: {
      colors: {
        "v-red": "rgba(236, 78, 75, 1)",
        "v-yellow": "rgba(248, 209, 121, 1)",
        "v-blue": "rgba(133, 216, 243, 1)",
        "v-dark-blue": "rgba(0, 185, 245, 1)",
      },
      borderWidth: {
        30: "30px",
      },
      backgroundImage: () => ({
        "design-systems": "url('/balazs-ketyi-9VzoRKfBsMM-unsplash.jpg')",
      }),
      spacing: {
        "2/3": "66.666667%",
        "1/1": "100%",
      },
    },
  },
  plugins: [
    ({ addUtilities, e, theme, variants }) => {
      const colors = flattenColorPalette(theme("borderColor"));
      delete colors["default"];

      const colorMap = Object.keys(colors).map((color) => ({
        [`.border-t-${color}`]: { borderTopColor: colors[color] },
        [`.border-r-${color}`]: { borderRightColor: colors[color] },
        [`.border-b-${color}`]: { borderBottomColor: colors[color] },
        [`.border-l-${color}`]: { borderLeftColor: colors[color] },
      }));
      const utilities = Object.assign({}, ...colorMap);

      addUtilities(utilities, variants("borderColor"));
    },
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
  variants: {
    extend: {
      transform: ["group-hover"],
      transitionDuration: ["group-hover"],
      transitionProperty: ["group-hover"],
      translate: ["group-hover"],
      scale: ["group-hover"],
    },
  },
};
