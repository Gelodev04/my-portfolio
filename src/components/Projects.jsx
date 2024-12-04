import React from "react";
import ecommerce from "./images/ecommerce.png";
import game from "./images/game.png";

const HorizontalScrollCards = () => {
  const cards = [
    {
      id: 1,
      title: "E Commerce Website",
      description:
        "An e-commerce website built using React and Tailwind CSS, featuring functionalities like search, filtering, and an add-to-cart system.",
      img: ecommerce,
    },
    {
      id: 2,
      title: "Rock Paper Scissors",
      description: "A basic Rock Paper Scissors game developed using React.js, featuring an intuitive user interface where players can choose between rock, paper, or scissors.",
      img: game,
    },
    {
      id: 2,
      title: "Landing Page",
      description: "A responsive landing page built with React.js and styled using Tailwind CSS, ensuring compatibility across all devices, including mobile, tablet, and desktop.",
      img: game,
    },
  ];

  return (
    <div className="overflow-y-auto w-full    lg:w-[300px]  lg:h-[600px] overflow-x-auto cursor-default py-5  shadow-lg rounded-md">
      <div className=" px-1 flex lg:flex-col gap-1 w-full ">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-[#ffffff] dark:bg-[#282828] shadow-lg  h-[300px]  lg:mx-auto text-sm  rounded-lg w-60 p-4 flex-shrink-0 hover:shadow-lg transition-shadow"
          >
            <div className="h-[50%] ">
              <img className="object-cover h-full rounded-md " src={card.img} alt="" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 ">{card.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScrollCards;
