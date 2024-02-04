import { useState } from 'react';
import cat from '/cat_pistol.jpg';
import { NavLink } from 'react-router-dom';

export const No = () => {
  const [x, setX] = useState(100);
  const [y, setY] = useState(100);
  const [opacity, setOpacity] = useState(1);

  const handleChange = () => {
    const l = Math.random();
    const newx = l > 0.5 ? Math.random() * 120 * -1 : Math.random() * 120;
    const newy = l > 0.5 ? Math.random() * 120 * -1 : Math.random() * 120;
    setX(newx);
    setY(newy);
    setOpacity(opacity - 0.05);
  };

  return (
    <div className="mx-auto px-1 container max-w-[1000px] py-5 text-pink-800 text-center font-poor-story">
      <div className="flex flex-col items-center gap-4">
        <img src={cat} alt="" className="w-[320px] h-[320px]" />
        <h1 className="text-[100px] y font-semibold">This button just for visibility!</h1>
        <div className="flex gap-10">
          <button
            onMouseEnter={handleChange}
            onClick={handleChange}
            style={{ transform: `translate(${x}px, ${y}px)`, opacity }}
            className="bg-white hover:bg-pink-800 !text-pink-800  hover:!text-white transition-all border-2 w-[80px]  border-pink-800  hover:border-pink-800 text-[24px] leading-none text-center focus:outline-none"
          >
            No
          </button>
          <button className="bg-white hover:bg-pink-800 !text-pink-800  hover:!text-white transition-all border-2 w-[80px]  border-pink-800  hover:border-pink-800 text-[24px] leading-none text-center focus:outline-none">
            <NavLink to={'/yes'} className="">
              Yes
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};
