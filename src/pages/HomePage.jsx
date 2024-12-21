import Companies from '../components/Companies';
import CountsOfWork from '../components/CountsOfWork';
import Header from '../components/Header';
import Projects from '../components/Projects';
import Services from '../components/Services';
import About from '../components/About';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <Header />
      <Companies />
      <CountsOfWork />
      <Projects />
      <Services />
      <About />
      <Footer />
    </>
  );
};

export default HomePage;
