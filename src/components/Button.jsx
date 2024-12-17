const Button = ({ px = '4', py = '[10px]', fontSize, text }) => {
  return (
    <div
      className={`px-${px} py-${py} w-fit rounded-xl font-bold text-${fontSize} text-white`}
      style={{ background: 'var(--primary-gradient)' }}
    >
      {text}
    </div>
  );
};

export default Button;
