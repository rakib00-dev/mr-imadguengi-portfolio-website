import Button from './Button';

const Header = () => {
  return (
    <div className=" hero bg-base-200 min-h-screen ">
      <div></div>
      <div className=" paddings innerWidth flexCenter hero-content flex-col lg:flex-col-reverse xl:flex-row-reverse justify-around gap-22">
        {/* blur effect */}
        <div
          className=" h-80 w-80 blur-[220px] z-[-1] absolute"
          style={{ background: 'var(--logo-gradient)' }}
        ></div>

        {/* hero image */}
        <div className="relative max-w-[30rem]  h-[20rem]">
          <div className="relative rounded-lg  max-w-[30rem] border-solid border-[#ac17626d] border  h-[20rem] shadow-2xl ">
            <img
              src="./assets/images/hero/hero2.jpg"
              className="rounded-lg shadow-2xl  bg-center w-full h-full"
            />
          </div>
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
