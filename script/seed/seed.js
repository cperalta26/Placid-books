const db = require('../../src/server/db')
const {User, Book, Format, Publisher} = require('../../src/server/db/models')

async function seed () {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  console.log(`seeded ${users.length} user${users.length > 1 ? 's' : ''}`)

  // creating multiple instances using bulkCreate - see docs for further information http://docs.sequelizejs.com/manual/instances.html
  const {formats} = require('./formats')
  const createdFormats = await Format.bulkCreate(formats)
  console.log(`seeded ${createdFormats.length} format${createdFormats.length > 1 ? 's' : ''}`)

  const {publishers} = require('./publishers')
  const createdPublishers = await Publisher.bulkCreate(publishers)
  console.log(`seeded ${createdPublishers.length} publisher${createdPublishers.length > 1 ? 's' : ''}`)


  const {books} = require('./books')
  const createdBooks = await Book.bulkCreate(books)
  console.log(`seeded ${createdBooks.length} book${createdBooks.length > 1 ? 's' : ''}`)

  console.log(`seeded successfully`)
}

seed()
  .catch(err => {
    console.error(err.message)
    console.error(err.stack)
    process.exitCode = 1
  })
  .then(() => {
    console.log('closing db connection')
    db.close()
    console.log('db connection closed')
  })

console.log('seeding...')
