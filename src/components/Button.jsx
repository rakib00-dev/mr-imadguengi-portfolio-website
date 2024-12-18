const Button = ({ px = '20', py = '10', fontSize, text, className }) => {
  return (
    <div
      className={` w-fit rounded-xl font-bold text-${fontSize} text-white transition-all ${className}`}
      style={{
        background: 'var(--primary-gradient)',
        padding: `${py}px ${px}px`,
      }}
    >
      {text}
    </div>
  );
};

export default Button;
