import styled from "styled-components";
import Navbar from "./Navbar";
import Wrapper from "./Wrapper";

function Hero() {
  return (
    <StyledHero>
      <Navbar />
      <Wrapper>
        <ContentWrapper>
          <div>
            <Title>Hi I&apos;m Rido, I&apos;m a Frontend Developer</Title>
          </div>
        </ContentWrapper>
      </Wrapper>
    </StyledHero>
  );
}

const StyledHero = styled.section`
  width: 100%;
  height: 100dvh;
  background: linear-gradient(to top right, #183ec2, #eaeefe);
`;

const ContentWrapper = styled(Wrapper)``;

const Title = styled.h1`
  font-size: 4rem;
  max-width: 600px;
`;

export default Hero;
