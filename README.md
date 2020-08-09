# benchtop-js


## Build

```bash
npm run build
```

Will build the library using rollup.

> Note: I want to use `@rollup/plugin-typescript` but it doesn't support declaration files from what I can tell. So using `rollup-plugin-typescript2` at the moment.

## Using

As simple as importing the library and running the cli tool.

```typescript
// functionToTest.bench.ts
import { bench } from "benchtop"
import { funcToTest } from "./funcToTest"

bench("Function I want to benchmark", (b: benchmark) => {
    for i := 0; i < b.N; i++ {
        funcToTest()
    }
})
```

```bash
npx benchtop
```