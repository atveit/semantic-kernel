**semantic-kernel-ts**

***

# Semantic Kernel TypeScript SDK

This directory contains a simplified Semantic Kernel implementation used for testing.

## Tracing Setup

Install dependencies and initialize OpenTelemetry using the Node SDK:

```ts
import { NodeTracerProvider } from '@opentelemetry/sdk-trace-node';
import { SimpleSpanProcessor, ConsoleSpanExporter } from '@opentelemetry/sdk-trace-base';
import { enableTracing } from '@microsoft/semantic-kernel-core';

const provider = new NodeTracerProvider();
provider.addSpanProcessor(new SimpleSpanProcessor(new ConsoleSpanExporter()));
provider.register();

enableTracing();
```

Enable `enableTracing` via `KernelBuilder.build({ enableTracing: true })` or when constructing `Kernel` directly.

## Alternate Runtimes

After building the packages with `pnpm -r run build`, the generated ESM output can be used in other runtimes.

### Deno

Run the simple sample:

```bash
deno run --allow-net samples/deno-hello.ts
```

### Bun

Install dependencies and execute the same sample with Bun:

```bash
bun install
bun samples/deno-hello.ts
```
