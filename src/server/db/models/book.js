const Sequelize = require('sequelize')
const db = require('../db')

const Book = db.define('book', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  },
  numOfPages: {
    type: Sequelize.INTEGER
  },
  coverImg: {
    type: Sequelize.STRING
  }
})

module.exports = Book
