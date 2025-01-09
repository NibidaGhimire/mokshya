import AboutMain from "../components/AboutMain";
import Dashboard from "../components/Dashboard";
import NavHome from "../components/NavHome";

const About = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="">
        <NavHome />
      </div>
      <div className=" flex flex-row gap-2">
        <div className="flex-[0.15]">
          <Dashboard />
        </div>
        <div className="flex-[0.85]">
          <AboutMain />
        </div>
      </div>
    </div>
  );
};

export default About;
