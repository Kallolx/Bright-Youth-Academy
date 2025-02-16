import Navbar from "./components/Landing/Navbar";
import Hero from "./components/Landing/Hero";
import { Features } from "./components/Landing/Features";
import { Courses } from "./components/Landing/Courses";
import Testimonials from "./components/Landing/Testimonials";
import Contact from "./components/Landing/Contact";
import Footer from "./components/Landing/Footer";

function App() {
  return (
    <main className="relative min-h-screen bg-[#0D0C13] overflow-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Courses />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;