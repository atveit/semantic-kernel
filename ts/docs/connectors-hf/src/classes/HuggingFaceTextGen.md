[**semantic-kernel-ts**](../../../README.md)

***

[semantic-kernel-ts](../../../modules.md) / [connectors-hf/src](../README.md) / HuggingFaceTextGen

# Class: HuggingFaceTextGen

Defined in: packages/connectors-hf/src/index.ts:8

Simple connector for HuggingFace text generation inference endpoints.
Expects the environment variable HF_ENDPOINT or a provided baseUrl.

## Implements

- `IChatCompletionService`

## Constructors

### Constructor

> **new HuggingFaceTextGen**(`baseUrl`, `apiKey`): `HuggingFaceTextGen`

Defined in: packages/connectors-hf/src/index.ts:9

#### Parameters

##### baseUrl

`string` = `...`

##### apiKey

`string` = `...`

#### Returns

`HuggingFaceTextGen`

## Methods

### completeChat()

> **completeChat**(`messages`, `_settings`): `Promise`\<`ChatMessage`\>

Defined in: packages/connectors-hf/src/index.ts:11

#### Parameters

##### messages

`ChatMessage`[]

##### \_settings

`ChatCompletionSettings` = `{}`

#### Returns

`Promise`\<`ChatMessage`\>

#### Implementation of

`IChatCompletionService.completeChat`
