import { Header } from "./Home/Header";
import { Hero } from "./Home/Hero";
import { Services } from "./Home/Services";

import ThemeProvider from "react-bootstrap/ThemeProvider";

import "./scss/styles.scss";
import { Footer } from "./Home/Footer";

function App() {
  return (
    <ThemeProvider dir="rtl">
      <Header />;
      <Hero />;
      <Services />;
      <Footer />
    </ThemeProvider>
  );
}

export default App;
