import React from "react";

import IconCard from "./IconCard";

const Dashboard = () => {
  return (
    <div className="dashboard  p-10 flex flex-1 flex-col justify-around">
      <h1 className="text-[30px] font-bold relative before:content-[''] before:absolute before:w-[3px] before:h-2/3  before:bg-mainColor before:top-[50%] before:left-[-5px] before:translate-y-[-50%]">
        Dahsboard
      </h1>
      <div className="info-cards flex justify-between">
        <IconCard
          title={"Occupancy"}
          item1={78}
          item2={"of 118 total"}
          item3={"67%"}
        />
        <IconCard
          title={"Security Risks"}
          item1={0}
          item2={"risks at the moment"}
          item3={"safe"}
        />
        <IconCard
          title={"Housekeeping"}
          item1={15}
          item2={"cleaned of 30"}
          item3={"50%"}
        />
        <IconCard
          title={"Guests' Reauests"}
          item1={8}
          item2={"completed of 15"}
          item3={"54%"}
        />
      </div>
    </div>
  );
};

export default Dashboard;
