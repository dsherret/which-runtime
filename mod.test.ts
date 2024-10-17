import * as exports from "./mod.ts";
import { assertEquals } from "@std/assert";

Deno.test("is deno", () => {
  assertEquals(exports.isDeno, true);
  assertEquals(exports.isNode, false);
});