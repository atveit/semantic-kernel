import 'reflect-metadata';
import { Kernel } from './packages/core/dist/index.js';

class BenchPlugin {
  empty() {}
}

const kernel = new Kernel();
kernel.registerPlugin('bench', new BenchPlugin());
const iterations = 10000;
const start = performance.now();
for (let i = 0; i < iterations; i++) {
  await kernel.run('bench.empty');
}
const duration = performance.now() - start;
const perCall = duration / iterations;
console.log(`Per-call overhead: ${perCall.toFixed(2)} ms`);
if (perCall > 10) {
  console.error('Benchmark failed: too slow');
  process.exit(1);
}
