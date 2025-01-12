import { useNavigate } from "react-router-dom";
import usePlayCourse from "../zustand/usePlayCourse";
import {levels} from '../assets';

const Levels = () => {
    const {clickedLanguage} = usePlayCourse();
    const navigate = useNavigate();

    const handleClick = () => {
      console.log("Level 1 clicked")
      navigate(`/${clickedLanguage.path}/level1`);
    }
  return (
    <div className="flex flex-col gap-2 px-10">
        <h1 className="font-bold text-4xl text-center text-primarygreen">{clickedLanguage.title}</h1>
    

        <img src={levels} alt="levels" 
        className="w-3/4 "
        onClick={handleClick}/>
      
    </div>
  );
}

export default Levels
