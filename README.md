
# Graphql Typescript Server boilerplate

[![Build Status](https://travis-ci.org/bstenm/graphql-typescript-server-boilerpate.svg?branch=master)](https://travis-ci.org/bstenm/graphql-typescript-server-boilerpate) [![Known Vulnerabilities](https://snyk.io/test/github/bstenm/graphql-typescript-server-boilerpate/badge.svg?targetFile=package.json)](https://snyk.io/test/github/bstenm/graphql-typescript-server-boilerpate?targetFile=package.json) [![Coverage Status](https://coveralls.io/repos/github/bstenm/graphql-typescript-server-boilerpate/badge.svg?branch=master)](https://coveralls.io/github/bstenm/graphql-typescript-server-boilerpate?branch=master) [![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=bstenm/graphql-typescript-server-boilerpate)](https://dependabot.com)

Uses [Heroku](https://id.heroku.com/login) as cloud platform, [TravisCI](https://travis-ci.org/bstenm/graphql-typescript-server-boilerpate) for continuous integration, [Coveralls](https://coveralls.io/github/bstenm/graphql-typescript-server-boilerpate) for test coverage history, [Snyk](https://snyk.io) for security monitoring, [Dependabot](https://github.com/marketplace/dependabot) to keep all dependencies up to date, [TSLint](https://github.com/palantir/tslint) for code formatting, [Jest](https://jestjs.io/) for testing and test coverage, [Husky](https://www.npmjs.com/package/husky) for git hooks.

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

#### Continuous Integration

On every push your code will first be linted, then Travis will take over.

For Travis to be able to run the Snyk commands it needs to know your secret snyk API token. The following command will encrypt and paste it into the appropriate Travis config:

```
> travis encrypt SNYK_TOKEN=<YOUR SNYK API TOKEN> --add env
```

For Travis to be able to deploy to Heroku, it needs to know your Heroku API key. The following command will encrypt and paste it into the appropriate Travis config:

```
> travis encrypt $(heroku auth:token) --add deploy.api_key
```

Travis CI will:
- Check for vulnerabilities
- Run the tests
- Run the build process
- Deploy to the Heroku staging and production sites
- Take a snpshot of your application dependencies for Snyk to alert you in case of any newly found vulnerabilities

See result in action (flattens an array of any depth):
```
> curl -XPOST -H 'Content-Type:application/graphql'  -d '{ flatten(input: "[3, 4, [[5]]]") }' https://flatten-api-staging.herokuapp.com
```

#### Vulnerabilities

I had to fork [graphql-yoga](https://github.com/prisma/graphql-yoga/) as [snyk](https://www.npmjs.com/package/snyk) detected a critical vulnerability in one of its dependencies.
