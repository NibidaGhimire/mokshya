import { useNavigate } from "react-router-dom";
import { dashitems } from "../constants";

const Dashboard = () => {
    const navigate = useNavigate();

  return (
    <div className="flex flex-col text-white bg-bg/80 py-4 px-8 rounded-2xl shadow-sm shadow-white gap-8 h-screen overflow-hidden ">
      <h1 className="font-black text-3xl font-serif">MOKSHYA</h1>

      <ul>
        {dashitems.map((item) => (
          <li
            key={item.id}
            className="px-4 py-2 rounded-lg  hover:outline cursor-pointer"
            onClick={() => navigate(item.path)}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
