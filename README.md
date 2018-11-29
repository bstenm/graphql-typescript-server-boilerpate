
# Graphql Typescript Server boilerplate

[![Build Status](https://travis-ci.org/bstenm/flatten.svg?branch=master)](https://travis-ci.org/bstenm/flatten) [![Known Vulnerabilities](https://snyk.io/test/github/bstenm/flatten/badge.svg?targetFile=package.json)](https://snyk.io/test/github/bstenm/flatten?targetFile=package.json) [![Coverage Status](https://coveralls.io/repos/github/bstenm/flatten/badge.svg?branch=master)](https://coveralls.io/github/bstenm/flatten?branch=master) [![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=bstenm/flatten)](https://dependabot.com)

#### Development

Launch the server in development mode, it processes Typescript and lints your code on save: 
```
> yarn watch
```
 
#### Testing

Lints your code and runs the tests with jest on save:
```
> yarn test
```

#### Travis

- Run the tests
- Run the build process
- Deploy to the Heroku staging and production sites

See it in action:
```
> curl -XPOST -H 'Content-Type:application/graphql'  -d '{ flatten(input: "[3, 4, [[5]]]") }' https://flatten-api-staging.herokuapp.com
```

#### Vulnerabilities

I had to fork [graphql-yoga](https://github.com/prisma/graphql-yoga/) as [snyk](https://www.npmjs.com/package/snyk) detected a critical vulnerability in one of its dependencies.
