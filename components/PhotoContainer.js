import styled from "styled-components";

const Container = styled.div`
  padding: 1rem 0;
  max-width: 120rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: repeat(2, 1fr);
  gap: 0.5em;

  div:nth-of-type(1) {
    grid-area: 1 / 1 / 3 / 2;
  }
  div:nth-of-type(2) {
    grid-area: 1 / 2 / 2 / 3;
  }
  div:nth-of-type(3) {
    grid-area: 2 / 2 / 3 / 3;
  }
`;

function PhotoContainer({ children }) {
  return <Container>{children}</Container>;
}

export default PhotoContainer;
