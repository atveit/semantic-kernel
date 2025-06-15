[**semantic-kernel-ts**](../../../README.md)

***

[semantic-kernel-ts](../../../modules.md) / [abstractions/src](../README.md) / Context

# Interface: Context

Defined in: packages/abstractions/src/Context.ts:1

## Properties

### memory?

> `optional` **memory**: [`IMemoryStore`](IMemoryStore.md)

Defined in: packages/abstractions/src/Context.ts:3

***

### variables

> **variables**: `Record`\<`string`, `any`\>

Defined in: packages/abstractions/src/Context.ts:2

## Methods

### call()

> **call**(`plugin`, `func`, `args?`): `Promise`\<`any`\>

Defined in: packages/abstractions/src/Context.ts:4

#### Parameters

##### plugin

`string`

##### func

`string`

##### args?

`Record`\<`string`, `any`\>

#### Returns

`Promise`\<`any`\>
