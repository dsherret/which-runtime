const inner = {
  // deno-shim-ignore
  // deno-lint-ignore no-explicit-any
  isNode: (globalThis as any).process?.versions?.node != null,
  // deno-shim-ignore
  // deno-lint-ignore no-explicit-any
  isDeno: (globalThis as any).Deno?.version?.deno != null,
};

export const isNode = inner.isNode && !inner.isDeno;
export const isDeno = inner.isDeno && !isNode;
