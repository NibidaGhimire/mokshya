import { useNavigate } from "react-router-dom";
import usePlayCourse from "../zustand/usePlayCourse";

const Card = ({ item }) => {
  const navigate = useNavigate();
    const { setClickedLanguage } = usePlayCourse();

    const playLanguage = (item) => {
      setClickedLanguage(item);
      navigate(`/${item.path}`);
    };

  return (
    <>
      <div className="rounded-lg bg-bg/70 w-96 h-96 shadow-xl py-8 border-2 border-white hover:border-primarygreen flex flex-col justify-between">
        <img
          src={item.img}
          alt="image"
          className="w-32 h-32 object-contain mx-auto"
        />
        <div className="px-4 py-2 gap-2 flex flex-col">
          <h2 className=" text-primarygreen font-bold">{item.title}</h2>
          <p className=" text-ellipsis text-justify text-wrap">
            {item.description}
          </p>
        </div>
        <div className="flex justify-end px-4 py-2">
          <button
            onClick={() => playLanguage(item)}
            className=" px-8 py-2 rounded-lg bg-primarygreen/50 hover:bg-primarygreen text-bg"
          >
            {item.button}
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;

