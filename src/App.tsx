import { NavLink } from 'react-router-dom';
import './App.css';
import cat from '/cat.jpg';
function App() {
  return (
    <div className="mx-auto px-1 container max-w-[1000px] py-5 text-pink-800 text-center font-poor-story">
      <div className="flex flex-col items-center gap-4">
        <img src={cat} alt="" className="w-[320px]" />
        <h1 className="text-[70px] lg:text-[100px] font-semibold">Hey princess!</h1>
        <h1 className="text-[70px] lg:text-[100px]  font-semibold">Wanna be my Valentine?</h1>
        <div className="flex gap-10">
          <NavLink to={'/no'} className="">
            <button className="bg-white hover:bg-pink-800 !text-pink-800  hover:!text-white transition-all border-2 w-[80px]  border-pink-800  hover:border-pink-800 text-[24px] leading-none text-center focus:outline-none">
              No
            </button>
          </NavLink>
          <NavLink to={'/yes'} className="">
            <button className="bg-white hover:bg-pink-800 !text-pink-800  hover:!text-white transition-all border-2 w-[80px]  border-pink-800  hover:border-pink-800 text-[24px] leading-none text-center focus:outline-none">
              Yes
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default App;
