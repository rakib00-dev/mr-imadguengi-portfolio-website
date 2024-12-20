import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

const TOGGLE_CLASSES =
  'text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10';

const Toggle = () => {
  const [selected, setSelected] = useState('light');
  return (
    <div
      className={` place-content-center px-4 transition-colors ${
        selected === 'light' ? 'retro' : 'bg-slate-900'
      }`}
    >
      <SliderToggle selected={selected} setSelected={setSelected} />
    </div>
  );
};

const SliderToggle = ({ selected, setSelected }) => {
  return (
    <div className="relative flex w-fit items-center rounded-full">
      <input type="checkbox" className="toggle toggle-accent" defaultChecked />
      <motion.span
        layout
        transition={{ type: 'spring', damping: 15, stiffness: 250 }}
        className="h-full w-1/2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600"
      />
    </div>
  );
};

export default Toggle;
