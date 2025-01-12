import { BiSolidCoinStack } from 'react-icons/bi';

const BuyCoins = () => {
  return (
    <div className="flex flex-row gap-4 justify-around ">
      <div className="flex flex-col items-center justify-center bg-bg/80 rounded-lg px-16 py-4 w-fit outline outline-1 hover:outline-primarygreen hover:outline-2">
        <h1 className="text-2xl underline font-semibold text-primarygreen text-center">
          100 Coins
        </h1>
        <div className="flex flex-row gap-2 items-center">
          <BiSolidCoinStack className="w-40 h-40" />
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold ">Rs. 100</h1>

            <button className="bg-primarygreen/50 hover:bg-primarygreen/70 text-white px-4 py-2 rounded-lg">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-bg/80 rounded-lg px-16 py-4 w-fit  outline outline-1 hover:outline-primarygreen hover:outline-2">
        <h1 className="text-2xl underline font-semibold text-primarygreen text-center">
          200 Coins
        </h1>
        <div className="flex flex-row gap-2 items-center">
          <BiSolidCoinStack className="w-40 h-40" />
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold ">Rs. 200</h1>

            <button className="bg-primarygreen/50 hover:bg-primarygreen/70 text-white px-4 py-2 rounded-lg">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-bg/80 rounded-lg px-16 py-4 w-fit outline outline-1 hover:outline-primarygreen hover:outline-2">
        <h1 className="text-2xl underline font-semibold text-primarygreen text-center">
          400 Coins
        </h1>
        <div className="flex flex-row gap-2 items-center">
          <BiSolidCoinStack className="w-40 h-40" />
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold ">Rs. 400</h1>

            <button className="bg-primarygreen/50 hover:bg-primarygreen/70 text-white px-4 py-2 rounded-lg">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyCoins
