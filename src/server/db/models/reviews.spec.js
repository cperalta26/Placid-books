const {expect} = require('chai')
const db = require('../db')
const Review = require('./review')
let review = null

describe('Review model', () => {
  beforeEach( () => {
    return db.sync({force: true})
  })
  describe('review model validations', () => {
    beforeEach(async () => {
      review = await Review.create({
        rating: 4.7,
        reviewComment: "I loved this book!! It is beautifully written and illustrated. The story is sweet and simple and easy to read. I also own this author's other books 'Dream Animals' and 'Day Dreamers' and I like this third book MORE than the first two. I think that this would be the perfect book to give as a gift for a baby shower or a first (or second/third) birthday gift. My son is 5 and he loved it. After reading it we talked about all of the things he wanted to be when he grows up. One awesome thing I noticed in this book is how gender neutral it is. There are both boys and girls depicted in the book, but it is a boy having the tea party, a boy using the sewing machine, a girl on the tree swing, and a girl as a superhero. I love how the author didn't stick to awful stereotypes of boys being super heroes and girls being princesses. This is one of the first children's books I've ever seen that shows the REALITY of little kids....that boys and girls do all sorts of similar things. You will NOT be disappointed with this book. Highly recommend!"
      })
    })
    it('is an object', () => {
      expect(review).to.be.an('object')
    })

    it('has an id', () => {
      expect(review.dataValues).to.have.ownProperty('id')
    })

    it('rating is a number', () => {
      expect(review.dataValues.rating).to.be.a('number')
    })

    it('reviewComment is a string', () => {
      expect(review.dataValues.reviewComment).to.be.a('string')
    })
  })// end of has correct data
})// end of Review model
