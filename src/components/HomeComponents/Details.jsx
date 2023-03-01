import { useState } from "react";
import player from "../../assets/player.jpg";
import GamesList from "./GamesList";

export const Details = () => {
  const [showTeam, setShowTeam] = useState(false);
  const [zoomIn, setZoomIn] = useState(false);

  const hoverOn = () => {
    setShowTeam(true);
    setZoomIn(true);
  };

  const hoverOut = () => {
    setShowTeam(false);
    setZoomIn(false);
  };

  return (
    <div className="h-screen w-full">
      <div className="flex flex-col justify-center h-full w-full gap-10 items-center relative z-30">
        <div
          id="dark-star"
          className="border-none 
          md:w-[90%]
          lg:w-3/6 lg:h-[45%] lg:absolute lg:left-12 lg:-bottom-32
          3xl:w-[40%] 3xl:h-[45%]
          4xl:w-[35%] 4xl:h-[30%] 4xl:left-44
          rounded-3xl 
          flex flex-col justify-start text-white "
        >
          <h1
            className=" 
            xs:text-2xl
            lg:text-3xl 
            3xl:text-4xl
            font-semibold w-5/6 mt-8 ml-10"
          >
            Need Help Climbing?
          </h1>
          <h1
            className=" 
            xs:w-5/6 
            lg:text-6xl
            3xl:text-7xl
            text-7xl w-5/6 font-bold mt-7 ml-10"
          >
            LET US DO THE WORK
          </h1>
          <p
            className="
          xs:w-5/6 
          3xl:w-full 3xl:text-2xl 
          4xl:w-[80%] 4xl:text-4xl 
          text-lg font-bold w-3/6 mt-8 ml-10"
          >
            Our game boosting services are designed to help you reach your
            gaming goals quickly and efficiently.
          </p>
          <div
            className="
            xs:mx-10 xs:my-5 xs:flex xs:justify-center 
            lg:absolute lg:bottom-3 lg:right-10
            3xl:bottom-5 3xl:right-0
            border-2 border-white rounded-3xl bg-gray-200 px-10 py-3 
            transition duration-300 hover:scale-105 hover:bg-transparent 
            cursor-pointer"
          >
            <p
              className="font-extrabold text-transparent bg-clip-text 
              bg-gradient-to-r from-darkStar2 via-darkStar3 to-darkStar1"
            >
              JOIN NOW
            </p>
          </div>
        </div>
        <div
          id="dark-star"
          className="
           xs:w-full xs:-mb-52
           sm:h-[600px]
           md:w-[90%]
           lg:w-2/6 lg:h-3/6 lg:absolute lg:right-10 lg:bottom-12
           3xl:h-3/5 3xl:w-[25%] 4xl:right-44
           border-none rounded-3xl w-[25%] h-[500px] 
           flex justify-center items-center text-white "
          onMouseEnter={hoverOn}
          onMouseLeave={hoverOut}
        >
          <div className="w-[98%] h-[98%] border-none rounded-3xl relative overflow-hidden">
            <img
              alt="player"
              src={player}
              className={`border-none rounded-3xl w-full h-full  object-cover ${
                zoomIn && "scale-110 "
              } duration-200`}
            />
            <div
              className={`flex justify-center items-center border-none rounded-3xl 
                bg-gradient-to-b from-gray-600 to-gray-900 opacity-70 w-full 
                h-full absolute top-0 ${!showTeam && "hidden"} `}
            >
              <div
                className="border-2 border-white rounded-3xl bg-gray-200 text-black px-10 py-3 
                transition duration-300 hover:scale-105 hover:bg-transparent hover:text-white font-extrabold cursor-pointer"
              >
                <button className="">MEET THE SQUAD</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full bg-black z-20 absolute">
        <GamesList />
      </div>
    </div>
  );
};

export default Details;
