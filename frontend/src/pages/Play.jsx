import { useParams } from "react-router-dom";
import Levels from "../components/levels";
import NavHome from "../components/NavHome";
import PlayMain from "../components/PlayMain";

const Play = () => {
  const { id } = useParams(); 
  
  return (
    <div className="flex flex-col gap-2">
      <div className="">
        <NavHome />
      </div>
      <div>{!id ? <PlayMain /> : <Levels />}</div>
    </div>
  );
};

export default Play;
