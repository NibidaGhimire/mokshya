import BuyCoins from "./BuyCoins";
import BuyPro from "./BuyPro";

const BuyMain = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-2xl text-primarygreen mb-4 text-center ">
          Buy
        </h1>
        <BuyCoins />
        
        <BuyPro />
      </div>
    </div>
  );
};

export default BuyMain;
