import { styled } from '@/stitches';

const StyledSpacer = styled('div', {
  flex: '1 1 0%',
  placeSelf: 'stretch',
});

function Spacer({ ...props }) {
  return <StyledSpacer {...props} />;
}

export default Spacer;
