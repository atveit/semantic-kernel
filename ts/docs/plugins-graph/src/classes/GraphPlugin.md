[**semantic-kernel-ts**](../../../README.md)

***

[semantic-kernel-ts](../../../modules.md) / [plugins-graph/src](../README.md) / GraphPlugin

# Class: GraphPlugin

Defined in: packages/plugins-graph/src/index.ts:8

Preview Graph plugin. Requires MSAL authentication to acquire tokens.

## Constructors

### Constructor

> **new GraphPlugin**(`graphClient`): `GraphPlugin`

Defined in: packages/plugins-graph/src/index.ts:9

#### Parameters

##### graphClient

`any`

#### Returns

`GraphPlugin`

## Methods

### getEvents()

> **getEvents**(`_ctx`): `Promise`\<`any`\>

Defined in: packages/plugins-graph/src/index.ts:22

Get upcoming events via Microsoft Graph.

#### Parameters

##### \_ctx

`Context`

#### Returns

`Promise`\<`any`\>

***

### sendMail()

> **sendMail**(`_ctx`, `args`): `Promise`\<`void`\>

Defined in: packages/plugins-graph/src/index.ts:13

Send an email via Microsoft Graph.

#### Parameters

##### \_ctx

`Context`

##### args

###### body

`string`

###### subject

`string`

###### to

`string`

#### Returns

`Promise`\<`void`\>
