const postcssPresetEnv = require("postcss-preset-env");
const cssnano = require("cssnano");

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    // See https://preset-env.cssdb.org/.
    postcssPresetEnv({
      // https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss-preset-env#stage
      stage: 2,
      // https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss-preset-env#browsers
      // We use browserslist in package.json.
      // browsers: ""
    }),
    // See https://cssnano.co/.
    cssnano({ preset: "default" }),
  ],
};

module.exports = config;
