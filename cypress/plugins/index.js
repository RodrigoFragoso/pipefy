/// <reference types="cypress" />

const fs = require('fs-extra')
const path = require('path')

function getConfigurationByFile (file) {
  const pathToConfigFile = path.resolve('cypress/support/', 'environments', `${file}.json`)
  return fs.readJson(pathToConfigFile)
}

module.exports = (on, config) => {
  const file = config.env.configFile || 'qa'
  return getConfigurationByFile(file)
}
