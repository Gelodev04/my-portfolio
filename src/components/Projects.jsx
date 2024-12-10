import React from "react";
import ecommerce from "./images/ecommerce.png";
import game from "./images/game.png";
import landingpage from "./images/landingpage.png";
import "./App.css"


const HorizontalScrollCards = () => {
  const cards = [
    {
      id: 1,
      title: "E Commerce Website",
      description:
        "An e-commerce website built using React and Tailwind CSS, featuring functionalities like search, filtering, and an add-to-cart system.",
      img: ecommerce,
      url: "https://github.com/Gelodev04/projects/tree/ecommerce/e%20commerce"
    },
    {
      id: 2,
      title: "Rock Paper Scissors",
      description: "A basic Rock Paper Scissors game developed using React.js, featuring an intuitive user interface where players can choose between rock, paper, or scissors.",
      img: game,
      url: "https://github.com/Gelodev04/projects/tree/rockpaperscissor/src"
    },
    {
      id: 2,
      title: "Landing Page",
      description: "A responsive landing page built with React.js and styled using Tailwind CSS, ensuring compatibility across all devices, including mobile, tablet, and desktop.",
      img: landingpage,
      url: "https://github.com/Gelodev04/projects/tree/landingpage/src"
    },
  ];

  return (
    <div className="overflow-y-auto w-full scroll-container     lg:w-[300px]  lg:h-[540px] overflow-x-auto cursor-default py-1  shadow-lg rounded-md">
      <div className="relative px-1 flex lg:flex-col gap-2 lg:gap-5 w-full ">
        {cards.map((card) => (
          <a target="_blank" href={card.url}><div
          key={card.id}
          className="bg-[#ffffff] hover:bg-[#e5e5e5] transition-all ease-out duration-700  hover:dark:bg-[#353535]  dark:bg-[#282828] shadow-lg h-[290px] lg:h-[310px] lg:mx-auto text-sm rounded-md lg:w-72 w-60 p-4 flex-shrink-0 hover:shadow-lg  group"
        >
          <div className="h-[50%] overflow-hidden rounded-md">
            <img
              className="object-cover w-full  h-full rounded-md transform transition-transform duration-300 ease-in-out group-hover:scale-110"
              src={card.img}
              alt="projectimage"
            />
            </div>
           <div className="flex flex-col lg:gap-1">
            <h3 className="text-xl transition-all ease-out duration-700 text-center font-medium text-gray-800  dark:text-gray-200 ">{card.title}</h3>
            <p className="text-gray-600 transition-all  h-[85px]  ease-out duration-700 dark:text-gray-300 lg:text-sm text-xs">{card.description}</p>
            <button className="text-gray-500    dark:text-gray-400 px-5 py-1 rounded-lg">Click to View</button>
            </div>
          </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScrollCards;
