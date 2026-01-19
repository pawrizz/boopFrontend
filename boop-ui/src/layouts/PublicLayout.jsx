import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export default function PublicLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
