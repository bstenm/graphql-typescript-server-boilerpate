import { GraphQLServer } from "graphql-yoga";
import { flattenWithReduce } from "./flattenLibs";

const typeDefs = `
      type Query {
            flatten(input: String!): [Int]!
      }
`;

const resolvers = {
      Query: {
            flatten: (_: any, { input }: {
                  input: string,
            }) => {
                  let array: any[];
                  try {
                        array = JSON.parse(input);
                  } catch (e) {
                        throw new Error(`Invalid json (${input}): Expects a stringified array`);
                  }
                  if (! Array.isArray(array)) {
                        throw new Error("Invalid input: Expects a stringified array");
                  }
                  return flattenWithReduce(array);
            },
      },
};

const server = new GraphQLServer({ typeDefs, resolvers });

server.start(() => {
      console.log("Server is running on port:4000");
});
