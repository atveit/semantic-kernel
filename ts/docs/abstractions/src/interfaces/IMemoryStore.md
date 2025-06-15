[**semantic-kernel-ts**](../../../README.md)

***

[semantic-kernel-ts](../../../modules.md) / [abstractions/src](../README.md) / IMemoryStore

# Interface: IMemoryStore

Defined in: packages/abstractions/src/memory.ts:11

## Methods

### save()

> **save**(`id`, `vector`, `metadata?`): `Promise`\<`void`\>

Defined in: packages/abstractions/src/memory.ts:13

Save or update a vector.

#### Parameters

##### id

`string`

##### vector

`number`[]

##### metadata?

`Record`\<`string`, `any`\>

#### Returns

`Promise`\<`void`\>

***

### search()

> **search**(`query`, `topK`): `Promise`\<[`SearchResult`](SearchResult.md)[]\>

Defined in: packages/abstractions/src/memory.ts:18

Returns at most topK records scored by cosine similarity.

#### Parameters

##### query

`number`[]

##### topK

`number`

#### Returns

`Promise`\<[`SearchResult`](SearchResult.md)[]\>
