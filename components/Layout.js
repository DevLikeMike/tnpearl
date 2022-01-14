import Header from "./navigation/Header";
import Socials from "./Socials";

function Layout({ children }) {
  return (
    <>
      <Header />
      <Socials />
      {children}
    </>
  );
}

export default Layout;
