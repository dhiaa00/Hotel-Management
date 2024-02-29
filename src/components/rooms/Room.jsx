import React from "react";

const Room = ({ room, checked }) => {
  return (
    <div
      className="room relative flex justify-between px-[20px] py-[10px] bg-inputColor rounded-[8px] border-solid border-[1px] border-[#D7D9DD] after:content[''] after:absolute after:h-2/3 after:w-[2px] after:bg-mainColor after:top-1/2 after:left-2 after:translate-y-[-50%] text-center 
    ">
      {checked ? (
        <input
          type="checkbox"
          name="checkRoom"
          id="checkRoom"
          checked={true}
          className="w-[16.667%] toBeHidden"
        />
      ) : (
        <input
          type="checkbox"
          name="checkRoom"
          id="checkRoom"
          className="w-[16.667%] toBeHidden"
        />
      )}
      <div className="number w-[16.667%]">{room.number}</div>
      <div className="type w-[16.667%]">{room.type}</div>
      <div className="in-service w-[16.667%] toBeHidden">
        {room.inService ? "Yes" : "No"}
      </div>
      <div className="cleaned w-[16.667%] toBeHidden">
        {room.cleaned ? "Yes" : "No"}
      </div>
      <div className="available-on text-center w-[16.667%] max-[720px]:text-[12px]">
        {room.availableOn}
      </div>
    </div>
  );
};

export default Room;
