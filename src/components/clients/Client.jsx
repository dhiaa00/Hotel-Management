import React from "react";

const Client = () => {
  return (
    <div
      className="client relative flex justify-between px-[20px] py-[10px] bg-inputColor rounded-[8px] border-solid border-[1px] border-[#D7D9DD] after:content[''] after:absolute after:h-2/3 after:w-[2px] after:bg-mainColor after:top-1/2 after:left-2 after:translate-y-[-50%]
      text-center">
      <input
        type="checkbox"
        name="checkRoom"
        id="checkRoom"
        className="w-1/6"
      />
      <div className="number w-1/6">0001</div>
      <div className="name w-1/6">Elaziz</div>
      <div className="surename w-1/6">Dhia eddine</div>
      <div className="phone-number w-1/6">0632829102</div>
      <i className="bi bi-chevron-down w-1/6"></i>
    </div>
  );
};

export default Client;
