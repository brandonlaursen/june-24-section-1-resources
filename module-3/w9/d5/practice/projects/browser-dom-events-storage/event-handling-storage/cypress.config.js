const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: false,
  e2e: {
    setupNodeEvents(on, config) {},
    excludeSpecPattern: ["**/__snapshots__/*", "**/__image_snapshots__/*"],
    supportFile: false,
  },
});
