import type { Metadata } from 'next';
import { getServerSession } from 'next-auth/next';
import { getProviders } from 'next-auth/react';

import { authOptions } from '~/api/auth/options';
import prisma from '@/libs/prisma';

import HeaderPage from '@/components/headerPage';

import SignInProviderButton from './SignInProviderButton';
import SignOutButton from './SignOutButton';
import Form from './form';

async function getGuestbooks() {
  const guestbooks = await prisma.guestbook.findMany();
  return guestbooks;
}

export const metadata: Metadata = {
  title: 'Guestbook',
  description: 'Firma mi libro de visitas y deja tu huella',
};

export const dynamic = 'force-dynamic';

async function GuestbookPage() {
  const session = await getServerSession(authOptions);
  const providers = (await getProviders()) ?? [];
  const guestbooks = await getGuestbooks();

  return (
    <section>
      <HeaderPage title="Libro de visitas" summary="Firma mi libro de visitas y deja tu huella" />

      {!session?.user &&
        Object.values(providers).map((provider) => (
          <div className="mb-8" key={provider?.name}>
            <SignInProviderButton provider={provider} />
          </div>
        ))}

      {session?.user && (
        <div className="mb-8 flex flex-col gap-3">
          <Form />
          <SignOutButton />
        </div>
      )}

      <ul>
        {guestbooks
          ?.sort((a, b) => {
            if (new Date(a.createdAt) > new Date(b.createdAt)) {
              return -1;
            }
            return 1;
          })
          ?.map((guestbook) => (
            <li key={guestbook.id} className="flex flex-row items-center gap-3">
              <span className="dark:text-neutral-500">{guestbook.author}:</span>
              <p className="dark:text-neutral-200">{guestbook.body}</p>
            </li>
          ))}
      </ul>
    </section>
  );
}

export default GuestbookPage;
