/* eslint-disable react-hooks/rules-of-hooks */
import * as React from 'react';

import LinkNext from 'next/link';
import Image, { ImageProps } from 'next/image';
import { useRouter } from 'next/router';

import rangeParser from 'parse-numeric-range';

import Step from '@/components/Step';
import Heading, { HeadingProps } from '@/design-system/Heading';
import Box, { StyledBoxVariants } from '@/design-system/Box';
import Text, { StyledTextVariants } from '@/design-system/Text';
import Stack from '@/design-system/Stack';

import Pre from '@/components/Pre';
import Preview, { PreviewProps } from '@/components/Preview';
import DisplayListInfoCard from '@/components/DisplayListInfoCard';
import Codeblock from '@/components/Codeblock';

import { styled, VariantProps } from '@/stitches';

const shimmer = (w?: string | number, h?: string | number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str);

const StyledLink = styled('a', {
  textDecoration: 'none',
  fontWeight: '$medium',
  color: '$blue11',

  '&:hover': {
    color: '$blue9',
  },

  '&:active': {
    color: '$blue9',
  },
});

function Link({ href, name, ...props }: { href: string; name?: string }) {
  const { pathname } = useRouter();

  return (
    <LinkNext href={href} passHref>
      <StyledLink {...props} />
    </LinkNext>
  );
}

const CustomLink = (props: { href?: string }) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return <Link href={href} {...props} />;
  }

  return <StyledLink target="_blank" rel="noopener noreferrer" {...props} />;
};

// function RoundedImage(props) {
//   return <Image alt={props.alt} {...props} />;
// }

function Callout(props: { emoji: string; children: React.ReactNode }) {
  return (
    <div>
      <div>{props.emoji}</div>
      <div>{props.children}</div>
    </div>
  );
}

const StyledImageNext = styled(Image, {
  borderRadius: '$md',
});
export type StyledStyledImageNextVariants = VariantProps<typeof StyledImageNext>;

const StyledCode = styled('code', {
  color: '$violet11',
  backgroundColor: '$violet3',
  padding: '0px 3px 2px',
});

const StyledHr = styled('hr', {
  borderColor: '$slate8',
  borderTopWidth: 1,
});
export type StyledHrVariants = VariantProps<typeof StyledHr>;

const StyledUl = styled(Box, {
  color: '$hiContrast',
  p: 0,
  mx: 0,
  my: '$3',
  listStyle: 'none',
});
export type StyledUlVariants = VariantProps<typeof StyledUl>;

