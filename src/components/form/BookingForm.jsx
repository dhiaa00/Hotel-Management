import { doc } from "prettier";
import React, { useState } from "react";

const BookingForm = () => {
  const date = new Date();
  const [currentDate, setCurrentDate] = useState(
    date.toISOString().split("T")[0]
  );
  return (
    <form
      action=""
      className="flex flex-col justify-center items-center rounded-[10px] py-10 px-5 bg-white">
      <div className="inputs flex flex-wrap justify-center items-center gap-5">
        <div className="booking-input w-[200px] flex flex-col gap-[10px] justify-center items-start">
          <label htmlFor="firstName">First Name</label>
          <input id="firstName" type="text" placeholder="Enter First Name" />
        </div>
        <div className="booking-input w-[200px] flex flex-col gap-[10px] justify-center items-start">
          <label htmlFor="lastName">Last Name</label>
          <input id="lastName" type="text" placeholder="Enter Last Name" />
        </div>
        <div className="booking-input w-[200px] flex flex-col gap-[10px] justify-center items-start">
          <label htmlFor="phone">Phone Number</label>
          <input id="phone" type="tel" placeholder="Enter Phone Number" />
        </div>
        <div className="booking-input w-[200px] flex flex-col gap-[10px] justify-center items-start">
          <label htmlFor="idCard">ID Card</label>
          <label
            htmlFor="idCard"
            className=" photoUpload flex items-center justify-center bg-inputColor px-[50px] py-[10px] border-mainColor border-[1.5px] border-solid rounded-[5px] text-mainColor font-medium active:translate-y-[2px]">
            <i className="bi bi-upload mr-[10px]"></i>Upload
          </label>
          <input
            id="idCard"
            type="file"
            className=""
            style={{ display: "none" }}
          />
        </div>
        <div className="booking-input w-[200px] flex flex-col gap-[10px] justify-center items-start">
          <label htmlFor="familyNote">Family Note Book</label>
          <label
            htmlFor="familyNote"
            className=" photoUpload flex items-center justify-center bg-inputColor px-[50px] py-[10px] border-mainColor border-[1.5px] border-solid rounded-[5px] text-mainColor font-medium active:translate-y-[2px]">
            <i className="bi bi-upload mr-[10px]"></i>Upload
          </label>
          <input
            id="familyNote"
            type="file"
            className=""
            style={{ display: "none" }}
          />
        </div>
        <div className="booking-input w-[200px] flex flex-col gap-[10px] justify-center items-start">
          <label htmlFor="roomType"> Room Type</label>
          <select
            name="roomType"
            id="roomType"
            className="bg-inputColor px-[15px] py-[10px] pr-[50px]">
            <option value="single">Single</option>
            <option value="double">Double</option>
            <option value="sweat">Sweat</option>
          </select>
        </div>
        <div className="booking-input w-[200px] flex flex-col gap-[10px] justify-center items-start">
          <label htmlFor="extraBed"> Extra Bed</label>
          <select
            name="extraBed"
            id="extraBed"
            className="bg-inputColor px-[15px] py-[10px] pr-[50px]">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="booking-input w-[200px] flex flex-col gap-[10px] justify-center items-start">
          <label htmlFor="from">From</label>
          <input
            type="date"
            name="from"
            id="from"
            value={currentDate}
            onChange={(e) => setCurrentDate(e.target.value)}
          />
        </div>
        <div className="booking-input w-[200px] flex flex-col gap-[10px] justify-center items-start">
          <label htmlFor="to">To</label>
          <input
            type="date"
            name="to"
            id="to"
            value={currentDate}
            onChange={(e) => setCurrentDate(e.target.value)}
          />
        </div>
      </div>
      <div className="services w-full flex flex-col items-start gap-[10px] my-[20px]">
        <div className="restaurant w-full flex gap-[5px]">
          <input
            type="checkbox"
            name="restaurant-service"
            id="restaurant-service"
          />
          <label htmlFor="restaurant-service">Restaurant Service</label>
        </div>
        <div className="spa w-full flex gap-[5px]">
          <input type="checkbox" name="spa-service" id="spa-service" />
          <label htmlFor="spa-service">Spa Service</label>
        </div>
      </div>
      <div className="price w-full flex justify-start gap-2">
        <span className="font-bold">Total: </span> 15000DA
      </div>
      <button
        type="submit"
        className="bg-gradient-to-r from-[#608AF5] to-[#1E5EFF] text-white py-[10px] w-[200px] rounded-[10px]">
        Book
      </button>
    </form>
  );
};

export default BookingForm;
