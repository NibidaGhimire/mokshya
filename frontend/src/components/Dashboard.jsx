import { useLocation, useNavigate } from "react-router-dom";
import { dashitems } from "../constants";
import useLogout from "../hooks/useLogout";


const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
    const { logout } = useLogout();

  return (
    <div className="flex flex-col w-full bg-bg/80 py-4 px-8 rounded-2xl shadow-sm shadow-white gap-8 min-h-screen h-full overflow-hidden sticky top-0">

      <ul>
        {dashitems.map((item) => (
          <li
            key={item.id}
            className={`px-4 py-2 rounded-lg hover:outline cursor-pointer ${
              location.pathname === item.path ? "text-primarygreen" : ""
            }`}
            onClick={() => navigate(item.path)}
          >
            
            {item.title}
          </li>
        ))}
      </ul>
      <h1 
      onClick={logout}
      className=" hover:outline hover:outline-secondary  bg-primary/10 hover:bg-bg hover:font-bold px-4 py-2 rounded-lg">Log Out</h1>
    </div>
  );
};

export default Dashboard;
