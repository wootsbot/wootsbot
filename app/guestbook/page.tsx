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

async function GuestbookPage() {
  const session = await getServerSession(authOptions);
  const providers = (await getProviders()) ?? [];
  const guestbooks = await getGuestbooks();

  return (
    <section>
      <HeaderPage title="Visitas" summary="" />

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
              <span className="text-neutral-500">{guestbook.author}:</span>
              <p className="text-neutral-200">{guestbook.body}</p>
            </li>
          ))}
      </ul>
    </section>
  );
}

export default GuestbookPage;
