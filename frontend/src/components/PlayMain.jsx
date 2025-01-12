import { frameworksndb, languages } from "../constants";
import Card from "./Card";
import Dashboard from "./Dashboard";

const PlayMain = () => {
  return (
    <div>
      <div className="flex flex-row gap-4 w-screen ">
        <div className="flex-[0.15]">
          <Dashboard />
        </div>
        <div className="flex flex-col overflow-x-auto flex-[0.85] mr-16 ">
          <div className="flex flex-col  ">
            <h1 className="font-bold text-2xl text-primarygreen mb-4 text-center">
              Languages
            </h1>
            <div className=" flex p-4 gap-2 overflow-scroll overflow-y-hidden">
              {languages.map((lang) => (
                <div key={lang.id}>
                  <Card item={lang} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col flex-[0.8] ">
            <h1 className="font-bold text-lg px-4">Frameworks & Databases</h1>
            <div className=" flex p-4 gap-2 overflow-scroll overflow-y-hidden">
              {frameworksndb.map((lang) => (
                <div key={lang.id}>
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
