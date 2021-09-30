import { styled } from '@/stitches';

const Container = styled('div', {
  width: '100%',
  maxWidth: 1244,
  position: 'relative',
  margin: '0 auto',
  padding: 12,
});

const Title = styled('h1', {
  color: '$gray12',
});

const SubTitle = styled('h2', {
  color: '$gray12',
});

const Text = styled('p', {
  color: '$gray12',
});

function HomePage() {
  return (
    <Container>
      <Title>Hi there, I'm Jorge.</Title>
      <SubTitle>Doing this 'n' that</SubTitle>
      <Text>
        I am a developer JavaScript who loves to design!, i live in Mexico 🇲🇽. I am a co-author of React Next
        Boilerplate and a builder of things. open source enthusiast. I am a passionate photographer.
      </Text>
    </Container>
  );
}

export default HomePage;
