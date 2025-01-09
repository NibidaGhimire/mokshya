import Dashboard from "../components/Dashboard";
import NavHome from "../components/NavHome";
import UserProfileMain from "../components/UserProfileMain";

const UserProfile = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="">
        <NavHome />
      </div>
      <div className=" flex flex-row gap-2">
        <div className="flex-[0.15]">
          <Dashboard />
        </div>
        <div className="flex-[0.85]">
          <UserProfileMain />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
