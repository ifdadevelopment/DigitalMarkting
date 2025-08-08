import React from "react";
import { cardData } from "../../data"; 

const MiniCard = () => {
  return (
    <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-[22px] sm:text-[24px] lg:text-[24px] font-bold text-center text-[#333] mb-4">
        <span className="text-primary hover:opacity-60">Transform Your Career with </span> Our Advanced Digital Marketing Course
      </h2>
      <p className="text-center text-sm sm:text-[13px] text-gray-600 mb-10 max-w-4xl mx-auto">
        Lacking the skills to move forward in your career? Now you can become a certified Digital Marketing Specialist – without leaving your current job.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="text-black flex items-center gap-3 p-3 rounded"
            style={{ boxShadow: "2px 0 35px 0 rgba(68, 88, 144, 0.12)" }}
          >
            <img
              src={card.image}
              alt={card.text}
              className="w-12 h-12 object-contain"
            />
            <p className="text-xs font-nunito font-medium transition-transform duration-300 hover:translate-x-2">
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiniCard;
