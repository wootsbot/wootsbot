import { useEffect } from 'react';
import useSWR from 'swr';

import fetcher from '@/libs/fetcher';
import { PostViews } from '@/libs/types';

import Text from '@/design-system/Text';

export type ViewCounterProps = {
  slug: string;
};

export default function ViewCounter({ slug }: ViewCounterProps) {
  const { data } = useSWR<PostViews>(`/api/views/${slug}`, fetcher);
  const views = new Number(data?.total);

  useEffect(() => {
    const registerView = () =>
      fetch(`/api/views/${slug}`, {
        method: 'POST',
      });

    registerView();
  }, [slug]);

  return (
    <Text as="span" size="sm" css={{ fontWeight: '$light' }}>
      {`${views > 0 ? views.toLocaleString() : '–––'} vistas`}
    </Text>
  );
}
