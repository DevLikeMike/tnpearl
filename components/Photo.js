import styled from "styled-components";

const Container = styled.div`
  width: 25rem;
  height: 20rem;
  border: 1px solid black;
  overflow: hidden;

  &:hover img {
    transform: scale(1.2);
  }
`;

const StyledImage = styled.img`
  width: 25rem;
  height: 20rem;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

function Photo({ src }) {
  return (
    <Container>
      <StyledImage src={src} />
    </Container>
  );
}

export default Photo;
