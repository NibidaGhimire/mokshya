import { useParams } from "react-router-dom";
import NavHome from "../components/NavHome";
import PlayMain from "../components/PlayMain";
import EscapeRoom from "../components/EscapeRoom";
import Levels from "../components/Levels";


const Play = () => {
  const { id, levelid } = useParams();

  return (
    <div className="flex flex-col gap-2">
      <div className="">
        <NavHome />
      </div>
      <div>
        {!id && !levelid && <PlayMain />}
        {id && !levelid && <Levels />}
        {id && levelid && <EscapeRoom />}
      </div>
    </div>
  );
};

export default Play;
