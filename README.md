Errors thrown at top level dynamic component loaded with `ssr: false` don't show up in console.

## Repro

```bash
yarn
yarn dev
```

Normal run: [http://localhost:3000](http://localhost:3000)
Throw run: [http://localhost:3000/?throw=1](http://localhost:3000/?throw=1)
