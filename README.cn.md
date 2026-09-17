# @isdk/match-ex-template

> 【[English](./README.md)|中文】
---

[`@isdk/match-ex`](https://github.com/isdk/match-ex.js) 的模板插值插件，由 [`@isdk/template-engines`](https://github.com/isdk/template-engines.js) 驱动。

导入本包即把 `StringTemplate` 注册进引擎，`{{占位符}}` 期望开箱即用。

## 提供的能力

- 期望字符串、正则源码与嵌套对象中的 `{{name}}` 占位符——基于 `ValidationContext.data` 解析。
- 纯占位符替换：`{{user}}` 直接解析为原始对象（而非其字符串形式），从而支持深层对象匹配。
- 递归解析：解析结果中仍包含模板时继续插值。

## 用法

```ts
import { validate, ValidationContext } from '@isdk/match-ex'
import '@isdk/match-ex-template'

const ctx = new ValidationContext({ data: { name: 'Alice' } })

await validate('Hello Alice!', 'Hello {{name}}!', ctx)

// 正则 + 模板
await validate('Hello Alice!', /{{name}}/i, ctx)

// 纯占位符 → 对象
await validate(
  { id: 1, name: 'Alice' },
  '{{user}}', // 若 ctx.data.user 为该对象，则直接解析为 { id: 1, name: 'Alice' }
  ctx
)
```

## 导出

| 导出 | 说明 |
|---|---|
| `StringTemplate` | 从 `@isdk/template-engines` 便捷转发导出。 |

想用其他模板方言？改用 `@isdk/match-ex` 的 `setStringTemplate(impl)` 注册你自己的 `{ formatIf(options) }` 实现即可。

## 许可证

MIT © Riceball Lee
