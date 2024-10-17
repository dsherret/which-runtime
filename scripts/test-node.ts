import { build, emptyDir } from "@deno/dnt";

Deno.env.set("IS_TESTING_NODE", "true");

await emptyDir("./npm");

// this is only for testing the code in Node
await build({
  entryPoints: ["mod.ts"],
  test: true,
  outDir: "./npm",
  shims: {
    deno: "dev",
  },
  compilerOptions: {
    "stripInternal": true
  },
  package: {
    name: "",
    version: Deno.args[0],
    description: "",
    author: "David Sherret",
    license: "MIT"
  },
});
