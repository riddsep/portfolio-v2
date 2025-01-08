import styled from "styled-components";
import Navbar from "./Navbar";
import Wrapper from "./Wrapper";

function Hero() {
  return (
    <StyledHero>
      <Navbar />
      <Wrapper>
        <ContentWrapper>
          <Title>Hi, I&apos;m Rido, a Frontend Developer</Title>
          <SubTitle>
            A passionate developer driven by a love for crafting user-friendly
            interfaces and solving complex problems with clean, efficient code.
          </SubTitle>
          <Marquee>
            <SubTitle>Technologies I Use</SubTitle>
            <MarqueeContent>
              {Array(2)
                .fill([
                  "figma.svg",
                  "vite.svg",
                  "git.svg",
                  "github.svg",
                  "js.svg",
                  "react.svg",
                  "redux.svg",
                  "tailwind.svg",
                ])
                .flat()
                .map((src, idx) => (
                  <Image key={idx} src={src} />
                ))}
            </MarqueeContent>
          </Marquee>
        </ContentWrapper>
      </Wrapper>
    </StyledHero>
  );
}

const StyledHero = styled.section`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100dvh;
  background: linear-gradient(to bottom, #000000, #200d42, #4f21a1, #a46edb);
  color: #fff;

  &::after {
    content: url("elipse.svg");
    position: absolute;
    bottom: -10px;
    left: 0;
    right: 0;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  margin-top: 4rem;
  max-width: 800px;
  text-align: center;
  z-index: 1;

  &::before {
    content: url("visual.svg");
    position: absolute;
    left: -100px;
    bottom: 110px;
    animation: bounce-after 4s ease infinite;
  }

  &::after {
    content: url("message.svg");
    position: absolute;
    right: -100px;
    top: -80px;
    animation: bounce-after 4s ease infinite;
  }
  @keyframes bounce-before {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes bounce-after {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(20px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

const Title = styled.h1`
  font-size: 5rem;
  font-weight: bolder;
  line-height: 1.2;
  margin-bottom: 1.5rem;
`;
const SubTitle = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 1.3rem;
  max-width: 600px;
  margin: 0 auto;
`;

const Marquee = styled.div`
  overflow: hidden;
  margin-top: 7rem;

  mask-image: linear-gradient(
    to right,
    transparent,
    black 20%,
    black 80%,
    transparent
  );
  -webkit-mask-image: linear-gradient(
    to right,
    transparent,
    black 20%,
    black 80%,
    transparent
  );
`;

const MarqueeContent = styled.div`
  display: flex;
  gap: 3rem;
  margin-top: 1rem;
  animation: infinite-scroll 20s linear infinite;
  animation-play-state: running;

  &:hover {
    animation-play-state: paused;
  }

  @keyframes infinite-scroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }
`;
const Image = styled.img`
  filter: grayscale(1);

  &:hover {
    filter: grayscale(0);
  }
`;

export default Hero;
