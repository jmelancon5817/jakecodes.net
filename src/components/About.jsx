import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#df3c3c]">
            About
          </p>
        </div>

        <p className="text-xl text-gray-300 leading-8">
          <ul style={{ listStyleType: "disc" }}>
            <li>Hello, I am a self-taught web developer from Louisiana.</li>
            <li>
              I resigned from my previous position at an environmental
              consulting firm in pursuit of more fulfilling work in the tech
              industry.
            </li>
            <li>
              Since my departure I have continued to study computer science, web
              development, and blockchain technology.
            </li>
            <li>
              I am highly self-motivated, conscientious, and malleable in my
              acquisition of new skills.
            </li>
            <li>
              I am currently looking for an opportunity to narrow my focus and
              take on a new career.
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default About;
