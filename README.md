
# Flatten Api

A GraphQL api to flatten an array of any depth as a service.

[![Build Status](https://travis-ci.org/bstenm/flatten.svg?branch=master)](https://travis-ci.org/bstenm/flatten)

[![Coverage Status](https://coveralls.io/repos/github/bstenm/flatten/badge.svg?branch=master)](https://coveralls.io/github/bstenm/flatten?branch=master)

test with curl:
 curl -XPOST -H 'Content-Type:application/graphql'  -d '{ flatten(input: "[3, 4, [[5]]]") }' https://flatten-api-production.herokuapp.com

 deploy to staging and production