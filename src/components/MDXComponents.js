/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import LinkNext from 'next/link';
import { useRouter } from 'next/router';

import rangeParser from 'parse-numeric-range';

import { styled } from '@/stitches';

import Step from '@/components/Step';
import Heading from '@/design-system/Heading';
import Box from '@/design-system/Box';
import Text from '@/design-system/Text';
import Stack from '@/design-system/Stack';

import Pre from '@/components/Pre';
import Preview from '@/components/Preview';
import DisplayListInfoCard from '@/components/DisplayListInfoCard';
import LinkHeading from '@/components/LinkHeading';
import Codeblock from '@/components/Codeblock';

const shimmer = (w, h) => `
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

const toBase64 = (str) => (typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str));

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

const StyledHr = styled('hr', {
  borderColor: '$slate8',
  borderTopWidth: 1,
});

const StyledImageNext = styled(Image, {
  borderRadius: '$md',
});

const StyledCode = styled('code', {
  color: '$violet11',
  backgroundColor: '$violet3',
  padding: '0px 3px 2px',
});

const StyledUl = styled(Box, {
  color: '$hiContrast',
  p: 0,
  mx: 0,
  my: '$3',
  listStyle: 'none',
});

function Link({ href, name, ...props }) {
  const { pathname } = useRouter();

  return (
    <LinkNext href={href} passHref>
      <StyledLink {...props} />
    </LinkNext>
  );
}

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return <Link href={href} {...props} />;
  }

  return <StyledLink target="_blank" rel="noopener noreferrer" {...props} />;
};

const MDXComponents = {
  h1: (props) => <Heading {...props} size="2xl" css={{ mb: '$2' }} />,
  h2: ({ children, id, ...props }) => (
    <LinkHeading id={id} css={{ mt: '$7', mb: '$2' }}>
      <Heading {...props} as="h2" size="lg" id={id} css={{ scrollMarginTop: '$6' }} data-heading>
        {children}
      </Heading>
    </LinkHeading>
  ),
  h3: ({ children, id, ...props }) => (
    <LinkHeading id={id} css={{ mt: '$7', mb: '$1' }} iconSize={18}>
      <Heading {...props} as="h3" size="md" id={id} css={{ scrollMarginTop: '$6' }} data-heading>
        {children}
      </Heading>
    </LinkHeading>
  ),
  h4: (props) => <Heading as="h4" size="sm" {...props} css={{ mb: '$1' }} />,
  h5: (props) => <Heading as="h4" size="sm" {...props} css={{ mb: '$1' }} />,
  h6: (props) => <Heading as="h4" size="xs" {...props} css={{ mb: '$1' }} />,
  p: (props) => <Text {...props} css={{ mb: '$3' }} />,

  Image: ({ width, height, ...props }) => (
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
  hr: (props) => <StyledHr {...props} css={{ my: '$6', mx: 'auto' }} />,
  ul: (props) => <StyledUl {...props} as="ul" />,
  ol: (props) => <StyledUl {...props} as="ol" />,
  li: (props) => (
    <li>
      <Text {...props} size="sm" />
    </li>
  ),
  strong: (props) => <Text as="strong" {...props} css={{ display: 'inline', fontWeight: '$semibold' }} />,
  // Analytics,
  // ConsCard,
  // Gumroad,
  // DisplayListInfoCard,
  Step,
  pre: ({ children }) => <>{children}</>,
  code: ({ className, children, id, showLineNumbers = false, collapsed = false }) => {
    const isInlineCode = !className;

    if (isInlineCode) {
      return <StyledCode>{children}</StyledCode>;
    }

    const [isCollapsed, setIsCollapsed] = useState(collapsed);

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
            <button nonClick={() => setIsCollapsed(false)}>Show code</button>
          </Box>
        )}

        <Box as="code" className={className} css={{ fontFamily: '$mono' }}>
          {children}
        </Box>
      </Pre>
    );
  },
  blockquote: (props) => (
    <Box
      css={{
        mt: '$6',
        mb: '$5',
        pl: '$4',
        py: '$1',
        borderLeft: `3px solid $colors$blue11`,
        color: '$blue3',
        backgroundColor: '$blue3',
        '& p': {
          m: 0,
          fontSize: '$md',
          color: '$blue11',
          lineHeight: '27px',
        },
      }}
      {...props}
    />
  ),
  Preview: (props) => <Preview {...props} css={{ mt: '$5' }} />,
  RegisterLink: ({ id, index, href }) => {
    const isExternal = href.startsWith('http');

    React.useEffect(() => {
      const codeBlock = document.getElementById(id);
      if (!codeBlock) return;

      const allHighlightWords = codeBlock.querySelectorAll('.highlight-word');
      const target = allHighlightWords[index - 1];
      if (!target) return;

      const addClass = () => target.classList.add('on');
      const removeClass = () => target.classList.remove('on');
      const addClick = () => (isExternal ? window.location.replace(href) : NextRouter.push(href));

      target.addEventListener('mouseenter', addClass);
      target.addEventListener('mouseleave', removeClass);
      target.addEventListener('click', addClick);

      return () => {
        target.removeEventListener('mouseenter', addClass);
        target.removeEventListener('mouseleave', removeClass);
        target.removeEventListener('click', addClick);
      };
    }, [href, id, index, isExternal]);

    return null;
  },
  H: ({ id, index, ...props }) => {
    const triggerRef = useRef(null);

    useEffect(() => {
      const trigger = triggerRef.current;

      const codeBlock = document.getElementById(id);
      if (!codeBlock) return;

      const allHighlightWords = codeBlock.querySelectorAll('.highlight-word');
      const targetIndex = rangeParser(index).map((i) => i - 1);
      // exit if the `index` passed is bigger than the total number of highlighted words
      if (Math.max(...targetIndex) >= allHighlightWords.length) return;

      const addClass = () => targetIndex.forEach((i) => allHighlightWords[i].classList.add('on'));
      const removeClass = () => targetIndex.forEach((i) => allHighlightWords[i].classList.remove('on'));

      trigger.addEventListener('mouseenter', addClass);
      trigger.addEventListener('mouseleave', removeClass);

      return () => {
        trigger.removeEventListener('mouseenter', addClass);
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
  // Unsplash,
  // YouTube,
};

export default MDXComponents;
