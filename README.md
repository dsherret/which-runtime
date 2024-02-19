# which-runtime

[![documentation](https://doc.deno.land/badge.svg)](https://jsr.io/@david/which-runtime)

Deno module for checking which runtime the code is running in.

This may be useful in some extreme scenarios when using
[dnt](https://github.com/dsherret/dnt). Ideally do not use this and feature test
instead.

```ts
import { isDeno, isNode } from "jsr:@david/which-runtime@0.2";

if (isNode) {
  // do something
}

if (isDeno) {
  // do something
}
```
