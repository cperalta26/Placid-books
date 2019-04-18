const Sequelize = require('sequelize')
const db = require('../db')

const Review = db.define('review', {
  rating: {
    type: Sequelize.FLOAT
  },
  reviewComment: {
    type: Sequelize.TEXT
  }
})

module.exports = Review
