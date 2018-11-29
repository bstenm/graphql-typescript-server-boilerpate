Add pm2 , node inspect , ts prettier, security: lusca
# Flatten Api

A GraphQL api to flatten an array of any depth as a service.

[![Build Status](https://travis-ci.org/bstenm/flatten.svg?branch=master)](https://travis-ci.org/bstenm/flatten) [![Known Vulnerabilities](https://snyk.io/test/github/bstenm/flatten/badge.svg?targetFile=package.json)](https://snyk.io/test/github/bstenm/flatten?targetFile=package.json) [![Coverage Status](https://coveralls.io/repos/github/bstenm/flatten/badge.svg?branch=master)](https://coveralls.io/github/bstenm/flatten?branch=master) [![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=bstenm/flatten)](https://dependabot.com)

test with curl:
 curl -XPOST -H 'Content-Type:application/graphql'  -d '{ flatten(input: "[3, 4, [[5]]]") }' https://flatten-api-staging.herokuapp.com

Caution: Even though the methods can flatten an array of mixed types (see unit tests) the grahql server expects integers

### Travis

- Run the tests
- Run the build process
- Deploy to the Heroku staging and production sites

I had to fork graphql-yoga snyk