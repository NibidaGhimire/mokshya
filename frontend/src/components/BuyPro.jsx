import { FaHandHoldingDollar } from "react-icons/fa6";

const BuyPro = () => {
  return (
    <div className="flex flex-col bg-bg w-full rounded-lg px-16 py-4  outline outline-1 hover:outline-primarygreen hover:outline-2">
      <h1 className="text-2xl font-bold text-primarygreen text-center">
        Get Pro
      </h1>
      <div className="flex flex-row items-center gap-4 justify-around">
        <FaHandHoldingDollar className="w-64 h-64" />
        <ol>
          <h1 className="text-lg font-bold text-primarygreen">Benefits:</h1>
          <li>
            <p className="text-base">- Unlimited access to all languages</p>
          </li>
          <li>
            <p className="text-base">
              - Unlimited access to all frameworks and databases
            </p>
          </li>
          <li>
            <p className="text-base">- Access to all levels</p>
          </li>
          <li>
            <p className="text-base">- 2x Coin Gain from each completion</p>
          </li>
          <li>
            <p className="text-base">- Ad-free experience</p>
          </li>
        </ol>
        <div className="flex flex-col items-center gap-8 "> 
          <h1 className="text-4xl font-bold text-primarygreen w-full">Rs.750/ month</h1>
          <button className="bg-primarygreen/50 hover:bg-primarygreen/70 text-white px-4 py-2 rounded-lg">
            Buy Now
            </button>
        </div>
      </div>
    </div>
  );
};

export default BuyPro;
