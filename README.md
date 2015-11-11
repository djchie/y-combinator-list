# Y Combinator Companies Webapp

> A webapp for displaying Y Combinator companies built with React, Node.js, Express, and PostgreSQL. This webapp uses Sequelize as an ORM and Flux for the architecture.

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Running Webapp Locally](#running-webapp-locally)
    1. [Making Data Changes](#making-data-changes)
1. [Contributing](#contributing)

## Usage

> Some usage instructions

## Requirements

- Node
- PostgreSQL

## Development

### Installing Dependencies

From within the root directory:

```sh
sudo npm install -g bower
npm install
bower install
```

### Running Webapp Locally

From within the root directory:

```sh
npm run build
npm run start
```

And go to [localhost:8080](http://localhost:8080/)

### Making Data Changes

1. Make the change in the numbers file
1. Convert Numbers to a CSV file
1. Convert CSV file to JSON via [csvjson.com/csv2json](http://www.csvjson.com/csv2json)
1. Copy the JSON data to [data.json](https://github.com/djchie/y-combinator-companies/blob/master/data.json)
1. Set `refreshData` in [app.js](https://github.com/djchie/y-combinator-companies/blob/master/app.js) to `true` to overwrite previous data
1. Run `npm run start`
1. Be sure to `refreshData` in [app.js](https://github.com/djchie/y-combinator-companies/blob/master/app.js) to `false`

### Roadmap

View the project roadmap [here](https://github.com/djchie/y-combinator-companies/issues)


## Contributing

See [CONTRIBUTING.md](https://github.com/djchie/y-combinator-companies/blob/master/CONTRIBUTING.md) for contribution guidelines.