const db = require('../src/server/db')
const {User, Book, Format} = require('../src/server/db/models')

async function seed () {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  console.log(`seeded ${users.length} user${users.length > 1 ? 's' : ''}`)

  const formats = await Promise.all([
    Format.create({
      formatType: 'Hardcover'
    })
  ])

  console.log(`seeded ${formats.length} format${formats.length > 1 ? 's' : ''}`)

  const books = await Promise.all([
    Book.create({
      title: 'The Wonderful Things You Will Be',
      description: "From brave and bold to creative and clever, Emily Winfield Martin's rhythmic rhyme expresses all the loving things that parents think of when they look at their children. With beautiful, and sometimes humorous, illustrations, and a clever gatefold with kids in costumes, this is a book grown-ups will love reading over and over to kids—both young and old.",
      numOfPages: 36,
      publishedDate: '2015-08-25',
      coverImg: 'https://images-na.ssl-images-amazon.com/images/I/91HHxxtA1wL.jpg',
      price: 9.99,
      quantity: 1000,
      available: true
    })
  ])
  console.log(`seeded ${books.length} book${books.length > 1 ? 's' : ''}`)
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
