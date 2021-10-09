import { useMemo } from 'react';

import { getMDXComponent } from 'mdx-bundler/client';
import { getFileBySlug } from '@/libs/mdx';

import Container from '@/design-system/Container';
import Layout from '@/components/Layout';
import Box from '@/design-system/Box';

import components from '@/components/MDXComponents';

function UsesPage({ code }) {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <Layout>
      <Container css={{ mt: '$6', mb: '$5' }} size={1}>
        <article>
          <Box css={{ mt: '$5' }} className="wootsbot-article">
            <Component components={components} />
          </Box>
        </article>
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const uses = await getFileBySlug('uses');

  return { props: uses };
}

export default UsesPage;
