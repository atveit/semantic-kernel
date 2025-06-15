[**semantic-kernel-ts**](../../../README.md)

***

[semantic-kernel-ts](../../../modules.md) / [core/src](../README.md) / KernelContext

# Class: KernelContext

Defined in: packages/core/src/Context.ts:6

## Implements

- `Context`

## Constructors

### Constructor

> **new KernelContext**(`kernel`, `vars`): `KernelContext`

Defined in: packages/core/src/Context.ts:11

#### Parameters

##### kernel

[`Kernel`](Kernel.md)

##### vars

`Record`\<`string`, `any`\> = `{}`

#### Returns

`KernelContext`

## Properties

### memory?

> `optional` **memory**: `IMemoryStore`

Defined in: packages/core/src/Context.ts:8

#### Implementation of

`Context.memory`

***

### variables

> **variables**: `Record`\<`string`, `any`\>

Defined in: packages/core/src/Context.ts:7

#### Implementation of

`Context.variables`

## Methods

### call()

> **call**(`plugin`, `func`, `args?`): `Promise`\<`any`\>

Defined in: packages/core/src/Context.ts:16

#### Parameters

##### plugin

`string`

##### func

`string`

##### args?

`Record`\<`string`, `any`\>

#### Returns

`Promise`\<`any`\>

#### Implementation of

`Context.call`
