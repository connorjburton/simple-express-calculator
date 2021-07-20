## Prerequisites

- Yarn or NPM
- Node.js LTS

## Installing

1. `yarn` or `npm install`

## Running Tests

1. `yarn test` or `npm run test`

Both unit & e2e tests are included.

## Running Application

1. `yarn start`

API routes are 

`/api/add`
`/api/subtract`
`/api/multiply`
`/api/divide`

All API routes are POST and expect a JSON array as the body. They will all return the result as a plain string.

## Considerations

- I was inspired by the `Math` class, so all the methods are static for ease of use. You could argue that it should be an instantiatable class
- More validation should be done around the express routes, it will error if you pass unexpected data
- Tests could be streamlined, currently I am duplicating the first two test blocks in each describe, could be their own functions
- Would like to have tried out TS decorators instead of calling `validate` at the top of each public function