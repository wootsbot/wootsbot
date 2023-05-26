import { getServerSession } from 'next-auth/next';
import * as z from 'zod';

import prisma from '@/libs/prisma';

import { authOptions } from '~/api/auth/options';

const contentSchema = z.object({
  body: z.string(),
});

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return new Response('Unauthorized', { status: 403 });
    }

    const email = session.user?.email as string;
    const name = session.user?.name as string;
    const json = await req.json();
    const contentBody = contentSchema.parse(json);

    const newGuestbook = await prisma.guestbook.create({
      data: {
        email,
        body: contentBody.body,
        author: name,
      },
    });

    return new Response(JSON.stringify({ data: newGuestbook }));
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 });
    }

    return new Response(null, { status: 500 });
  }
}
