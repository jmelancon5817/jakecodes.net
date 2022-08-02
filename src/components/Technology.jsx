import React from "react";

import Frontend from "../assets/react.png";
import Backend from "../assets/sql.png";
import Blockchain from "../assets/blockchain.png";

const Technology = () => {
  return (
    <div
      name="technology"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-[#df3c3c] p-2 inline">
            Technology
          </p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-8 text-center py-10 px-12 sm:px-0">
          <div className="shadow-md h-3/4 hover:scale-105 duration-500 py-1 rounded-lg shadow-blue-300">
            <img src={Frontend} alt="logo" className="w-80px mx-auto h-2/3" />
            <p className="mt-4">Front-end</p>
          </div>

          <div className="shadow-md h-3/4 hover:scale-105 duration-500 py-1 rounded-lg shadow-orange-500">
            <img src={Backend} alt="logo" className="w-80px mx-auto h-2/3" />
            <p className="mt-4">Back-end</p>
          </div>

          <div className="shadow-md h-3/4 hover:scale-105 duration-500 py-1 rounded-lg shadow-purple-300">
            <img src={Blockchain} alt="logo" className="w-80px mx-auto h-2/3" />
            <p className="mt-4">Blockchain</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
