const User = require('./user')
const Book = require('./book')
const Author = require('./author')
const Genre = require('./genre')
const Format = require('./format')
const Publisher = require('./publisher')
/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */
Format.hasMany(Book)
Book.belongsTo(Format)

Publisher.hasMany(Book)
Book.belongsTo(Publisher)

Book.belongsToMany(Author, {through: 'BookAuthor'})
Author.belongsToMany(Book, {through: 'BookAuthor'})

Book.belongsToMany(Genre, {through: 'BookGenre'})
Genre.belongsToMany(Book, {through: 'BookGenre'})

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Book,
  Author,
  Genre,
  Format
}
