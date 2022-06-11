import { styled } from '@/stitches';

const Button = styled('button', {
  backgroundColor: '$blue4',
  borderRadius: '9999px',
  color: '$blue11',
  borderColor: '$blue7',
  '&:hover': {
    backgroundColor: '$blue5',
    borderColor: '$blue8',
  },
});

export default Button;
