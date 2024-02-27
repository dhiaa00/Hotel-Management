import React from "react";

const Room = () => {
  return (
    <div className="room flex justify-between px-[8px] py-[10px] bg-inputColor rounded-[8px] border-solid border-[1px] border-[#D7D9DD]">
      <input type="checkbox" name="checkRoom" id="checkRoom" />
      <div className="number">0001</div>
      <div className="type">double</div>
      <div className="in-service">Yes</div>
      <div className="cleaned">Yes</div>
      <div className="available-on">17/12/2023</div>
      <i className="bi bi-chevron-down"></i>
    </div>
  );
};

export default Room;
