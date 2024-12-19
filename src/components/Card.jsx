import { div } from 'motion/react-client';

const Card = ({ title = 'Card title', price = 30, crown, children }) => {
  return (
    <div className="card bg-base-100 w-[24rem] h-[30rem]  shadow-xl text-white relative flex justify-center items-center">
      {/* h-[25rem] */}
      <div
        className=" h-60 w-60 blur-[220px] absolute"
        style={{ background: 'var(--logo-gradient)' }}
      ></div>

      {/* card body */}
      <div className=" relative card-body text-center gap-12 w-[23rem]">
        <h2 className="card-title flex justify-center items-center text-5xl  font-bold text-transparent bg-[linear-gradient(41deg,_rgb(168_43_55)_0%,_rgb(255_208_190)_100%)] bg-clip-text relative mb-12 mt-4 w-full">
          {title}
          <span>{crown}</span>{' '}
          <img
            src="./assets/images/services/curve.png"
            alt="curve"
            className="absolute bottom-[-2.5rem] h-[3.8rem] "
            style={{
              filter:
                'invert(91%) sepia(77%) saturate(4921%) hue-rotate(292deg) brightness(77%) contrast(66%)',
              transform: 'rotate(-8deg)',
            }}
          />
        </h2>
        <ul className="flex justify-center flex-col items-start leading-[2.5rem] text-[1rem]">
          {children}
        </ul>
      </div>
    </div>
  );
};

export default Card;
