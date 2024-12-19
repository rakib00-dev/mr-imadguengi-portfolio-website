import Button from './Button';
import { motion } from 'motion/react';

const Header = () => {
  return (
    <div className="hero bg-base-200 min-h-screen relative">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 1,
          type: 'spring',
        }}
        className="absolute text-white top-14 border border-y-2 rounded-3xl p-2"
        style={{ borderColor: 'var(--border)' }}
      >
        Cinematic Editing Services, Creative Video Production, & More
      </motion.div>

      <div className=" paddings innerWidth flexCenter hero-content flex-col lg:flex-col-reverse xl:flex-row-reverse justify-around gap-22">
        {/* blur effect */}
        <div
          className=" h-80 w-80 blur-[220px] z-[-1] absolute"
          style={{ background: 'var(--logo-gradient)' }}
        ></div>

        {/* hero image */}
        <div className="relative max-w-[30rem]  h-[20rem]">
          <motion.div
            initial={{ scale: 0.8, x: 150, opacity: 0 }}
            animate={{ scale: 1, x: 0, opacity: 1 }}
            transition={{
              delay: 1,
              type: 'spring',
            }}
            className="relative rounded-lg  max-w-[30rem] border-solid border-[#ac17626d] border  h-[20rem] shadow-2xl "
          >
            <motion.img
              initial={{ scale: 0.8, x: 100, opacity: 0 }}
              animate={{ scale: 1, x: 0, opacity: 1 }}
              transition={{
                delay: 1,
                type: 'spring',
              }}
              src="./assets/images/hero/hero2.jpg"
              className="rounded-lg shadow-2xl  bg-center w-full h-full"
            />
          </motion.div>
        </div>

        {/* hero content */}
        <div className="xl:w-2/4 lg:w-4/5">
          <h1 className="text-5xl font-bold text-white leading-tight">
            Cutting-Edge Creations: Where Your Vision Comes to Life
          </h1>
          <p className="py-6">
            "Cutting-Edge Creations: Where Your Vision Comes to Life" is a video
            editing agency dedicated to transforming raw footage into stunning
            visual experiences. Using the latest tools and techniques, we bring
            your ideas to life with creativity and precision, crafting
            captivating content for marketing, social media, and cinematic
            projects.
          </p>
          <a href="#" className="flex  justify-start w-full">
            <Button
              text={'Book Your Call Now!'}
              fontSize={'xl 2xl'}
              className={'scale-105 hover:scale-125'}
            ></Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
