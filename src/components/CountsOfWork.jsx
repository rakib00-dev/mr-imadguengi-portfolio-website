import CountUp from 'react-countup';

const CountsOfWork = () => {
  return (
    <section className="mb-14">
      <div className="paddings innerWidth flexCenter w-4/5 gap-8 text-lg flex-wrap md:gap-16">
        <div className="flex py-10 flex-col justify-center items-center">
          <div>
            <CountUp
              start={400}
              end={750}
              duration={10}
              className="text-xl font-bold text-white md:text-6xl"
            />
            <span className="text-xl font-extrabold text-[#ecb29b] md:text-6xl">
              +
            </span>
          </div>
          Projects Done
        </div>
        <div className="flex flex-col justify-center items-center">
          <div>
            <CountUp
              start={49}
              end={89}
              duration={20}
              className="text-xl font-bold text-white md:text-6xl"
            />
            <span className="text-xl font-extrabold text-[#ecb29b]  md:text-6xl">
              +
            </span>
          </div>
          Clients
        </div>
        <div className="flex flex-col justify-center items-center">
          <div>
            <CountUp
              start={0}
              end={28}
              duration={14}
              className="text-xl font-bold text-white md:text-6xl"
            />
            <span className="text-xl font-extrabold text-[#ecb29b] md:text-6xl">
              +
            </span>
          </div>
          Repeat Clients
        </div>
        <div className="flex flex-col justify-center items-center">
          <div>
            <CountUp
              start={0}
              end={7}
              duration={20}
              className="text-xl font-bold text-white md:text-6xl "
            />
            <span className="text-xl font-extrabold text-[#ecb29b] md:text-6xl">
              {' '}
              y +
            </span>
          </div>
          Experience
        </div>
      </div>
    </section>
  );
};

export default CountsOfWork;
