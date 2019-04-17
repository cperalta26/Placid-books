const Sequelize = require('sequelize')
const db = require('../db')

const Publisher = db.define('publisher', {
  publisherName: {
    type: Sequelize.STRING
  }
})

module.exports = Publisher
