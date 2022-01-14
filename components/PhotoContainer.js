import styled from "styled-components";

const Container = styled.div`
  padding: 1rem 0;
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 3rem;
`;

function PhotoContainer({ children }) {
  return <Container>{children}</Container>;
}

export default PhotoContainer;
