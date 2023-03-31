'use client';

import { useEffect } from 'react';
import useSWR from 'swr';

import fetcher from '@/libs/fetcher';
import { PostViews } from '@/libs/types';

export type ViewCounterProps = {
  slug: string;
};

export default function ViewCounter({ slug }: ViewCounterProps) {
  const { data } = useSWR<PostViews>(`/api/views/${slug}`, fetcher);
  const views = data?.total ?? 0;

  useEffect(() => {
    const registerView = () =>
      fetch(`/api/views/${slug}`, {
        method: 'POST',
      });

    if (process.env.NEXT_PUBLIC_RECORD_VIEWS === 'enabled') {
      registerView();
      console.log('process.env', process.env.NEXT_PUBLIC_SHOW_VIEWS)
    }

  }, [slug]);

  return <p className="text-sm text-gray-400">{`${views > 0 ? views : '–––'} vistas`}</p>;
}
