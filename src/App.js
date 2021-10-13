import "./App.css";
import Header from "./components/header/Header";
import Carousel from "./components/carousel/Carousel";
import Features from "./components/features/Features";
import InfoGen from "./components/info-general/InfoGen";
import Contact from "./components/contact/Contact";
import Services from "./components/Services/Services";

function App() {
  return (
    <div>
      <Header />
      <Carousel />
      <Features />
      <InfoGen />
      <Contact />
      <Services />
    </div>
  );
}

export default App;
