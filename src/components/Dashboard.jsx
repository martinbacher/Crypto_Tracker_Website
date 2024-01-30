import LiveCoinsTracker from "./LiveCoinTracker";
import image from "/img/logo.jpeg";

const Dashboard = () => {
  return (
    <>
      <div className="flex justify-center ">
        <LiveCoinsTracker />
      </div>
      <br />

      <div className="h-4/5  pl-10 flex flex-col justify-between mt-">
        <div>
          <h1 className="text-white text-6xl">
            <span className="text-blue-500 text-8xl">BUY</span> &{" "}
            <span className="text-red-500 text-8xl">SELL</span> Crypto
          </h1>

          <p className="text-white text-2xl">
            World's biggest Cryptocurrency exchange available on web as well as
            mobile phones
          </p>
          <br />
          <br />

          <div className="">
            <img
              src={image}
              alt="Logo"
              style={{ width: "75rem", height: "40rem" }}
            />
          </div>
          <br />

          <button
            type="submit"
            className="bg-red-600 hover:bg-blue-700 text-white text-2xl font-bold py-2 px-5  rounded-full mx-auto mb-5"
          >
            EXPLORE MORE
          </button>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
