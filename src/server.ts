import { GraphQLServer } from "safe-graphql-yoga";
import { flattenWithForOfLoop } from "./flattenLibs";

const typeDefs = `
      type Query {
            flatten(input: String!): String!
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
                        throw new Error(`Invalid json (${input}): The INput received was mal-formed.`);
                  }
                  if (! Array.isArray(array)) {
                        throw new Error("Invalid input: Expects a stringified array as input.");
                  }
                  return JSON.stringify(flattenWithForOfLoop(array));
            },
      },
};

export default new GraphQLServer({ typeDefs, resolvers });
