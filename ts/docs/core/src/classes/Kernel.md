[**semantic-kernel-ts**](../../../README.md)

***

[semantic-kernel-ts](../../../modules.md) / [core/src](../README.md) / Kernel

# Class: Kernel

Defined in: packages/core/src/Kernel.ts:15

## Implements

- `Kernel`

## Constructors

### Constructor

> **new Kernel**(`config`): `Kernel`

Defined in: packages/core/src/Kernel.ts:20

#### Parameters

##### config

[`KernelConfig`](../interfaces/KernelConfig.md) = `{}`

#### Returns

`Kernel`

## Methods

### getChatService()

> **getChatService**(`id?`): `undefined` \| `IChatCompletionService`

Defined in: packages/core/src/Kernel.ts:80

#### Parameters

##### id?

`string`

#### Returns

`undefined` \| `IChatCompletionService`

***

### getFunction()

> **getFunction**(`fullName`): `undefined` \| `SKFunction`

Defined in: packages/core/src/Kernel.ts:72

#### Parameters

##### fullName

`string`

#### Returns

`undefined` \| `SKFunction`

***

### getFunctions()

> **getFunctions**(): `Map`\<`string`, `SKFunction`\>

Defined in: packages/core/src/Kernel.ts:85

#### Returns

`Map`\<`string`, `SKFunction`\>

***

### invoke()

> **invoke**(`plugin`, `func`, `ctx`, `args?`): `Promise`\<`any`\>

Defined in: packages/core/src/Kernel.ts:90

#### Parameters

##### plugin

`string`

##### func

`string`

##### ctx

[`KernelContext`](KernelContext.md)

##### args?

`Record`\<`string`, `any`\>

#### Returns

`Promise`\<`any`\>

***

### plan()

> **plan**(`goal`, `options?`): `Promise`\<[`Plan`](Plan.md)\>

Defined in: packages/core/src/Kernel.ts:108

#### Parameters

##### goal

`string`

##### options?

[`PlannerOptions`](../interfaces/PlannerOptions.md)

#### Returns

`Promise`\<[`Plan`](Plan.md)\>

***

### registerChatService()

> **registerChatService**(`id`, `service`): `void`

Defined in: packages/core/src/Kernel.ts:76

#### Parameters

##### id

`string`

##### service

`IChatCompletionService`

#### Returns

`void`

#### Implementation of

`IKernel.registerChatService`

***

### registerPlugin()

> **registerPlugin**(`name`, `plugin`): `void`

Defined in: packages/core/src/Kernel.ts:53

#### Parameters

##### name

`string`

##### plugin

`object`

#### Returns

`void`

#### Implementation of

`IKernel.registerPlugin`

***

### run()

> **run**(`target`, `args`): `Promise`\<`Context`\>

Defined in: packages/core/src/Kernel.ts:26

#### Parameters

##### target

`string` | `SKFunction`

##### args

`Record`\<`string`, `any`\> = `{}`

#### Returns

`Promise`\<`Context`\>

#### Implementation of

`IKernel.run`
