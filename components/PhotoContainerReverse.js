import styled from "styled-components";

const Container = styled.div`
  max-width: 120rem;
  max-height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: repeat(2, 1fr);
  gap: 1em;

  div:nth-of-type(1) {
    grid-area: 1 / 1 / 2 / 2;
  }
  div:nth-of-type(2) {
    grid-area: 2 / 1 / 3 / 2;
  }
  div:nth-of-type(3) {
    grid-area: 1 / 2 / 3 / 3;
  }
`;

function PhotoContainer({ children }) {
  return <Container>{children}</Container>;
}

export default PhotoContainer;
