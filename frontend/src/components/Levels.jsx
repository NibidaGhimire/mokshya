import usePlayCourse from "../zustand/usePlayCourse";

const Levels = () => {
    const {clickedLanguage} = usePlayCourse();
  return (
    <div className="flex flex-col gap-2 px-10">
        <h1 className="font-bold text-4xl">{clickedLanguage.title}</h1>
        
      
      
    </div>
  );
}

export default Levels
