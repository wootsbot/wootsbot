import { Job, Pipeline } from 'https://deno.land/x/cicada@v0.1.34/lib.ts';

const job = new Job({
  name: 'Build app',
  image: 'ubuntu:22.04',
  steps: [
    {
      name: 'Print a message',
      run: 'echo Hello, world!',
    },
    {
      name: 'Run a js function',
      run: () => {
        console.log('Hello from js');
      },
    },
  ],
});

const muslJob = new Job({
  name: 'musl_job',
  image: 'node:16',
  steps: [
    {
      name: 'Setup PNPM',
      run: 'corepack enable && corepack prepare pnpm@7.30.5 --activate',
    },
    {
      name: 'Install dep',
      run: 'pnpm install --no-frozen-lockfile',
    },
    {
      name: 'pnpm build',
      run: 'pnpm build',
    },
  ],
});

export default new Pipeline([job, muslJob]);
