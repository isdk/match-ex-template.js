import { describe, it, expect } from 'vitest'
import { formatTemplate, getStringTemplate } from '@isdk/match-ex'
// Importing the package registers StringTemplate into the core registry.
import '@isdk/match-ex-template'
import { StringTemplate } from '@isdk/template-engines'

describe('@isdk/match-ex-template', () => {
  it('registers StringTemplate into the core registry on import', () => {
    expect(getStringTemplate()).toBe(StringTemplate)
  })

  it('interpolates through the core formatTemplate()', async () => {
    const result = await formatTemplate('hello {{name}}', {
      data: { name: 'world' },
    })
    expect(result).toBe('hello world')
  })
})
