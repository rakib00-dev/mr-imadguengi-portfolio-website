import Button from './Button';
import { motion } from 'motion/react';

const Navbar = () => {
  return (
    <motion.section
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: 0.8,
        type: 'spring',
      }}
      className="nav-wrapper"
      style={{ backgroundColor: 'var(--black)' }}
    >
      {/* nav-container */}
      <div
        className="navbar h-fit p-3 flexCenter innerWidth nav-container gap-44 lg:gap-20 "
        style={{
          backgroundColor: 'var(--black) !importent',
          justifyContent: 'space-around',
        }}
      >
        {/* logo */}
        <div
          style={{ background: 'var(--logo-gradient)' }}
          className="fill-white p-1 rounded-xl "
        >
          <img
            src="./assets/images/navbar/logo1.png"
            alt="logo"
            width={40}
            className="filter invert saturate-200 brightness-[110%] contrast-[101%]"
          />
        </div>
        <div className="flex lg:gap-0 xl:gap-3  ">
          <ul className="menu menu-horizontal px-4 flexCenter nav-menu gap-3">
            {/* <div className="flexCenter nav-menu gap-3 "> */}
            <li>
              <a
                href="#"
                className="  transition-all font-bold lg:text-base xl:text-xl text-white "
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#"
                className="  transition-all font-bold lg:text-base xl:text-xl text-white "
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="  transition-all font-bold lg:text-base xl:text-xl text-white "
              >
                Project
              </a>
            </li>
            <li>
              <a
                href="#"
                className="  transition-all font-bold lg:text-base xl:text-xl text-white "
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="  transition-all font-bold lg:text-base xl:text-xl text-white "
              >
                Contact us
              </a>
            </li>
            {/* </div> */}
          </ul>
          {/* <a href="#"> */}
          <Button
            text={'Book A Call'}
            fontSize={'xl'}
            className={
              'scale-95 hover:scale-100 cursor-pointer lg:text-sm xl:text-xl'
            }
          />
          {/* </a> */}
        </div>
      </div>
    </motion.section>
  );
};

export default Navbar;
