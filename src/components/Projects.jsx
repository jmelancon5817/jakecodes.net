import React from "react";
import chainlinkKeepers from "../assets/projects/chainlinkKeepers.jpg";
import codecademy from "../assets/projects/codecademy.jpg";
import nftMint from "../assets/projects/nftMint.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: codecademy,
    },
    {
      id: 2,
      src: chainlinkKeepers,
    },
    {
      id: 3,
      src: nftMint,
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#df3c3c]">
            Projects
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 pb-10">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 w-full"
              />
              <div className="flex items-center justify-center">
                <button className=" px-4 py-1 m-4 border-2 border-[#df3c3c] bg-[#df3c3c] rounded-xl duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Portfolio;
