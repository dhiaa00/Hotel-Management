import React from "react";
import Room from "../components/rooms/Room";

const Rooms = () => {
  return (
    <div className="rooms pt-10 px-5 flex flex-1 flex-col w-[79vw] max-[920px]:w-[90%]">
      <div className="rooms-header flex justify-between items-center py-[10px]">
        <h1 className="text-[30px] pl-2 font-bold relative before:content-[''] before:absolute before:w-[3px] before:h-2/3  before:bg-mainColor before:top-[50%] before:left-[-5px] before:translate-y-[-50%]">
          Rooms
        </h1>
        <div className="functionalities flex items-center gap-[10px] text-[18px] text-[#666]">
          <i className="bi bi-printer"></i>
          <input type="checkbox" name="checkAll" id="checkAll" />
          <div className="search flex items-center px-[5px] justify-center gap-[5px] bg-[#F7F7F7] border-[#0F0D83]/[0.1] border-[0.8px] border-solid rounded-[8px]">
            <i className="bi bi-search text-[20px] flex items-center"></i>
            <input
              type="search"
              name="search"
              id="search"
              className=" bg-[#F7F7F7] text-[18px] text-[#666] py-[5px]"
              placeholder="Type To Search..."
            />
          </div>
        </div>
      </div>
      <div className="rooms-wrapper flex flex-col bg-white space-y-2 px-[10px] py-[20px]">
        <div className="titles text-center flex items-center justify-between px-[20px]">
          <div className="empty w-[16.667%]"></div>
          <div className="title  font-bold text-[18px] text-center w-[16.667%]">
            N°
          </div>
          <div className="title font-bold text-[18px] text-center w-[16.667%]">
            Type
          </div>
          <div className="title font-bold text-[18px] w-[16.667%]">
            In Service
          </div>
          <div className="title font-bold text-[18px] w-[16.667%]">Cleaned</div>
          <div className="title font-bold text-[18px] w-[16.667%]">
            Available On
          </div>
        </div>
        <Room
          number={"0001"}
          type={"double"}
          inService={"Yes"}
          cleaned={"No"}
          availableOn={"17/10/2023"}
        />
        <Room
          number={"0002"}
          type={"single"}
          inService={"Yes"}
          cleaned={"No"}
          availableOn={"20/10/2023"}
        />
        <Room
          number={"0003"}
          type={"sweat"}
          inService={"No"}
          cleaned={"Yes"}
          availableOn={"//"}
        />
      </div>
    </div>
  );
};

export default Rooms;
