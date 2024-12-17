import Button from './Button';

const Navbar = () => {
  return (
    <section
      className="nav-wrapper"
      style={{ backgroundColor: 'var(--black)' }}
    >
      {/* nav-container */}
      <div
        className="navbar bg-base-100 h-fit paddings flexCenter innerWidth nav-container "
        style={{ backgroundColor: 'var(--black) !importent' }}
      >
        {/* logo */}
        <div className="flex-1">
          <div
            style={{ background: 'var(--logo-gradient)' }}
            className="fill-white p-1 rounded-xl "
          >
            <img
              src="./assets/images/logo1.png"
              alt="logo"
              width={40}
              className="filter invert saturate-200 brightness-[110%] contrast-[101%]"
            />
          </div>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <div>
              <div className="flexCenter nav-menu gap-3 ">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Project</a>
                <a href="#">Contact us</a>
              </div>
            </div>
          </ul>
        </div>
        <Button text={'Book A Call'} px={6} fontSize={'xl'} />
      </div>
    </section>
  );
};

export default Navbar;
