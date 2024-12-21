import { useEffect, useState } from 'react';
import Companies from './components/Companies';
import CountsOfWork from './components/CountsOfWork';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Services from './components/Services';
import { motion, useScroll } from 'motion/react';
import About from './components/About';
import Footer from './components/Footer';
import Toggle from './components/Toggle';

function App() {
  // console.log(htmlTag.dataset.theme);

  const [isChecked, setIsChecked] = useState(true);
  const isClickedFun = (e) => {
    setIsChecked(e.target.checked);
    // console.log(e.target.checked);
    // console.log(isChecked);
  };

  useEffect(() => {
    // theme
    const htmlTag = document.getElementById('html');
    const navTag = document.getElementById('nav');
    let allElements = document.querySelectorAll('*');
    const companies = document.querySelectorAll('.company-filter');
    const cardTitle = document.querySelectorAll('.card-title');

    console.log(companies);

    if (isChecked) {
      htmlTag.dataset.theme = 'retro';
      navTag.dataset.theme = 'retro';
      allElements.forEach((e) => {
        e.style.color = 'black';
      });
      companies.forEach((e) => {
        e.style.filter = 'invert(1)';
      });
      // cardTitle.forEach((e) => {
      //   e.classList.remove =
      //     'text-transparent bg-[linear-gradient(41deg,_rgb(168_43_55)_0%,_rgb(255_208_190)_100%)] bg-clip-text';
      //   e.classList.remove = 'text-transparent bg-[#000] bg-clip-text';
      // });
      console.log('retro');
    } else {
      htmlTag.dataset.theme = 'dark';
      navTag.dataset.theme = 'dark';
      allElements.forEach((e) => {
        e.style.color = 'white';
      });
      companies.forEach((e) => {
        e.style.filter = 'invert(0)';
      });
      // cardTitle.forEach((e) => {
      //   e.classList.add =
      //     'text-transparent bg-[linear-gradient(41deg,_rgb(168_43_55)_0%,_rgb(255_208_190)_100%)] bg-clip-text';
      // });
      console.log('dark');
    }
  }, [isChecked]);

  // onScroll line
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
        toggle={<Toggle checkCheckBox={isClickedFun} />}
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
      <Projects />
      <Services />
      <About />
      <Footer />
    </>
  );
}

export default App;
