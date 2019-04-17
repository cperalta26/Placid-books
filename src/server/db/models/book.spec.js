const {expect} = require('chai')
const db = require('../')
const Book = require('./book')
let book = null

describe('Book model', () => {
  beforeEach( () => {
    return db.sync({force: true})
  })

  describe('has correct data',  () => {
    beforeEach(async () => {
      book = await Book.create({
        title: 'The Wonderful Things You Will Be',
        description: "From brave and bold to creative and clever, Emily Winfield Martin's rhythmic rhyme expresses all the loving things that parents think of when they look at their children. With beautiful, and sometimes humorous, illustrations, and a clever gatefold with kids in costumes, this is a book grown-ups will love reading over and over to kids—both young and old.",
        numOfPages: 36,
        coverImg: 'https://images-na.ssl-images-amazon.com/images/I/91HHxxtA1wL.jpg'
      })
    })

    it('is an object', () => {
      expect(book).to.be.an('object')
    })

    it('has an id', () => {
      expect(book.dataValues).to.have.ownProperty('id')
    })

    it('has a price col', () => {
      expect(book.dataValues).to.have.ownProperty('price')
    })

    it('has a quantity col', () => {
      expect(book.dataValues).to.have.ownProperty('quantity')
    })

    it('has availaibilty col', () => {
      expect(book.dataValues).to.have.ownProperty('available')
    })

    it('properties have correct data types', () => {
      expect(book.dataValues.id).to.be.a('number')
      expect(book.dataValues.numOfPages).to.be.a('number')
      expect(book.dataValues.title).to.be.a('string')
      expect(book.dataValues.description).to.be.a('string')
      expect(book.dataValues.coverImg).to.be.a('string')
      expect(book.dataValues.available).to.be.a('boolean')
    })
  })// has correct data
})// end describe('Book model') */
