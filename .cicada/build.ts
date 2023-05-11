import { Job, Pipeline } from 'https://deno.land/x/cicada@v0.1.34/lib.ts';

const buildJob = new Job({
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

export default new Pipeline([buildJob]);
