import React from "react";

const Room = ({ number, type, inService, cleaned, availableOn }) => {
  return (
    <div
      className="room relative flex justify-between px-[20px] py-[10px] bg-inputColor rounded-[8px] border-solid border-[1px] border-[#D7D9DD] after:content[''] after:absolute after:h-2/3 after:w-[2px] after:bg-mainColor after:top-1/2 after:left-2 after:translate-y-[-50%] text-center 
    ">
      <input
        type="checkbox"
        name="checkRoom"
        id="checkRoom"
        className="w-[16.667%] toBeHidden"
      />
      <div className="number w-[16.667%]">{number}</div>
      <div className="type w-[16.667%]">{type}</div>
      <div className="in-service w-[16.667%] toBeHidden">{inService}</div>
      <div className="cleaned w-[16.667%] toBeHidden">{cleaned}</div>
      <div className="available-on text-center w-[16.667%] max-[720px]:text-[12px]">
        {availableOn}
      </div>
    </div>
  );
};

export default Room;
