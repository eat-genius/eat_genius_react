module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/eat_genius_dev'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/eat_genius_test'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
