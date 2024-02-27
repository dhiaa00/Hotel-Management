import React from "react";

const Room = () => {
  return (
    <div
      className="room relative flex justify-between px-[20px] py-[10px] bg-inputColor rounded-[8px] border-solid border-[1px] border-[#D7D9DD] after:content[''] after:absolute after:h-2/3 after:w-[2px] after:bg-mainColor after:top-1/2 after:left-2 after:translate-y-[-50%] text-center
    ">
      <input
        type="checkbox"
        name="checkRoom"
        id="checkRoom"
        className="w-[14.286%]"
      />
      <div className="number w-[14.286%]">0001</div>
      <div className="type w-[14.286%]">double</div>
      <div className="in-service w-[14.286%]">Yes</div>
      <div className="cleaned w-[14.286%]">Yes</div>
      <div className="available-on text-center w-[14.286%]">17/12/2023</div>
      <i className="bi bi-chevron-down w-[14.286%]"></i>
    </div>
  );
};

export default Room;
