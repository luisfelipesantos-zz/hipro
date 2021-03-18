/* config-overrides.js */
const { override, addLessLoader } = require("customize-cra");

module.exports = override(
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { "@base-color": "#2196f3" },
    // If you are using less-loader@5 or older version, please spread the lessOptions to options directly.
  })
);
