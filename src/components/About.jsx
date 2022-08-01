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

        <p className="text-xl mt-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima,
          laborum quia? Repellendus iste voluptates vitae possimus autem nostrum
          eius. Dolores iste dolorum quia fugiat quos. Suscipit vitae amet alias
          impedit aperiam quidem quam? Totam aspernatur molestias ex inventore.
          Voluptatem quod iusto deleniti eligendi eos amet asperiores aliquam
          earum voluptas maiores.
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat fuga,
          doloribus quos consequuntur earum inventore quae odit sed, dolores
          corrupti eius. Deserunt, iure fugit. Expedita, reiciendis quos! Dolor
          modi voluptatem quae asperiores voluptas ipsum magnam perspiciatis
          eaque? Voluptate temporibus, vel deserunt officia aperiam a, nulla
          consectetur eaque dolores, cupiditate tenetur!
        </p>
      </div>
    </div>
  );
};

export default About;
