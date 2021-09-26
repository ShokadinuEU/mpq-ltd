import "./App.css";
import Header from "./components/header/Header";
import Carousel from "./components/carousel/Carousel";
import Features from "./components/features/Features";
import InfoGen from "./components/info-general/InfoGen";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div>
      <Header />
      <Carousel />
      <Features />
      <InfoGen />
      <Contact />
    </div>
  );
}

export default App;
