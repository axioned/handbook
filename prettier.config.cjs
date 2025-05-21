module.exports = {
  ...require("@axioned/prettier-config"),
  plugins: ["prettier-plugin-astro"],
  "overrides": [
    {
      "files": "*.astro",
      "options": {
        "parser": "astro",
      },
    },
  ],
};
