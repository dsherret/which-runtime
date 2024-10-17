const inner = {
  // dnt-shim-ignore
  // deno-lint-ignore no-explicit-any
  isMaybeNode: (globalThis as any).process?.versions?.node != null,
  // dnt-shim-ignore
  // deno-lint-ignore no-explicit-any
  isDeno: (globalThis as any).Deno?.version?.deno != null,
};

export const isNode: boolean = inner.isMaybeNode && !inner.isDeno;
export const isDeno: boolean = inner.isDeno;
