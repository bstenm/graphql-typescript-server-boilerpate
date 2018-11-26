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

export default new GraphQLServer({ typeDefs, resolvers });
