import React, { useState } from "react";
import Room from "../components/rooms/Room";
import { rooms } from "../client-&-rooms";

const Rooms = () => {
  const [roomsChecked, setRoomsChecked] = useState(false);
  const [searchedRoom, setSearchedRoom] = useState("");

  const roomList = rooms.filter((room) => {
    return (
      room.number.toLowerCase().includes(searchedRoom.toLowerCase()) ||
      room.type.toLowerCase().includes(searchedRoom.toLowerCase())
    );
  });

  return (
    <div className="rooms pt-10 px-5 flex flex-1 flex-col w-[79vw] max-[920px]:w-[90%]">
      <div className="rooms-header flex justify-between items-center py-[10px] max-[720px]:space-x-2">
        <h1 className="text-[30px] pl-2 font-bold relative before:content-[''] before:absolute before:w-[3px] before:h-2/3 before:bg-mainColor before:top-[50%] before:left-[-5px] before:translate-y-[-50%] ">
          Rooms
        </h1>
        <div className="functionalities flex items-center gap-[10px] text-[18px] text-[#666]">
          <i className="bi bi-printer toBeHidden cursor-pointer"></i>
          <input
            type="checkbox"
            name="checkAll"
            id="checkAll"
            className="toBeHidden"
            onChange={() => setRoomsChecked(!roomsChecked)}
          />
          <div className="search flex items-center px-[5px] justify-center gap-[5px] bg-[#F7F7F7] border-[#0F0D83]/[0.1] border-[0.8px] border-solid rounded-[8px]">
            <i className="bi bi-search text-[20px] flex items-center"></i>
            <input
              type="search"
              name="search"
              id="search"
              className=" bg-[#F7F7F7] text-[18px] text-[#666] py-[5px] max-[720px]:w-[100%] focus:outline-none"
              placeholder="Type To Search..."
              value={searchedRoom}
              onChange={(e) => setSearchedRoom(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="rooms-wrapper flex flex-col bg-white space-y-2 px-[10px] py-[20px] ">
        <div className="titles text-center flex items-center justify-between px-[20px]">
          <div className="empty w-[16.667%] toBeHidden"></div>
          <div className="title  font-bold text-[18px] text-center w-[16.667%] max-[720px]:text-[16px]">
            N°
          </div>
          <div className="title font-bold text-[18px] text-center w-[16.667%] max-[720px]:text-[16px]">
            Type
          </div>
          <div className="title font-bold text-[18px] w-[16.667%] toBeHidden">
            In Service
          </div>
          <div className="title font-bold text-[18px] w-[16.667%] toBeHidden">
            Cleaned
          </div>
          <div className="title text-center font-bold text-[18px] w-[16.667%] max-[720px]:text-[12px]">
            Available On
          </div>
        </div>
        {roomList.map((room) => (
          <Room key={room.number} room={room} checked={roomsChecked} />
        ))}
      </div>
    </div>
  );
};

export default Rooms;
