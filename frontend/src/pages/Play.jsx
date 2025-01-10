import { useParams } from "react-router-dom";
import Levels from "../components/levels";
import NavHome from "../components/NavHome";
import PlayMain from "../components/PlayMain";
import EscapeRoom from "../components/EscapeRoom";

const Play = () => {
  const { id, level } = useParams();

  return (
    <div className="flex flex-col gap-2">
      <div className="">
        <NavHome />
      </div>
      <div>
        {!id && !level && <PlayMain />}
        {id && !level && <Levels />}
        {id && level && <EscapeRoom />}
      </div>
    </div>
  );
};

export default Play;
