const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: "grchfy",
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    video: true
  }
})
