const inner = {
  // dnt-shim-ignore
  // deno-lint-ignore no-explicit-any
  isNode: (globalThis as any).process?.versions?.node != null,
  // dnt-shim-ignore
  // deno-lint-ignore no-explicit-any
  isDeno: (globalThis as any).Deno?.version?.deno != null,
};

export const isNode: boolean = inner.isNode && !inner.isDeno;
export const isDeno: boolean = inner.isDeno && !isNode;
