// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "uk", "ru"],
    localePath: path.resolve("./public/static/locales"),
  },
};
