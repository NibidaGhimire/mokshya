import Dashboard from "../components/Dashboard";
import BuyMain from "../components/BuyMain";
import NavHome from "../components/NavHome";

const Buy = () => {
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
          <BuyMain />
        </div>
      </div>
    </div>
  );
};

export default Buy;
