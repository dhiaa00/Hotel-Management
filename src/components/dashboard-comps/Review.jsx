import React from "react";
import Rating from "./Rating";

const Review = ({ userName, rating }) => {
  return (
    <div className="review flex flex-col justify-between px-2 py-4 bg-[#F0F3F8] border-solid border-[1px] border-[#D7D9DD] rounded-[10px]">
      <div className="preson flex gap-[5px] ">
        <i className="bi bi-person"></i>
        <div className="username font-bold">{userName}</div>
        <Rating rating={rating} />
      </div>
      <div className="feedback">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </div>
    </div>
  );
};

export default Review;
