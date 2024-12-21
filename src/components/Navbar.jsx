import Button from './Button';
import { motion } from 'motion/react';
import { useState } from 'react';
import { BiMenuAltRight } from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler';
import Toggle from './Toggle';

const Navbar = ({ className, children, toggle }) => {
  const [menuOpened, setmenuOpened] = useState(false);

  const getMenuStyle = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      console.log(!menuOpened);

      return { top: !menuOpened && '-600%' };
    }
  };

  return (
    <motion.section
      id="nav"
      data-theme="retro"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: 0.8,
        type: 'spring',
      }}
      className={`nav-wrapper  ${className} `}
      // style={{ : '' }}
    >
      {/* nav-container */}
      <div
        className="navbar h-fit p-3 flexCenter innerWidth nav-container gap-0 md:gap-22 lg:gap-44 "
        style={{
          backgroundColor: 'var(--black) !importent',
          justifyContent: 'space-around',
          flexWrap: 'nowrap',
        }}
      >
        {/* logo */}
        <div
          style={{ background: 'var(--logo-gradient)' }}
          className="fill-white p-1 rounded-xl h-[3rem] w-[3rem]"
        >
          <img
            loading="lazy"
            src="./assets/images/navbar/logo1.png"
            alt="logo"
            height={40}
            className="filter invert saturate-200 brightness-[110%] contrast-[101%]"
          />
        </div>
        <OutsideClickHandler
          onOutsideClick={() => {
            setmenuOpened(false);
          }}
        >
          <ul
            className="menu menu-horizontal px-4 flexCenter nav-menu gap-1 h-menu lg:gap-3 "
            style={getMenuStyle(menuOpened)}
          >
            {/* <div className="flexCenter nav-menu gap-3 "> */}
            <li>
              <a
                href="#"
                className="transition-all font-bold lg:text-base xl:text-xl  "
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="  transition-all font-bold lg:text-base xl:text-xl  "
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="  transition-all font-bold lg:text-base xl:text-xl  "
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="  transition-all font-bold lg:text-base xl:text-xl  "
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="  transition-all font-bold lg:text-base xl:text-xl  "
              >
                Contact us
              </a>
            </li>
            {/* </div> */}
            <Button
              text={'Book A Call'}
              fontSize={'xl'}
              className={
                'scale-95 hover:scale-100 cursor-pointer px-4 py-2 text-xs md:text-md lg:text-lg'
              }
            />
            {toggle}
          </ul>
          {/* <a href="#"> */}
          {/* </a> */}
        </OutsideClickHandler>
        {/* menu icon */}
        <div
          className="menu-icon cursor-pointer"
          onClick={() => {
            setmenuOpened((preState) => !preState);
          }}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
      {children}
    </motion.section>
  );
};

export default Navbar;
