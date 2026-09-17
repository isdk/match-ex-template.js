/**
 * Template interpolation plugin for `@isdk/match-ex`.
 *
 * Importing this package registers `StringTemplate` (from
 * `@isdk/template-engines`) as the engine's template implementation:
 *
 * ```ts
 * import '@isdk/match-ex-template'
 * ```
 *
 * The engine itself ships no template engine — hosts that interpolate
 * expectations with a different dialect can provide their own via
 * `setStringTemplate()` instead.
 */
import { setStringTemplate } from '@isdk/match-ex'
import { StringTemplate } from '@isdk/template-engines'

export { StringTemplate }

setStringTemplate(StringTemplate)
