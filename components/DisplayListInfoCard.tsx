import { CheckCircle } from 'react-feather';

import { styled, VariantProps } from '@/stitches';

import Box from '@/design-system/Box';
import Stack from '@/design-system/Stack';
import Flex from '@/design-system/Flex';
import Text from '@/design-system/Text';

const StyledRoot = styled(Box, {
  p: '$3',
  width: '100%',
  borderRadius: '$md',

  variants: {
    color: {
      success: {
        backgroundColor: '$mint3',
        boxShadow: '0 0 0 1.5px $colors$green9',
      },
      error: {
        backgroundColor: '$red3',
        boxShadow: '0 0 0 1.5px $colors$red7',
      },
      info: {
        backgroundColor: '$blue3',
        boxShadow: '0 0 0 1.5px $colors$blue7',
      },
      warning: {
        backgroundColor: '$yellow3',
        boxShadow: '0 0 0 1.5px $colors$yellow7',
      },
    },
  },

  defaultVariants: {
    color: 'success',
  },
});

const StyledItem = styled(Flex, {
  variants: {
    color: {
      success: {
        color: '$mint11',
      },

      error: {
        color: '$red11',
      },

      info: {
        color: '$blue11',
      },
      warning: {
        color: '$yellow11',
      },
    },
  },

  defaultVariants: {
    color: 'success',
  },
});

export type StyledDisplayListInfoCardVariants = VariantProps<typeof StyledRoot>;

type DisplayListInfoCardProps = {
  title?: string;
  items?: [];
  color: string;
} & StyledDisplayListInfoCardVariants;

export default function DisplayListInfoCard({ title, items = [], color = 'success' }: DisplayListInfoCardProps) {
  return (
    <StyledRoot color={color}>
      <Text>{title}</Text>

      <Box css={{ mt: '$2' }}>
        <Stack flexDirection="column" spacing={2}>
          {items?.map((item) => (
            <StyledItem key={item} color={color} gap={2}>
              <Box>
                <CheckCircle size={18} />
              </Box>
              <Text css={{ fontWeight: '$medium' }}>{item}</Text>
            </StyledItem>
          ))}
        </Stack>
      </Box>
    </StyledRoot>
  );
}
