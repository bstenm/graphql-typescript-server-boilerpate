[![Build Status](https://travis-ci.org/bstenm/flatten.svg?branch=master)](https://travis-ci.org/bstenm/flatten)

# Flatten: GraphQL + Typescript demo

GraphQL api to flatten an array of any depth


test with curl:
 curl -XPOST -H 'Content-Type:application/graphql'  -d '{ flatten(input: "[3, 4, [[5]]]") }' https://flatten-api-production.herokuapp.com

 deploy to staging and production