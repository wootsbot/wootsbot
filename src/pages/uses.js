import { useMemo } from 'react';
import dynamic from 'next/dynamic';

import { getFileBySlug } from '@/libs/mdx';
import { getMDXComponent } from 'mdx-bundler/client';

import Box from '@/design-system/Box';
import Layout from '@/components/Layout';
import Container from '@/design-system/Container';

import components from '@/components/MDXComponents';

const SEO = dynamic(() => import('@/components/SEO'));

function UsesPage({ code }) {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <Container css={{ mt: '$6', mb: '$5' }} size="sm">
      <SEO title="Uses" description="Lo que más utilizo para codificación y video." />

      <article>
        <Box css={{ mt: '$5' }} className="wootsbot-article">
          <Component components={components} />
        </Box>
      </article>
    </Container>
  );
}

export async function getStaticProps() {
  const uses = await getFileBySlug('uses');

  return { props: uses };
}

UsesPage.Layout = Layout;
export default UsesPage;
