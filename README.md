# Flatten: GraphQL + Typescript demo


GraphQL api to flatten an array of any depth

test with curl:
 curl -XPOST -H 'Content-Type:application/graphql'  -d '{ flatten(input: "[3, 4, [[5]]]") }' https://flatten-api.herokuapp.com:8080