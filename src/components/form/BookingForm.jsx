import React from "react";

const BookingForm = () => {
  return (
    <form
      action=""
      className="flex flex-wrap justify-center items-center gap-[20px] bg-white">
      <div className="booking-input flex flex-col justify-center items-start">
        <label htmlFor="firstName">First Name</label>
        <input id="firstName" type="text" placeholder="Enter First Name" />
      </div>
      <div className="booking-input flex flex-col justify-center items-start">
        <label htmlFor="lastName">Last Name</label>
        <input id="lastName" type="text" placeholder="Enter Last Name" />
      </div>
      <div className="booking-input flex flex-col justify-center items-start">
        <label htmlFor="phone">Phone Number</label>
        <input id="phone" type="tel" placeholder="Enter Phone Number" />
      </div>
      <div className="booking-input flex flex-col justify-center items-start">
        <label htmlFor="idCard">ID Card</label>
        <input id="idCard" type="file" className="after:content-['']" />
      </div>
    </form>
  );
};

export default BookingForm;
