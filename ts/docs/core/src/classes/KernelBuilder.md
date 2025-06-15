[**semantic-kernel-ts**](../../../README.md)

***

[semantic-kernel-ts](../../../modules.md) / [core/src](../README.md) / KernelBuilder

# Class: KernelBuilder

Defined in: packages/core/src/KernelBuilder.ts:3

## Constructors

### Constructor

> **new KernelBuilder**(): `KernelBuilder`

#### Returns

`KernelBuilder`

## Methods

### build()

> **build**(`config`): [`Kernel`](Kernel.md)

Defined in: packages/core/src/KernelBuilder.ts:17

#### Parameters

##### config

[`KernelConfig`](../interfaces/KernelConfig.md) = `{}`

#### Returns

[`Kernel`](Kernel.md)

***

### withChatService()

> **withChatService**(`id`, `service`): `this`

Defined in: packages/core/src/KernelBuilder.ts:12

#### Parameters

##### id

`string`

##### service

`any`

#### Returns

`this`

***

### withPlugin()

> **withPlugin**(`name`, `plugin`): `this`

Defined in: packages/core/src/KernelBuilder.ts:7

#### Parameters

##### name

`string`

##### plugin

`object`

#### Returns

`this`
