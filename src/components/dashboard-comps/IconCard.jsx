import React from "react";

const IconCard = ({ icon, title, item1, item2, item3 }) => {
  const color = title === "Security Risks" ? "bg-[#323042]" : "bg-mainColor";
  return (
    <div
      className={`info-card w-[24%] text-white ${color} rounded-[10px] p-5 max-[1000px]:w-[250px] hover:translate-y-[-2px] transition-[0.6s] `}>
      <h2 className="flex justify-start gap-3 text-[17px] pb-5">
        <i className={`bi ${icon}`}></i>
        {title}
      </h2>
      <div className="card-stats flex justify-between">
        <div className=" card-stat  flex flex-col flex-1 align-top">
          <span className="font-bold text-[15px]">{item1}</span>
          <span className="text-[12px]">{item2}</span>
        </div>
        {title === "Security Risks" ? (
          <div className="card-stat flex items-center p-2 font-semibold text-[#02F646]">
            {item3}
          </div>
        ) : (
          <div className="card-stat flex items-center p-2 relative border-[6px] border-solid border-[#FFFDF4]/[.4] rounded-[50%]">
            {item3}
          </div>
        )}
      </div>
    </div>
  );
};

export default IconCard;
