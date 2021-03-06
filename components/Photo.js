import styled from "styled-components";

const Container = styled.div`
  border: 1px solid #111;
  border-radius: 5px;
  overflow: hidden;
  height: auto;
  max-height: 60rem;

  &:hover img {
    transform: scale(1.2);
    cursor: pointer;
  }
`;

const StyledImage = styled.img`
  object-fit: cover;
  transition: transform 0.5s ease;
  width: 100%;
  max-width: 100%;
  height: 100%;
`;

function Photo({ src, styleSize }) {
  return (
    <Container>
      <StyledImage src={src} className={styleSize} />
    </Container>
  );
}

export default Photo;
