const Sequelize = require('sequelize')
const db = require('../db')

const Book = db.define('book', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING
  },
  numOfPages: {
    type: Sequelize.INTEGER
  },
  coverImg: {
    type: Sequelize.STRING
  }
})

module.exports = Book
