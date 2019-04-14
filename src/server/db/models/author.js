const Sequelize = require('sequelize')
const db = require('../db')

const Author = db.define('author', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  aboutAuthor: {
    type: Sequelize.TEXT
  }
})

module.exports = Author
