# @isdk/match-ex-template

> 【English|[中文](./README.cn.md)】
---

Template interpolation plugin for [`@isdk/match-ex`](https://github.com/isdk/match-ex.js), backed by [`@isdk/template-engines`](https://github.com/isdk/template-engines.js).

Importing this package registers `StringTemplate` into the engine, so `{{placeholder}}` expectations interpolate out of the box.

## What it enables

- `{{name}}` placeholders inside expected strings, regex sources and nested objects — resolved against `ValidationContext.data`.
- Pure-placeholder replacement: `{{user}}` resolves to the original object (not its stringification), enabling deep object matching.
- Recursive resolution: templates inside resolved values keep interpolating.

## Usage

```ts
import { validate, ValidationContext } from '@isdk/match-ex'
import '@isdk/match-ex-template'

const ctx = new ValidationContext({ data: { name: 'Alice' } })

await validate('Hello Alice!', 'Hello {{name}}!', ctx)

// Regex + template
await validate('Hello Alice!', /{{name}}/i, ctx)

// Pure placeholder → object
await validate(
  { id: 1, name: 'Alice' },
  '{{user}}', // resolved to { id: 1, name: 'Alice' } if ctx.data.user is that object
  ctx
)
```

## Exports

| Export | Description |
|---|---|
| `StringTemplate` | Re-exported from `@isdk/template-engines` for convenience. |

Use a different dialect? Call `setStringTemplate(impl)` from `@isdk/match-ex` with your own `{ formatIf(options) }` implementation instead.

## License

MIT © Riceball Lee
