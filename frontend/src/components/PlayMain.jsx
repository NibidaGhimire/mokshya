import { frameworksndb, languages } from "../constants";
import Card from "./Card";
import Dashboard from "./Dashboard";

const PlayMain = () => {
  return (
    <div>
      <div className="flex flex-row gap-4 w-screen ">
        <div className="flex-[0.2]">
          <Dashboard />
        </div>
        <div className="flex flex-col overflow-x-auto flex-[0.8]">
          <div className="flex flex-col  ">
            <h1 className="font-bold text-lg px-4">Languages</h1>
            <div className=" flex p-4 gap-2 overflow-scroll">
              {languages.map((lang) => (
                <div key={lang.id} className="">
                  <Card item={lang} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col flex-[0.8] ">
            <h1 className="font-bold text-lg px-4">Languages</h1>
            <div className=" flex p-4 gap-2 overflow-scroll">
              {frameworksndb.map((lang) => (
                <div key={lang.id} className="">
                  <Card item={lang} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayMain;
