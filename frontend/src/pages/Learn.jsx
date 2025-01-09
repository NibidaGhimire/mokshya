import Dashboard from "../components/Dashboard";
import LearnMain from "../components/LearnMain";
import NavHome from "../components/NavHome";

const Learn = () => {
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
          <LearnMain />
        </div>
      </div>
    </div>
  );
};

export default Learn;
