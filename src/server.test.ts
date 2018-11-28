// Integration tests

import { request } from "graphql-request";
import { port } from "./config";
import server from "./server";

const host: string = `http://127.0.0.1:${port}`;

beforeAll(async () => {
      await server.start({ port });
});

it("Returns a non-nested array unchanged", async () => {
      const query = "query { flatten (input:\"[2,3,5,8,4]\")}";
      const response = await request(host, query);
      expect(response).toEqual({ flatten:  "[2,3,5,8,4]"});
});

it("Flattens an nested array", async () => {
      const query = "query { flatten (input:\"[2,[3,[[5,8]]],4]\")}";
      const response = await request(host, query);
      expect(response).toEqual({ flatten:  "[2,3,5,8,4]"});
});

it("Returns an error if input is not a valid json", async () => {
      try {
            const query = "query { flatten (input:\"some-string\")}";
            await request(host, query);
      } catch ({ response }) {
            const { message } = response.errors[0];
            expect(message).toContain("Invalid json");
      }
});

it("Returns an error if input is not a stringified array", async () => {
      const query = "query { flatten (input:\"{}\") }";
      try {
            await request(host, query);
      } catch ({ response }) {
            const { message } = response.errors[0];
            expect(message).toContain("Invalid input");
      }
});
