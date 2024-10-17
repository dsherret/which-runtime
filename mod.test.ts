import * as values from "./mod.ts";

const testsSayNode = Deno.env.get("IS_TESTING_NODE") != null;

Deno.test("is deno", () => {
  assertEquals(values.isDeno, !testsSayNode);
  assertEquals(values.isNode, testsSayNode);
});

function assertEquals(a: unknown, b: unknown) {
  if (a !== b) {
    throw new Error(`${a} !== ${b}`);
  }
}