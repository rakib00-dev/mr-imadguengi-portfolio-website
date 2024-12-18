import Button from './components/Button';
import Companies from './components/Companies';
import CountsOfWork from './components/CountsOfWork';
import Header from './components/Header';
import Navbar from './components/Navbar';
// import { motion, useScroll } from 'motion/react';

function App() {
  // const { scrollYProgress } = useScroll();

  return (
    <>
      {/* <motion.div style={{ scaleX: scrollYProgress }} /> */}
      <Navbar />
      <Header />
      <Companies />
      <CountsOfWork />
    </>
  );
}

export default App;
