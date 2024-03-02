import React from "react";
import IconCard from "../../components/dashboard-comps/IconCard";
import Review from "../../components/dashboard-comps/Review";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const Dashboard = ({ reservationData }) => {
  const options = {
    scales: {
      yAxes: [
        {
          stacked: true, // Disable stacking
        },
      ],
    },
    elements: {
      bar: {
        borderRadius: 5, // Adjust this value to your desired rounding
      },
    },
  };

  return (
    <div className="dashboard pt-10 px-5 flex flex-1 flex-col w-[79vw] justify-between gap-[20px] max-[920px]:w-[90%]">
      <h1 className="text-[30px] pl-2 font-bold relative before:content-[''] before:absolute before:w-[3px] before:h-2/3  before:bg-mainColor before:top-[50%] before:left-[-5px] before:translate-y-[-50%]">
        Dahsboard
      </h1>
      <div className="info-cards flex max-[1000px]:flex-wrap max-[1000px]:justify-center max-[1000px]:gap-[20px] justify-between">
        <IconCard
          icon={"bi-person"}
          title={"Occupancy"}
          item1={78}
          item2={"of 118 total"}
          item3={"67%"}
        />
        <IconCard
          icon={"bi-shield-check"}
          title={"Security Risks"}
          item1={0}
          item2={"risks at the moment"}
          item3={"safe"}
        />
        <IconCard
          icon={"bi-brush"}
          title={"Housekeeping"}
          item1={15}
          item2={"cleaned of 30"}
          item3={"50%"}
        />
        <IconCard
          icon={"bi-pencil-square"}
          title={"Guests' Requests"}
          item1={8}
          item2={"completed of 15"}
          item3={"54%"}
        />
      </div>
      <div className="reviews-stats flex justify-between max-[1000px]:flex-wrap max-[1000px]:justify-center max-[1000px]:gap-[20px] ">
        <div className="reviews h-[60vh] bg-white w-[48%] max-[1000px]:w-full p-5 rounded-[10px] overflow-x-hidden">
          <h2 className="text-[18px] pl-2 font-semibold relative before:content-[''] before:absolute before:w-[3px] before:h-2/3  before:bg-mainColor before:top-[50%] before:left-[-5px] before:translate-y-[-50%] mb-3">
            Latest Review
          </h2>
          <div className="reviews-list flex flex-col gap-[5px]">
            <Review userName={"Karim Djaber"} rating={4} />
            <Review userName={"Elon Musk"} rating={4.5} />
            <Review userName={"Si Moh"} rating={3} />
          </div>
        </div>
        <div className="stats flex flex-col bg-white w-[48%] max-[1000px]:w-full p-5 rounded-[10px] ">
          <h2 className="text-[18px] font-semibold relative before:content-[''] before:absolute before:w-[3px] pl-2 before:h-2/3  before:bg-mainColor before:top-[50%] before:left-[-5px] before:translate-y-[-50%]">
            Customer statistics
          </h2>
          <div className="chart flex flex-1 items-center justify-center h-full">
            <Bar data={reservationData} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
