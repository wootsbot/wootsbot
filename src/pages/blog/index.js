import dynamic from 'next/dynamic';

import { useForm, useWatch } from 'react-hook-form';

import { styled } from '@/stitches';

import Flex from '@/design-system/Flex';
import Container from '@/design-system/Container';
import Heading from '@/design-system/Heading';
import Text from '@/design-system/Text';

import BlogPreview from '@/components/BlogPreview';

import { getAllFilesFrontMatter } from '@/libs/mdx';

import Layout from '@/components/Layout';

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
  color: '$sage12',
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
    color: '$sage10',
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

function BlogsPage({ posts }) {
  const { register, control } = useForm({ mode: 'onSubmit', reValidateMode: 'onChange' });

  const searchField = useWatch({
    control,
    name: 'searchField',
    defaultValue: '',
  });

  //  const searchTag = searchField?.replace(rgx, '');

  // const postTags = posts
  //   ?.sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)))
  //   ?.filter((frontMatter) => frontMatter?.tags?.join(' ')?.toLowerCase()?.includes(searchTag?.toLowerCase()));

  const filteredBlogPosts = posts
    .sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)))
    .filter((frontMatter) => frontMatter?.title?.toLowerCase()?.includes(searchField?.toLowerCase()));

  // const postsList = filteredBlogPosts?.length ? filteredBlogPosts : postTags;

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

          {!filteredBlogPosts?.length > 0 && <Text color="gray">No se han encontrado publicaciones.</Text>}
        </Flex>

        <Flex flexDirection="column" gap={6}>
          {filteredBlogPosts?.map((blog) => (
            <BlogPreview key={blog.title} {...blog} />
          ))}
        </Flex>
      </Flex>
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog');

  return { props: { posts } };
}

BlogsPage.Layout = Layout;
export default BlogsPage;
