import React from "react";

const Rating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(<i key={i} className="bi bi-star-fill text-[#FF8322]"></i>);
    } else if (i == Math.ceil(rating)) {
      stars.push(<i className="bi bi-star-half text-[#FF8322] "></i>);
    } else {
      stars.push(<i className="bi bi-star text-[#FF8322]"></i>);
    }
  }

  return (
    <div className="rating flex space-x-1 items-center justify-center">
      {stars}
    </div>
  );
};

export default Rating;
