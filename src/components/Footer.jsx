import React from "react";
import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaTwitter size={30} />
        </>
      ),
      href: "https://twitter.com/melancon_jake",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/jmelancon5817",
    },
    {
      id: 3,
      child: (
        <>
          <FaInstagram size={30} />
        </>
      ),
      href: "https://instagram.com/jake__melancon",
    },
  ];

  return (
    <div>
      <div className="border-t-2 flex justify-center items-center w-full h-20 px-4 z-10 text-white bg-gray-900">
        <ul className="flex">
          {links.map(({ id, child, href }) => (
            <li
              key={id}
              className="px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200 hover:text-white"
            >
              <a href={href}>{child}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
