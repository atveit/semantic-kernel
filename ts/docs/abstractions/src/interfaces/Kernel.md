[**semantic-kernel-ts**](../../../README.md)

***

[semantic-kernel-ts](../../../modules.md) / [abstractions/src](../README.md) / Kernel

# Interface: Kernel

Defined in: packages/abstractions/src/Kernel.ts:1

## Methods

### registerChatService()

> **registerChatService**(`id`, `service`): `void`

Defined in: packages/abstractions/src/Kernel.ts:4

#### Parameters

##### id

`string`

##### service

[`IChatCompletionService`](IChatCompletionService.md)

#### Returns

`void`

***

### registerPlugin()

> **registerPlugin**(`name`, `plugin`): `void`

Defined in: packages/abstractions/src/Kernel.ts:3

#### Parameters

##### name

`string`

##### plugin

`object`

#### Returns

`void`

***

### run()

> **run**(`target`, ...`args`): `Promise`\<[`Context`](Context.md)\>

Defined in: packages/abstractions/src/Kernel.ts:2

#### Parameters

##### target

`string` | [`SKFunction`](SKFunction.md)

##### args

...`any`[]

#### Returns

`Promise`\<[`Context`](Context.md)\>
