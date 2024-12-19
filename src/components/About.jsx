import Button from './Button';

const About = () => {
  return (
    <section
      id="services"
      className="paddings innerWidth gird items-center relative "
    >
      {/* head */}
      <h1 className="text-6xl inline font-extrabold text-white">
        Our{' '}
        <Button
          text={'Video Ediing'}
          px="6"
          py="6"
          className={'font-extrabold text-5xl'}
        />{' '}
        services
      </h1>
      {/* cards */}
      <div className="paddings innerWidth w-4/5 flex justify-center items-center gap-12  mt-12"></div>
    </section>
  );
};

export default About;
