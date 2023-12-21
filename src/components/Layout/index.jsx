import AboutFor from "../AboutForCategories";
import CheapProduct from "../CheapProducts";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />

      {children}
      <CheapProduct />
      <br />
      <AboutFor />

      <Footer />
    </>
  );
}
