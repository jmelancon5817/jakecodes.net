import React from "react";
import code from "../assets/projects/code.jpg";
import nftMint from "../assets/projects/nftMint.jpg";
import alienInvasion from "../assets/projects/alienInvasion.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: alienInvasion,
      href: "https://github.com/jmelancon5817/Alien-Invasion",
      title: "Alien Invasion Game",
    },
    {
      id: 2,
      src: nftMint,
      href: "https://github.com/jmelancon5817/NFT_Mint_Website",
      title: "NFT Mint Website",
    },
    {
      id: 3,
      src: code,
      href: "https://github.com/jmelancon5817/Codecademy-Full-Stack-Engineer-Career-Path",
      title: "Full-Stack Engineer Career Path",
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

        <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 pb-10">
          {portfolios.map(({ id, src, href, title }) => (
            <div
              key={id}
              className=" shadow-md shadow-gray-600 rounded-lg relative"
            >
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 w-full h-3/4 hover:opacity-50"
              />

              <div className="flex flex-col items-center justify-center">
                <div className="pt-1 text-gray-400">{title}</div>
                <button className=" px-4 py-1 m-2 mb-10 border-2 border-[#df3c3c] bg-[#df3c3c] rounded-xl duration-200 hover:scale-105">
                  <a href={href}>Code</a>
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
