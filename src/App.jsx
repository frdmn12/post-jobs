import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Info from "./components/Info";
import Resume from "./components/Resume";

const App = () => {
  return (
    <main className="bg-black">
      <Header />
      <Hero />
      <About />
      <Highlights />
      <Info />
      <Resume />
    </main>
  );
};

export default App;
