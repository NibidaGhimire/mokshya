import Dashboard from "../components/Dashboard";
import Hero from "../components/Hero";
import { bgvector } from "../assets";
import NavHome from "../components/NavHome";

const Home = () => {
  return (
    <div className="flex flex-col gap-2 w-screen">
      <img className="absolute opacity-40 z-[-1]" src={bgvector} />

      <div className="">
        <NavHome />
      </div>
      <div className=" flex flex-row ">
        <div className="flex-[0.15]">
          <Dashboard />
        </div>
        <div className="flex-[0.85]">
          <Hero />
        </div>
      </div>
    </div>
  );
};

export default Home;
