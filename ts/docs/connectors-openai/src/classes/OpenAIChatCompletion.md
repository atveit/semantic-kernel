[**semantic-kernel-ts**](../../../README.md)

***

[semantic-kernel-ts](../../../modules.md) / [connectors-openai/src](../README.md) / OpenAIChatCompletion

# Class: OpenAIChatCompletion

Defined in: packages/connectors-openai/src/index.ts:7

Simple OpenAI chat completion service supporting Azure or public endpoints.

## Implements

- `IChatCompletionService`

## Constructors

### Constructor

> **new OpenAIChatCompletion**(): `OpenAIChatCompletion`

Defined in: packages/connectors-openai/src/index.ts:14

#### Returns

`OpenAIChatCompletion`

## Methods

### completeChat()

> **completeChat**(`messages`, `settings`): `Promise`\<`ChatMessage`\>

Defined in: packages/connectors-openai/src/index.ts:33

#### Parameters

##### messages

`ChatMessage`[]

##### settings

`ChatCompletionSettings` = `{}`

#### Returns

`Promise`\<`ChatMessage`\>

#### Implementation of

`IChatCompletionService.completeChat`

***

### completeStream()

> **completeStream**(`messages`, `settings`): `AsyncIterable`\<`ChatChunk`\>

Defined in: packages/connectors-openai/src/index.ts:90

Stream the assistant response as chunks. The returned async iterable yields
chunks as soon as they are received and stops when the stream ends or the
AbortSignal is triggered.

#### Parameters

##### messages

`ChatMessage`[]

##### settings

`ChatCompletionSettings` = `{}`

#### Returns

`AsyncIterable`\<`ChatChunk`\>

#### Implementation of

`IChatCompletionService.completeStream`
