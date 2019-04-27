const {expect} = require('chai')
const db = require('../')
const Book = require('./book')
let book = null

describe('Book model', () => {
  beforeEach( async () => {
    book = await Book.create({
      title: 'The Wonderful Things You Will Be',
      description: "From brave and bold to creative and clever, Emily Winfield Martin's rhythmic rhyme expresses all the loving things that parents think of when they look at their children. With beautiful, and sometimes humorous, illustrations, and a clever gatefold with kids in costumes, this is a book grown-ups will love reading over and over to kids—both young and old.",
      numOfPages: 36,
      coverImg: 'https://images-na.ssl-images-amazon.com/images/I/91HHxxtA1wL.jpg',
      price: 9.99,
      quantity: 1000,
      available: true
    })

    return db.sync({force: true})
  })

  describe('Book model contains certain columns', () => {
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
  }) // end Book model contains certain columns

  describe('Validate Book model columns data',  () => {
    it('is an object', () => {
      expect(book).to.be.an('object')
    })

    it('id col is a number', () => {
      expect(book.dataValues.id).to.be.a('number')
    })

    it('numOfPages col is a number', () => {
      expect(book.dataValues.numOfPages).to.be.a('number')
    })

    it('title col is a string', () => {
      expect(book.dataValues.title).to.be.a('string')
    })

    it('description col is a string', () => {
      expect(book.dataValues.description).to.be.a('string')
    })

    it('the book cover image col is a string', () => {
      expect(book.dataValues.coverImg).to.be.a('string')
    })

    it('book availability col is a boolean', () => {
      expect(book.dataValues.available).to.be.a('boolean')
    })
  })// end validate Book models columns data
})// end describe('Book model') */
