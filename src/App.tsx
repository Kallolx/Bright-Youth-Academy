import Navbar from "./components/Landing/Navbar";
import Hero from "./components/Landing/Hero";
import { Features } from "./components/Landing/Features";
import { Courses } from "./components/Landing/Courses";
// import Testimonials from "./components/Landing/Testimonials";
import Contact from "./components/Landing/Contact";
import Footer from "./components/Landing/Footer";
import { Background } from "./components/ui/backgrounGrid";
import { motion } from "framer-motion";

function App() {
  return (
    <main className="font-geist relative min-h-screen bg-[#0D0C13] overflow-hidden">
      <Navbar />   
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute inset-0 h-screen overflow-hidden"
      >
        <Background />
      </motion.div>   
      <Hero />
      <Features />
      <Courses />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </main>
  );
}

export default App;