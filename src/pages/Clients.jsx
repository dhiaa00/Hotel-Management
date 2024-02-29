import React, { useState } from "react";
import Client from "../components/clients/Client";
import { clients } from "../client-&-rooms";

const Clients = () => {
  const [clientsChecked, setClientsChecked] = useState(false);
  const [searchedClient, setSearchedClient] = useState("");

  const clientList = clients.filter((client) => {
    return (
      client.firstName.toLowerCase().includes(searchedClient.toLowerCase()) ||
      client.lastName.toLowerCase().includes(searchedClient.toLowerCase()) ||
      client.number.includes(searchedClient)
    );
  });

  return (
    <div className="client pt-10 px-5 flex flex-1 flex-col w-[79vw] max-[920px]:w-[90%]">
      <div className="client-header flex justify-between items-center py-[10px]  max-[720px]:space-x-2">
        <h1 className="text-[30px] pl-2 font-bold relative before:content-[''] before:absolute before:w-[3px] before:h-2/3  before:bg-mainColor before:top-[50%] before:left-[-5px] before:translate-y-[-50%]">
          Clients
        </h1>
        <div className="functionalities flex items-center gap-[10px] text-[18px] text-[#666]">
          <i className="bi bi-printer toBeHidden"></i>
          <input
            type="checkbox"
            name="checkAll"
            id="checkAll"
            className="toBeHidden"
            onChange={() => setClientsChecked(!clientsChecked)}
          />
          <div className="search flex items-center px-[5px] justify-center gap-[5px] bg-[#F7F7F7] border-[#0F0D83]/[0.1] border-[0.8px] border-solid rounded-[8px]">
            <i className="bi bi-search text-[20px] flex items-center"></i>
            <input
              type="search"
              name="search"
              id="search"
              className=" bg-[#F7F7F7] text-[18px] text-[#666] py-[5px] px-[2px] focus:outline-none max-[720px]:w-[100%]"
              placeholder="Type To Search..."
              value={searchedClient}
              onChange={(e) => setSearchedClient(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="clients-wrapper flex flex-col bg-white space-y-2 px-[10px] py-[20px]">
        <div className="titles text-center flex items-center justify-between px-[20px]">
          <div className="empty w-1/6 toBeHidden"></div>
          <div className="title font-bold text-[18px] text-center w-1/6">
            N°
          </div>
          <div className="title font-bold text-[18px] text-center w-1/6">
            Name
          </div>
          <div className="title font-bold text-[18px] w-1/6 toBeHidden">
            Surename
          </div>
          <div className="title font-bold text-[18px] w-1/6 toBeHidden">
            Phone Number
          </div>
          <div className="empty w-1/6"></div>
        </div>
        {clientList.map((client) => (
          <Client
            key={client.number}
            client={client}
            checked={clientsChecked}
          />
        ))}
      </div>
    </div>
  );
};

export default Clients;
