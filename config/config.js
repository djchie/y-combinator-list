var config = {
  "development": {
    "database": "yc_companies_development",
    "username": "",
    "password": "",
    "host": "localhost",
    "dialect": "postgres"
  },
  "test": {
    "database": "yc_companies_test",
    "username": "root",
    "password": null,
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "database": process.env.DATABASE_URL,
    "dialect": "postgres",
    "dialectOptions": {
      ssl: true
    }
  }
}

module.exports = config;