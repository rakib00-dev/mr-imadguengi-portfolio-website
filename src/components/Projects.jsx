import Button from './Button';

const Project = () => {
  return (
    <section
      id="projects"
      className="paddings innerWidth gird items-center relative w-4/5 overflow-hidden bg-[#1c1c1c] border-[#2c2c2c] border-b-4 rounded-2xl"
    >
      <h1 className="text-3xl flex gap-3 w-full font-extrabold text-white justify-end sm:text-4xl md:text-6xl">
        Reallife{'   '}
        <span>
          <Button
            text={'Projects'}
            px="6"
            py="6"
            className={'font-extrabold text-2xl md:text-5xl'}
          />
        </span>
      </h1>
      <p className=" flex gap-3 w-full mt-6 justify-end text-[#8c8b8b] sm:text-md md:text-xl md:mt-10">
        Please, get in touch If you want more work samples
      </p>
      {/* projects */}

      <div className="paddings innerWidth w-4/5 flex justify-center items-center gap-12  mt-12">
        {/* video container */}
        <div className="flex w-4/5 justify-center items-center flex-col-reverse m-auto gap-6 md:flex-row ">
          {/* first video */}
          <video
            controls
            className="rounded-xl h-[24rem] w-full lg:w-1/2 md:w-2/3 "
            autoPlay
            muted
            loop
          >
            <source
              src="./assets/videos/Flow-Style-YouTube-Edit.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {/* second video */}
          <video
            controls
            className="rounded-xl h-96 w-full lg:w-1/2 md:w-2/3 "
            autoPlay
            muted
            loop
          >
            <source
              src="./assets/videos/Animated-Health-Shorts.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Project;
