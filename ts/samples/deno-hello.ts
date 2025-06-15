import { KernelBuilder, TimePlugin } from '../packages/core/dist/index.js';

async function main() {
  const kernel = new KernelBuilder().withPlugin('time', new TimePlugin()).build();
  const ctx = await kernel.run('time.now');
  console.log('Current time:', ctx.variables.time);
}

main().catch((err) => {
  console.error(err);
  Deno.exit(1);
});

