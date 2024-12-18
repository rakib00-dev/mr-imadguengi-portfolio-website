import Button from './Button';
import Card from './Card';

const Services = () => {
  return (
    <section className="paddings innerWidth gird items-center relative  ">
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
      {/* cards */}
      <div className="paddings innerWidth w-4/5 flex justify-center items-center gap-12  mt-12">
        {/* card1 */}
        <Card title="Basic">
          <li>{'>'} Cutting and trimming clips</li>
          <li>{'>'} Arranging video footage in a timeline</li>
          <li>{'>'} Adding transitions between clips</li>
          <li>{'>'} Basic color correction</li>
          <li>{'>'} Audio enhancements</li>
        </Card>

        {/* card2 */}
        <Card title="Standard" price={70}>
          <li>
            {'>'} <span className="text-[#ecb29b] font-bold">Basic</span>{' '}
          </li>
          <li>{'>'} Cutting and trimming clips</li>
          <li>{'>'} Arranging video footage in a timeline</li>
          <li>{'>'} Adding transitions between clips</li>
          <li>
            {'>'} Basic color correction{'  '}
            <span className="text-[#ecb29b]">...& More</span>{' '}
          </li>
        </Card>

        {/* card3 */}
        <Card title="Premium" crown={'👑'} price={200}>
          <li>
            {'>'}{' '}
            <span className="text-[#ecb29b] font-bold">Basic + Standerd</span>{' '}
          </li>
          <li>{'>'} Special effects and animations</li>
          <li>{'>'} Advanced color grading</li>
          <li>{'>'} Custom transitions and effects</li>
          <li>
            {'>'} (VFX) <span className="text-[#ecb29b]">...& Much More</span>{' '}
          </li>
        </Card>
      </div>
    </section>
  );
};

export default Services;
