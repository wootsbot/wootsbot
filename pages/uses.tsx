import dynamic from 'next/dynamic';

import { useMDXComponent } from 'next-contentlayer/hooks';

import Box from '@/design-system/Box';
import Layout from '@/layouts/Layout';
import Container from '@/design-system/Container';

import components from '@/components/MDXComponents';

import { allOtherPages } from '@/contentlayer/generated';
import type { OtherPage } from '@/contentlayer/generated';

const SEO = dynamic(() => import('@/components/SEO'));

function UsesPage({ body: { code }, title, summary, image }: OtherPage) {
  const Component = useMDXComponent(code);

  return (
    <Container css={{ mt: '$6', mb: '$5' }} size="sm">
      <SEO
        title={title}
        description={summary}
        openGraph={{
          images: [
            {
              url: `https://www.wootsbot.dev${image}`,
              width: 800,
              height: 600,
              alt: title,
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
  const uses = allOtherPages.find((page) => page.slug === 'uses')!;

  return { props: uses };
}

UsesPage.Layout = Layout;
export default UsesPage;
