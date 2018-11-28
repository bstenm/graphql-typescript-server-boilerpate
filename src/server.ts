import { GraphQLServer } from "safe-graphql-yoga";
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
                        throw new Error(`Invalid json (${input}): The input received is mal-formed.`);
                  }
                  if (! Array.isArray(array)) {
                        throw new Error("Invalid input: Expects a stringified array as input.");
                  }
                  return flattenWithReduce(array);
            },
      },
};

export default new GraphQLServer({ typeDefs, resolvers });
