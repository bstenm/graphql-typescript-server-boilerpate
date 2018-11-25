import { GraphQLServer } from "graphql-yoga";
import { flattenWithReduce } from './flattenLibs';

const typeDefs = `
      type Query {
            flatten(jsonArray: String!): [Int]!
      }
`;

const resolvers = {
      Query: {
            flatten: (_: any, { jsonArray }: {
                  jsonArray: string;
            }) => {
                  const array = JSON.parse(jsonArray);
                  if (! Array.isArray(array)) {
                        throw new Error('Not an array');
                  }
                  return flattenWithReduce(array)
            },
      },
};

const server = new GraphQLServer({ typeDefs, resolvers });

server.start(() => {
      console.log("Server is running on localhost:4000");
});
