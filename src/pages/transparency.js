import { useMemo } from 'react';
import dynamic from 'next/dynamic';

import { getFileBySlug } from '@/libs/mdx';
import { getMDXComponent } from 'mdx-bundler/client';

import Box from '@/design-system/Box';
import Layout from '@/components/Layout';
import Container from '@/design-system/Container';

import components from '@/components/MDXComponents';

const SEO = dynamic(() => import('@/components/SEO'));

function TransparencyPage({ code, frontMatter, uses }) {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <Container size="sm">
      <SEO
        title={frontMatter?.title}
        description={frontMatter?.summary}
        openGraph={{
          images: [
            {
              url: `https://wootsbot.vercel.app${frontMatter.image}`,
              width: 800,
              height: 600,
              alt: 'woostbot',
            },
          ],
        }}
      />

      <article>
        <Box css={{ mt: '$5' }} className="wootsbot-article">
          <Component components={components} />
        </Box>
      </article>
    </Container>
  );
}

export async function getStaticProps() {
  const uses = await getFileBySlug('transparency');

  return { props: uses };
}

TransparencyPage.Layout = Layout;
export default TransparencyPage;
