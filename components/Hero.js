import styled from "styled-components";
import StyledContainer from "./StyledContainer";
import Image from "next/image";

const HeroSection = styled.section`
  padding: 1rem ${(props) => props.theme.standardPadding};
  background-color: #fff;
  color: #333;
  position: relative;
  min-height: 400px;
  width: 100%;
  overflow: hidden;

  @media (max-width: 500px) {
    padding: 1rem ${(props) => props.theme.mobilePadding};
  }

  .hero--content {
    max-width: 66rem;
    margin: 0 auto;

    i {
      object-fit: ;
    }

    h1 {
      font-size: 6rem;
      line-height: 0.75;
      margin-bottom: 1.25rem;
    }

    p {
      max-width: 40rem;
    }

    @media (max-width: 900px) {
      max-width: 25rem;
    }

    @media (max-width: 768px) {
      max-width: 20rem;
    }
  }
`;

export default function Hero() {
  return (
    <HeroSection>
      <div className='hero--content flex flex-center col'>
        <Image src={"/logo.png"} width='400' height='400' />
      </div>
    </HeroSection>
  );
}
