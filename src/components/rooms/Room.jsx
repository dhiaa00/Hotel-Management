import React from "react";

const Room = () => {
  return (
    <div
      className="room relative flex justify-between px-[20px] py-[10px] bg-inputColor rounded-[8px] border-solid border-[1px] border-[#D7D9DD] after:content[''] after:absolute after:h-2/3 after:w-[2px] after:bg-mainColor after:top-1/2 after:left-2 after:translate-y-[-50%]
    ">
      <input type="checkbox" name="checkRoom" id="checkRoom" />
      <div className="number">0001</div>
      <div className="type">double</div>
      <div className="in-service text-center w-[82.52px]">Yes</div>
      <div className="cleaned text-center w-[67.55px]">Yes</div>
      <div className="available-on text-center w-[106.88px]">17/12/2023</div>
      <i className="bi bi-chevron-down"></i>
    </div>
  );
};

export default Room;
