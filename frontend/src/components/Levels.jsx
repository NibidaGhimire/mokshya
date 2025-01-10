import { useNavigate } from "react-router-dom";
import usePlayCourse from "../zustand/usePlayCourse";

const Levels = () => {
    const {clickedLanguage} = usePlayCourse();
    const navigate = useNavigate();

    const handleClick = () => {
      console.log("Level 1 clicked")
      navigate(`/${clickedLanguage.path}/level1`);
    }
  return (
    <div className="flex flex-col gap-2 px-10">
        <h1 className="font-bold text-4xl">{clickedLanguage.title}</h1>
    
        <h1 
          onClick={handleClick}
          className="cursor-pointer"
        >
          Level 1
        </h1>
      
    </div>
  );
}

export default Levels
