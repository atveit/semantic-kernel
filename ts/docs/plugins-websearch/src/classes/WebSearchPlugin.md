[**semantic-kernel-ts**](../../../README.md)

***

[semantic-kernel-ts](../../../modules.md) / [plugins-websearch/src](../README.md) / WebSearchPlugin

# Class: WebSearchPlugin

Defined in: packages/plugins-websearch/src/index.ts:8

Plugin that performs web search using Bing Search API.

## Constructors

### Constructor

> **new WebSearchPlugin**(`apiKey`): `WebSearchPlugin`

Defined in: packages/plugins-websearch/src/index.ts:9

#### Parameters

##### apiKey

`string` = `...`

#### Returns

`WebSearchPlugin`

## Methods

### search()

> **search**(`_ctx`, `args`): `Promise`\<`string`\>

Defined in: packages/plugins-websearch/src/index.ts:13

Search the web and return the first snippet.

#### Parameters

##### \_ctx

`Context`

##### args

###### query

`string`

#### Returns

`Promise`\<`string`\>
