import Button from './Button';

const Project = () => {
  return (
    <section className="paddings innerWidth gird items-center relative ">
      {/* head */}
      <img
        src="./assets/images/services/arrow.png"
        alt=""
        className="absolute right-0 top-[-11rem] w-[20rem] "
      />
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
      {/* projects */}
      <div className="paddings innerWidth w-4/5 flex justify-center items-center gap-12  mt-12"></div>
    </section>
  );
};

export default Project;
