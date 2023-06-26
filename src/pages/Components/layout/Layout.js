import { Footer } from "../Footer";
import { Header } from "../Header";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <section className="main">{children}</section>
      <Footer />
    </>
  );
};
