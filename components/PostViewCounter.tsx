'use client';

import { useEffect } from 'react';
import useSWR from 'swr';

import fetcher from '@/libs/fetcher';
import { PostViews } from '@/libs/types';

export type ViewCounterProps = {
  slug: string;
  isDetails?: boolean;
};

export default function ViewCounter({ slug, isDetails = false }: ViewCounterProps) {
  const { data } = useSWR<PostViews>(`/api/views/${slug}`, fetcher);
  const views = data?.total ?? 0;

  useEffect(() => {
    const registerView = () =>
      fetch(`/api/views/${slug}`, {
        method: 'POST',
      });

    if (process.env.NEXT_PUBLIC_RECORD_VIEWS === 'enabled' && isDetails) {
      registerView();
    }
  }, [slug, isDetails]);

  return <p className="text-sm text-neutral-500 font-serif">{`${views > 0 ? views : '–––'} vistas`}</p>;
}
