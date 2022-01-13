import styled from "styled-components";

const Container = styled.div`
  padding: 1rem 3rem 0;
  max-width: 120rem;
  margin: 0 auto;

  @media (max-width: 500px) {
    padding: 1rem 1rem 0;
  }
`;

function StyledContainer({ children }) {
  return <Container>{children}</Container>;
}

export default StyledContainer;
