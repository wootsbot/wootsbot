import dynamic from 'next/dynamic';

import { InferGetStaticPropsType } from 'next';

import { useForm, useWatch } from 'react-hook-form';

import { styled } from '@/stitches';

import { pick } from 'contentlayer/utils';
import { allBlogs } from '@/contentlayer/generated';

import Flex from '@/design-system/Flex';
import Container from '@/design-system/Container';
import Heading from '@/design-system/Heading';
import Text from '@/design-system/Text';

import BlogPreview from '@/layouts/BlogPreview';

import Layout from '@/layouts/Layout';

const SEO = dynamic(() => import('@/components/SEO'));

const StyledInputSearch = styled('input', {
  width: '100%',
  height: '100%',
  minHeight: 45,
  maxHeight: 45,
  border: 'none',
  borderRadius: '$md',
  backgroundColor: '$sage5',
  my: '$1',
  pl: '$2',
  pr: '$2',
  fontSize: '$md',
  color: '$textPrimary',
  outline: 'none',

  '&:hover': {
    boxShadow: '$cardHover',
  },

  '&:focus': {
    boxShadow: '$cardHover',
  },
  '&:disabled': {
    boxShadow: 'none',
    backgroundColor: '$sage7',
  },

  '&::placeholder': {
    color: '$textSecondary',
    fontSize: '$sm',
  },

  '@phone': {
    width: '100%',
  },

  variants: {
    error: {
      true: {
        boxShadow: '$cardError !important',
        backgroundColor: '$red5',
      },
    },
  },
});

// const rgx = /([.*+?^=!:${}()|\[\]\/\\])/g;

function BlogsPage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { register, control } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  const searchField = useWatch({
    control,
    name: 'searchField',
    defaultValue: '',
  });

  const filteredBlogPosts = posts.filter((frontMatter) =>
    frontMatter?.title?.toLowerCase()?.includes(searchField?.toLowerCase()),
  );

  const isPosts = filteredBlogPosts?.length > 0;

  return (
    <Container css={{ mt: '$6' }} size="sm">
      <SEO
        title="Blog – wootsbot dev"
        description="Creo que entre más compartas, más aprendes, La idea es brindar herramientas a los estudiantes para crear un mejor software."
      />

      <Heading css={{ mb: '$5' }}>Blog</Heading>

      <Flex css={{ width: '100%', mb: '$8' }}>
        <StyledInputSearch placeholder="Buscar publicaciones" {...register('searchField')} />
      </Flex>

      <Flex flexDirection="column" gap="2">
        <Flex flexDirection="column" gap="1" css={{ mb: '$5' }}>
          <Heading size="lg">Publicaciones</Heading>

          {!isPosts && <Text color="gray">No se han encontrado publicaciones.</Text>}
        </Flex>

        <Flex flexDirection="column" gap={9}>
          {filteredBlogPosts?.map((blog) => (
            <BlogPreview key={blog.title} {...blog} />
          ))}
        </Flex>
      </Flex>
    </Container>
  );
}

export function getStaticProps() {
  const posts = allBlogs
    ?.map((post) => pick(post, ['slug', 'title', 'summary', 'publishedAt', 'image']))
    ?.sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)));

  return { props: { posts } };
}

BlogsPage.Layout = Layout;
export default BlogsPage;
