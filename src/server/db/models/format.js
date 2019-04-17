const Sequelize = require('sequelize')
const db = require('../db')

const Format = db.define('format', {
  formatType: {
    type: Sequelize.STRING
  }
})

module.exports = Format
