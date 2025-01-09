import { about } from "../assets";

const AboutMain = () => {
  return (
    <div className="justify-between flex items-center h-screen px-16">
      <div className="bg-bg/70 px-16 py-16 outline">
        <p className="text-lg mb-6 text-justify">
          Welcome to the{" "}
          <span className="text-primarygreen font-bold ">Mokshya!</span> Solve
          coding problems, find keys and escape the room to level up. You can
          choose from a variety of languages and frameworks to solve the
          problems. You can also earn coins by solving the problems and use them to buy hints.
        </p>
        <p className=" text-white py-2 rounded text-xl">
          Good luck!
        </p>
      </div>
      <img src={about} className=" w-2/3" />
    </div>
  );
};

export default AboutMain;
