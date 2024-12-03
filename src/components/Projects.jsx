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
  ];

  return (
    <div className="w-full  overflow-x-auto cursor-default  py-3 shadow-lg rounded-md">
      <div className="flex gap-1 px-1">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-[#ffffff] shadow-lg border   rounded-lg w-60 p-4 flex-shrink-0 hover:shadow-lg transition-shadow"
          >
            <div className="h-[50%] ">
              <img className="object-cover h-full " src={card.img} alt="" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 ">{card.title}</h3>
            <p className="text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScrollCards;
