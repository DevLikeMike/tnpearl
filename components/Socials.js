import styled from "styled-components";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import Link from "next/link";

const SocialContainer = styled.div`
  position: fixed;
  top: 30vh;
  right: -1rem;
  height: 6rem;
  width: 3.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  border-radius: 5px;
  padding: 0.25rem 1rem 0 0;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.white};

  i {
    color: white;
    width: 3rem;
    height: 3rem;
  }
`;

export default function Socials() {
  return (
    <SocialContainer>
      <Link href={"https://instagram.com/devlikemike"}>
        <FaInstagram size='1.5rem' />
      </Link>
      <Link href={"https://facebook.com/devlikemike"}>
        <FaFacebook size='1.5rem' />
      </Link>
    </SocialContainer>
  );
}
