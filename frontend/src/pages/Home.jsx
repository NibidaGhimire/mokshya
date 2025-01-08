import Dashboard from "../components/Dashboard";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className="flex flex-row gap-2">
      <div className="flex-[0.2]">
        <Dashboard />
      </div>
      <div className="flex-[0.8] ">
        <Hero />
      </div>
    </div>
  );
};

export default Home;
