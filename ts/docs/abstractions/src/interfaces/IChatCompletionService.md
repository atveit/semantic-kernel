[**semantic-kernel-ts**](../../../README.md)

***

[semantic-kernel-ts](../../../modules.md) / [abstractions/src](../README.md) / IChatCompletionService

# Interface: IChatCompletionService

Defined in: packages/abstractions/src/ai.ts:24

## Methods

### completeChat()

> **completeChat**(`messages`, `settings?`): `Promise`\<[`ChatMessage`](ChatMessage.md)\>

Defined in: packages/abstractions/src/ai.ts:25

#### Parameters

##### messages

[`ChatMessage`](ChatMessage.md)[]

##### settings?

[`ChatCompletionSettings`](ChatCompletionSettings.md)

#### Returns

`Promise`\<[`ChatMessage`](ChatMessage.md)\>

***

### completeStream()?

> `optional` **completeStream**(`messages`, `settings?`): `AsyncIterable`\<[`ChatChunk`](ChatChunk.md)\>

Defined in: packages/abstractions/src/ai.ts:34

Stream the assistant response as chunks. The returned async iterable yields
chunks as soon as they are received and stops when the stream ends or the
AbortSignal is triggered.

#### Parameters

##### messages

[`ChatMessage`](ChatMessage.md)[]

##### settings?

[`ChatCompletionSettings`](ChatCompletionSettings.md)

#### Returns

`AsyncIterable`\<[`ChatChunk`](ChatChunk.md)\>
