# which_runtime

[![deno doc](https://doc.deno.land/badge.svg)](https://doc.deno.land/https/deno.land/x/which_runtime/mod.ts)

Deno module for checking which runtime the code is running in.

This may be useful in some extreme scenarios when using
[dnt](https://github.com/dsherret/dnt). Ideally do not use this and feature test
instead.

```ts
import { isDeno, isNode } from "https://deno.land/x/which_runtime/mod.ts";

if (isNode) {
  // do something
}

if (isDeno) {
  // do something
}
```
