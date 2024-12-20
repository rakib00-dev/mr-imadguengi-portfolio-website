import { useState } from 'react';
import Companies from './components/Companies';
import CountsOfWork from './components/CountsOfWork';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Services from './components/Services';
import { motion, useScroll } from 'motion/react';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  const { scrollYProgress } = useScroll();

  const [active, setActive] = useState(false);

  window.addEventListener('scroll', () => {
    const winYscroll = window.scrollY;
    if (winYscroll >= 92) {
      setActive(true);
    } else {
      return setActive(false);
    }
  });

  return (
    <>
      <Navbar
        className={
          active ? 'sticky top-0 z-10 border-b-2 border-[#3636367b]' : ''
        }
      >
        <motion.div
          style={{
            scaleX: scrollYProgress,
            height: '2px',
            width: '100%',
            position: 'absolute',
            left: '0',
            background: 'red',
          }}
        />
      </Navbar>
      <Header />
      <Companies />
      <CountsOfWork />
      <Services />
      <Projects />
      <About />
      <Footer />
    </>
  );
}

export default App;
