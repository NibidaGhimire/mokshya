import NavHome from "../components/NavHome";
import PlayMain from "../components/PlayMain";

const Play = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="">
        <NavHome />
      </div>
      <div className="">
        <PlayMain />
      </div>
    </div>
  );
};

export default Play;