const MDXComponents = {
  // Image: RoundedImage,
  Image: ({
    width,
    height,
    ...props
  }: { width?: string | number; height?: string | number } & ImageProps & StyledStyledImageNextVariants) => (
    <StyledImageNext
      {...props}
      width={width}
      height={height}
      placeholder="blur"
      blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(width, height))}`}
    />
  ),
  img: ({ ...props }) => (
    <Box css={{ my: '$6' }}>
      <Box as="img" {...props} css={{ maxWidth: '100%', verticalAlign: 'middle', ...props.css }} />
    </Box>
  ),
  a: CustomLink,
  hr: (props: StyledHrVariants) => <StyledHr {...props} css={{ my: '$6', mx: 'auto' }} />,
  ul: (props: StyledUlVariants) => <StyledUl {...props} as="ul" />,
  ol: (props: StyledUlVariants) => <StyledUl {...props} as="ol" />,
  // li: (props: StyledTextVariants) => (
  //   <li>
  //     <Text {...props} size="sm" />
  //   </li>
  // ),
  strong: (props: StyledTextVariants) => (
    <Text as="strong" {...props} css={{ display: 'inline', fontWeight: '$semibold' }} />
  ),
  Callout,
  Step,
  h2: ({ children, ...props }: HeadingProps) => (
    // @ts-ignore
    <Heading {...props} as="h2" size="lg" css={{ scrollMarginTop: '$6', mt: '$7', mb: '$2' }} data-heading>
      {children}
    </Heading>
  ),
  h3: ({ children, ...props }: HeadingProps) => (
    // @ts-ignore
    <Heading {...props} as="h3" size="md" css={{ scrollMarginTop: '$6', mt: '$7', mb: '$1' }} data-heading>
      {children}
    </Heading>
  ),
  // @ts-ignore
  h4: (props: HeadingProps) => <Heading as="h4" size="sm" {...props} css={{ mb: '$1' }} />,
  // @ts-ignore
  h5: (props: HeadingProps) => <Heading as="h4" size="sm" {...props} css={{ mb: '$1' }} />,
  // @ts-ignore
  h6: (props: HeadingProps) => <Heading as="h4" size="xs" {...props} css={{ mb: '$1' }} />,
  p: (props: StyledTextVariants) => <Text {...props} css={{ mb: '$3' }} />,
  pre: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  code: ({
    className,
    children,
    id,
    showLineNumbers = false,
    collapsed = false,
  }: {
    className?: string;
    children: React.ReactNode;
    id?: string;
    showLineNumbers?: boolean;
    collapsed?: boolean;
  }) => {
    const isInlineCode = !className;

    if (isInlineCode) {
      return <StyledCode>{children}</StyledCode>;
    }

    const [isCollapsed, setIsCollapsed] = React.useState(collapsed);

    const collapsedStyles = {
      height: '100px',
      position: 'relative',
      '&::after': {
        content: `''`,
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'linear-gradient(to bottom, transparent 30%, $$background)',
      },
    };
    return (
      <Pre
        css={{
          my: '$5',
          ...(isCollapsed ? collapsedStyles : {}),
          '[data-preview] + &': {
            marginTop: 1,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
          },
        }}
        className={className}
        id={id}
        data-line-numbers={showLineNumbers}
      >
        {isCollapsed && (
          <Box
            css={{
              position: 'absolute',
              left: 0,
              zIndex: 1,
              bottom: '$2',
              width: '100%',
              textAlign: 'center',
            }}
          >
            <button onClick={() => setIsCollapsed(false)}>Show code</button>
          </Box>
        )}

        <Box as="code" className={className} css={{ fontFamily: '$mono' }}>
          {children}
        </Box>
      </Pre>
    );
  },
  blockquote: (props: StyledBoxVariants) => (
    <Box
      css={{
        fontFamily: '$mono',
        fontWeight: '$light',
        mt: '$6',
        mb: '$5',
        pl: '$4',
        py: '$1',
        borderLeft: `3px solid $colors$green11`,
        color: '$blue3',
        // backgroundColor: '$blue3',
        '& p': {
          m: 0,
          fontWeight: '$light',
          fontSize: '$md',
          color: '$gray12',
          lineHeight: 1.625,
        },
      }}
      {...props}
    />
  ),
  Preview: (props: PreviewProps) => <Preview {...props} css={{ mt: '$5' }} />,
  // RegisterLink: ({ id, index, href }: { id: string; index: number; href: string }) => {
  //   const isExternal = href.startsWith('http');

  //   React.useEffect(() => {
  //     const codeBlock = document.getElementById(id);
  //     if (!codeBlock) return;

  //     const allHighlightWords = codeBlock.querySelectorAll('.highlight-word');
  //     const target = allHighlightWords[index - 1];
  //     if (!target) return;

  //     const addClass = () => target.classList.add('on');
  //     const removeClass = () => target.classList.remove('on');
  //     const addClick = () => (isExternal ? window.location.replace(href) : NextRouter.push(href));

  //     target.addEventListener('mouseenter', addClass);
  //     target.addEventListener('mouseleave', removeClass);
  //     target.addEventListener('click', addClick);

  //     return () => {
  //       target.removeEventListener('mouseenter', addClass);
  //       target.removeEventListener('mouseleave', removeClass);
  //       target.removeEventListener('click', addClick);
  //     };
  //   }, [href, id, index, isExternal]);

  //   return null;
  // },
  H: ({ id, index, ...props }: { id: string; index: number | string }) => {
    const triggerRef = React.useRef(null);

    React.useEffect(() => {
      const trigger = triggerRef.current;

      const codeBlock = document.getElementById(id);
      if (!codeBlock) return;

      const allHighlightWords = codeBlock.querySelectorAll('.highlight-word');
      // @ts-ignore
      const targetIndex = rangeParser(index).map((i) => i - 1);
      // exit if the `index` passed is bigger than the total number of highlighted words
      if (Math.max(...targetIndex) >= allHighlightWords.length) return;

      const addClass = () => targetIndex.forEach((i) => allHighlightWords[i].classList.add('on'));
      const removeClass = () => targetIndex.forEach((i) => allHighlightWords[i].classList.remove('on'));

      // @ts-ignore
      trigger.addEventListener('mouseenter', addClass);
      // @ts-ignore
      trigger.addEventListener('mouseleave', removeClass);

      return () => {
        // @ts-ignore
        trigger.removeEventListener('mouseenter', addClass);
        // @ts-ignore
        trigger.removeEventListener('mouseleave', removeClass);
      };
    }, [id, index]);

    return <Box as="code" css={{ cursor: 'default' }} ref={triggerRef} {...props} />;
  },
  Codeblock,
  DisplayListInfoCard,
  Stack,
  Box,
  Heading,
  Text,
};

export default MDXComponents;
