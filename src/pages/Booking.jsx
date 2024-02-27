import React from "react";
import BookingForm from "../components/form/BookingForm";

const Booking = () => {
  return (
    <div className="dashboard pt-10 px-5 flex flex-1 flex-col w-[79vw] justify-between gap-[20px] max-[920px]:w-[90%]">
      <h1 className="text-[30px] pl-2 font-bold relative before:content-[''] before:absolute before:w-[3px] before:h-2/3  before:bg-mainColor before:top-[50%] before:left-[-5px] before:translate-y-[-50%]">
        Booking
      </h1>
      <BookingForm />
    </div>
  );
};

export default Booking;
