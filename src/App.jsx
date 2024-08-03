import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";

const App = () => {
  return (
    <main className="bg-black">
      <Header />
      <Hero />
      <About />
      <Highlights />
    </main>
  );
};

export default App;
