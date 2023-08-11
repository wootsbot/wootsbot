'use client';

import type { ClientSafeProvider } from 'next-auth/react';
import { signIn } from 'next-auth/react';

import { SiGithub } from '@icons-pack/react-simple-icons';

const IconsProviders = {
  GitHub: <SiGithub size={20} />,
};

export type SignInProviderProps = {
  provider: ClientSafeProvider;
};

function SignInProviderButton({ provider }: SignInProviderProps) {
  return (
    <button
      className="flex flex-row items-center gap-3 border border-neutral-400 dark:border-white py-2 px-3 rounded-sm bg-gray-100 dark:bg-zinc-950"
      onClick={() => signIn(provider.id)}
    >
      <span>Inicia sesión con {provider.name}</span>
      {IconsProviders[provider.name]}
    </button>
  );
}

export default SignInProviderButton;
