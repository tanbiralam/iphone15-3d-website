import { Hero, Model, Footer, Navbar, Process, Features, Highlights} from './components';

function App() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <Process />
      <Footer />
    </main>
  );
}

export default App;
