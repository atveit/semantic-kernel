[**semantic-kernel-ts**](../../../README.md)

***

[semantic-kernel-ts](../../../modules.md) / [core/src](../README.md) / InMemoryStore

# Class: InMemoryStore

Defined in: packages/core/src/InMemoryStore.ts:7

Simple in-memory vector store intended for development and testing only.
Stores up to 10k vectors and performs naive linear search using cosine similarity.

## Implements

- `IMemoryStore`

## Constructors

### Constructor

> **new InMemoryStore**(): `InMemoryStore`

Defined in: packages/core/src/InMemoryStore.ts:10

#### Returns

`InMemoryStore`

## Methods

### save()

> **save**(`id`, `vector`, `metadata?`): `Promise`\<`void`\>

Defined in: packages/core/src/InMemoryStore.ts:14

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

#### Implementation of

`IMemoryStore.save`

***

### search()

> **search**(`query`, `topK`): `Promise`\<`SearchResult`[]\>

Defined in: packages/core/src/InMemoryStore.ts:27

Returns at most topK records scored by cosine similarity.

#### Parameters

##### query

`number`[]

##### topK

`number`

#### Returns

`Promise`\<`SearchResult`[]\>

#### Implementation of

`IMemoryStore.search`
