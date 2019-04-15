const Sequelize = require('sequelize')
const db = require('../db')

const Author = db.define('author', {
  firstName: {
    type: Sequelize.STRING,
    defaultValue: 'Unknown',
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    defaultValue: 'Author',
    allowNull: false
  },
  aboutAuthor: {
    type: Sequelize.TEXT
  }
})

module.exports = Author
