import { type NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import prisma from '@/libs/prisma';

export const revalidate = 60;

export async function GET(
  _req: NextRequest,
  {
    params,
  }: {
    params: { slug: string };
  },
) {
  try {
    const slug = params.slug;

    if (!slug) {
      return new Response('Slug is required.', { status: 400 });
    }

    const views = await prisma.views.findUnique({
      where: {
        slug,
      },
    });

    return NextResponse.json({
      total: views?.count?.toString(),
    });
  } catch (err: any) {
    return new Response(err, { status: 500 });
  }
}

export async function POST(
  _req: NextRequest,
  {
    params,
  }: {
    params: { slug: string };
  },
) {
  try {
    const slug = params.slug;

    if (!slug) {
      return new Response('Slug is required.', { status: 400 });
    }

    const newOrUpdatedViews = await prisma.views.upsert({
      where: { slug },
      create: {
        slug,
      },
      update: {
        count: {
          increment: 1,
        },
      },
    });

    return NextResponse.json({
      total: newOrUpdatedViews.count.toString(),
    });
  } catch (err: any) {
    return new Response(err, { status: 500 });
  }
}
