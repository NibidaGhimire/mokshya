import { HiMiniFire } from "react-icons/hi2";
import { javascript, nodejs, typescript } from "../assets";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4 px-4 mr-12">
      <div className="flex flex-row  gap-4 justify-between ">
        <div className="w-full bg-bg/70 px-4 py-4 outline flex-[0.3] flex flex-col items-center justify-center">
          <h1 className="font-bold text-xl">Streak</h1>
          <HiMiniFire size={96} color="#77f0a4" />
          <h1 className="font-black text-4xl">1</h1>
        </div>
        <div className="bg-bg/70  px-4 py-4 outline flex-[0.7]">
          <h1 className="text-lg font-bold px-6">Recent</h1>
          <div className="flex items-center gap-4">
            <img src={javascript} className="object contain" />
            <div className="flex flex-col gap-4">
              <h2 className="text-primarygreen font-bold">
                JavaScript Level 1
              </h2>
              <button 
              onClick={()=>navigate(`/play/javascript/level1`)}
              className="px-8 py-4 bg-primarygreen/50 hover:bg-primarygreen rounded-lg text-bg">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-bg/70 px-4 py-4 outline">
        <h1 className="text-lg font-bold">Recommendations</h1>
        <div className="flex flex-row gap-4">
          <div className="flex gap-4 items-center pr-4 border-r-2">
            <img src={typescript} className="object contain" />
            <div className="flex flex-col gap-4">
              <h2 className="text-primarygreen font-bold">
                TypeScript Level 2
              </h2>
              <button className="px-8 py-4 bg-primarygreen/50 hover:bg-primarygreen rounded-lg text-bg">
                Start
              </button>
            </div>
          </div>
          <div className="flex gap-4 items-center  pr-4 border-r-2">
            <img src={nodejs} className="object contain" />
            <div className="flex flex-col gap-4">
              <h2 className="text-primarygreen font-bold">NodeJS Level 1</h2>
              <button className="px-8 py-4 bg-primarygreen/50 hover:bg-primarygreen rounded-lg text-bg">
                Start
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-bg/70 px-4 py-4 outline">
        <h1 className="text-lg font-bold">LeaderBoard</h1>
      </div>
    </div>
  );
};

export default Hero;
