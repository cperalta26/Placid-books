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
  publishedDate: {
    type: Sequelize.DATEONLY,
    allowNull: false,
    defaultValue: Sequelize.NOW
  },
  numOfPages: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  coverImg: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Book
