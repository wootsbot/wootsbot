import { useState } from 'react';

import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';

import { FileIcon, CheckIcon } from '@radix-ui/react-icons';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

import { styled, css } from '@/stitches';

import Box from '@/design-system/Box';
import Flex from '@/design-system/Flex';
import Heading from '@/design-system/Heading';
import IconButton from '@/design-system/IconButton';
import useClipboard from '@/design-system/hooks/useClipboard';

import { useThemeLiveReact } from '@/utils/themeLiveReact';

const scope = { styled, Heading, Box, Flex };

const StyledButtonWrapper = styled(Box, {
  position: 'absolute',
  top: 16,
  zIndex: 1,
  right: '1.25em',
});

const StyledLiveEditorWrapper = styled(Box, {
  position: 'relative',
  backgroundColor: '$colors$violet2',
  boxShadow: '0 0 0 1.5px $colors$violet3',
  zIndex: 0,
  borderRadius: 8,
  px: '$2',
  pt: '$5',
  pb: '$2',
});

const livePreviewStyles = css({
  fontFamily: '$mono',
  mt: '$2',
  mb: '$2',
  p: '$2',
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: '$slate8',
  borderRadius: '$md',
  backgroundColor: '$slate3',
  zIndex: 1,
});

export const liveEditorStyle = {
  fontSize: 14,
  overflowX: 'auto',
  fontFamily: 'JetBrains Mono,Söhne Mono, menlo, monospacece',
};

export const liveErrorStyle = {
  fontFamily: 'JetBrains Mono,Söhne Mono, menlo, monospace',
  fontSize: 14,
  padding: '1em',
  overflowX: 'auto',
  color: 'white',
};

const StyledContent = styled(TooltipPrimitive.Content, {
  borderRadius: 4,
  padding: '10px 15px',
  fontSize: 15,
  lineHeight: 1,
  color: '$colors$violet11',
  backgroundColor: '$mauve1',
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
  },
});

// Exports
const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;
const TooltipContent = StyledContent;

function CopyButton({ code, ...props }) {
  const { hasCopied, onCopy } = useClipboard(code);

  return (
    <StyledButtonWrapper>
      <Tooltip open={hasCopied}>
        <TooltipTrigger asChild>
          <IconButton
            {...props}
            size="lg"
            variant="raised"
            name="theme"
            aria-label="change mode theme"
            onClick={onCopy}
          >
            {hasCopied ? <CheckIcon /> : <FileIcon />}
          </IconButton>
        </TooltipTrigger>
        <TooltipContent sideOffset={5}>Copiado</TooltipContent>
      </Tooltip>
    </StyledButtonWrapper>
  );
}

const EditableNotice = (props) => {
  return (
    <Box
      css={{
        position: 'absolute',
        width: '$full',
        top: '-0.5em',
        py: '$2',
        zIndex: '0',
        letterSpacing: '$wide',
        color: '$gray11',
        fontSize: '$xs',
        fontWeight: '$semibold',
        textTransform: 'uppercase',
        pointerEvents: 'none',
      }}
      {...props}
    >
      Ejemplo editable
    </Box>
  );
};

function Codeblock({ editable, language = 'jsx', children, ...rest }) {
  const { theme } = useThemeLiveReact();

  const rawCode = children.trim();

  const [editorCode, setEditorCode] = useState(rawCode?.trim());
  const onChange = (newCode) => setEditorCode(newCode?.trim());

  const liveProviderProps = {
    code: editorCode,
    scope,
    theme,
    mountStylesheet: true,
    language,
    ...rest,
  };

  return (
    <LiveProvider {...liveProviderProps}>
      <LivePreview className={livePreviewStyles()} />

      <StyledLiveEditorWrapper>
        <LiveEditor
          onChange={onChange}
          style={{
            ...liveEditorStyle,
          }}
        />
        <CopyButton code={editorCode} />
        <EditableNotice />
      </StyledLiveEditorWrapper>
      <LiveError style={liveErrorStyle} />
    </LiveProvider>
  );
}

export default Codeblock;
