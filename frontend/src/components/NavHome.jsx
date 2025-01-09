import { useNavigate } from "react-router-dom";
import { logo, user } from "../assets";

const NavHome = () => {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-16 bg-bg/80 flex justify-between items-center px-10 rounded-lg shadow-sm shadow-white ">
        <div 
        className="flex items-center gap-4 justify-center cursor-pointer"
        onClick={() => navigate("/")}
        >
          <img src={logo} alt="logo" className="w-12" />
          <h1 className=" font-black text-3xl font-serif text-primarygreen">
            MOKSHYA
          </h1>
        </div>
      <div className="flex items-center gap-4">
        <button className="outline text-white hover:text-primarygreen px-4 py-2 rounded-lg">
          Get Coins
        </button>
        <img src={user} className="w-12" />
      </div>
    </div>
  );
};

export default NavHome;
